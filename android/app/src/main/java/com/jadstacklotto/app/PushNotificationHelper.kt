package com.jadstacklotto.app

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import kotlin.random.Random

/**
 * V87 — Kanal + konstriksyon notifikasyon push natif yo.
 *
 * Badj sou icon aplikasyon an: depi API 26, Android jere sa otomatikman
 * pou lanseur ki sipòte l (Pixel, la pifò OEM modèn) chak fwa gen yon
 * notifikasyon aktif ki soti nan yon channel ki pèmèt badj (defo: wi).
 * `setNumber()` anba a bay lanseur yo yon chif egzat pou montre kote yo
 * sipòte chif la (Samsung, Nokia, elt.).
 */
object PushNotificationHelper {

    const val CHANNEL_ID_DEFAULT = "jl_default"
    const val CHANNEL_ID_QUICK_ACTIONS = "jl_quick_actions"

    const val EXTRA_REDIRECT_PATH = "redirect_path"

    fun ensureChannels(ctx: Context) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return
        val nm = ctx.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager

        val defaultChannel = NotificationChannel(
            CHANNEL_ID_DEFAULT,
            ctx.getString(R.string.push_channel_name),
            NotificationManager.IMPORTANCE_HIGH
        ).apply {
            description = ctx.getString(R.string.push_channel_desc)
            enableLights(true)
            enableVibration(true)
            setShowBadge(true)
        }
        nm.createNotificationChannel(defaultChannel)

        val quickChannel = NotificationChannel(
            CHANNEL_ID_QUICK_ACTIONS,
            ctx.getString(R.string.quick_actions_channel_name),
            NotificationManager.IMPORTANCE_LOW
        ).apply {
            description = ctx.getString(R.string.quick_actions_channel_desc)
            setShowBadge(false)
        }
        nm.createNotificationChannel(quickChannel)
    }

    /** Kreye Intent ki ouvri MainActivity epi rejwenn `link` la otomatikman. */
    private fun openIntent(ctx: Context, link: String): PendingIntent {
        val intent = Intent(ctx, MainActivity::class.java).apply {
            flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP or
                Intent.FLAG_ACTIVITY_SINGLE_TOP
            putExtra(EXTRA_REDIRECT_PATH, link)
        }
        val flags = PendingIntent.FLAG_UPDATE_CURRENT or
            (if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) PendingIntent.FLAG_IMMUTABLE else 0)
        return PendingIntent.getActivity(ctx, Random.nextInt(), intent, flags)
    }

    fun showPush(ctx: Context, title: String, body: String, link: String, badge: Int) {
        ensureChannels(ctx)
        val notif = NotificationCompat.Builder(ctx, CHANNEL_ID_DEFAULT)
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle(title)
            .setContentText(body)
            .setStyle(NotificationCompat.BigTextStyle().bigText(body))
            .setAutoCancel(true)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setCategory(Notification.CATEGORY_MESSAGE)
            .setContentIntent(openIntent(ctx, link))
            .apply { if (badge > 0) setNumber(badge) }
            .build()
        NotificationManagerCompat.from(ctx).notify(Random.nextInt(), notif)
    }
}
