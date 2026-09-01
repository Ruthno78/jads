package com.jadstacklotto.app

import android.app.Notification
import android.app.PendingIntent
import android.app.Service
import android.content.Context
import android.content.Intent
import android.os.Build
import android.os.IBinder
import androidx.core.app.NotificationCompat
import org.json.JSONArray

/**
 * V87 — Notifikasyon "aksyon rapid" ki rete la (persistan) pandan app la
 * ap woule oswa an background, ak jiska 3 bouton rakousi ki mennen
 * dirèkteman nan yon paj/vi espesifik nan app la san bezwen ouvri meni an.
 *
 * JS kontwole kontni bouton yo (etikèt + paj) atravè bridge
 * `window.AndroidPush.startQuickActions(jsonArray)` — kidonk chak wòl
 * (ajan, konpayi, super admin...) ka pwopoze pwòp rakousi pa yo san
 * chanjman nan kòd Kotlin la.
 */
class QuickActionsService : Service() {

    companion object {
        const val NOTIF_ID = 9001
        const val ACTION_START = "com.jadstacklotto.app.action.START_QUICK_ACTIONS"
        const val ACTION_STOP = "com.jadstacklotto.app.action.STOP_QUICK_ACTIONS"
        const val ACTION_REFRESH_BADGE = "com.jadstacklotto.app.action.REFRESH_BADGE"
        const val EXTRA_TITLE = "title"
        const val EXTRA_ACTIONS_JSON = "actions_json"

        fun start(ctx: Context, title: String, actionsJson: String) {
            val intent = Intent(ctx, QuickActionsService::class.java).apply {
                action = ACTION_START
                putExtra(EXTRA_TITLE, title)
                putExtra(EXTRA_ACTIONS_JSON, actionsJson)
            }
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) ctx.startForegroundService(intent)
            else ctx.startService(intent)
        }

        fun stop(ctx: Context) {
            ctx.stopService(Intent(ctx, QuickActionsService::class.java))
        }
    }

    override fun onBind(intent: Intent?): IBinder? = null

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        if (intent?.action == ACTION_STOP) {
            stopForeground(STOP_FOREGROUND_REMOVE)
            stopSelf()
            return START_NOT_STICKY
        }
        val title = intent?.getStringExtra(EXTRA_TITLE) ?: getString(R.string.app_name)
        val actionsJson = intent?.getStringExtra(EXTRA_ACTIONS_JSON) ?: "[]"
        val notif = buildNotification(title, actionsJson)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            startForeground(NOTIF_ID, notif, android.content.pm.ServiceInfo.FOREGROUND_SERVICE_TYPE_SPECIAL_USE)
        } else {
            startForeground(NOTIF_ID, notif)
        }
        return START_STICKY
    }

    private fun buildNotification(title: String, actionsJson: String): Notification {
        PushNotificationHelper.ensureChannels(this)
        val builder = NotificationCompat.Builder(this, PushNotificationHelper.CHANNEL_ID_QUICK_ACTIONS)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(title)
            .setContentText(getString(R.string.quick_actions_hint))
            .setOngoing(true)
            .setOnlyAlertOnce(true)
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .setContentIntent(openAppIntent(""))

        try {
            val arr = JSONArray(actionsJson)
            for (i in 0 until minOf(arr.length(), 3)) {
                val obj = arr.getJSONObject(i)
                val label = obj.optString("label", "")
                val view = obj.optString("view", "")
                if (label.isBlank()) continue
                builder.addAction(0, label, openAppIntent(view, requestCode = 100 + i))
            }
        } catch (_: Exception) { /* JSON envalid — notifikasyon san bouton siplemantè */ }

        return builder.build()
    }

    private fun openAppIntent(view: String, requestCode: Int = 99): PendingIntent {
        val intent = Intent(this, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP or
                Intent.FLAG_ACTIVITY_SINGLE_TOP
            putExtra(PushNotificationHelper.EXTRA_REDIRECT_PATH, view)
        }
        val flags = PendingIntent.FLAG_UPDATE_CURRENT or
            (if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) PendingIntent.FLAG_IMMUTABLE else 0)
        return PendingIntent.getActivity(this, requestCode, intent, flags)
    }
}
