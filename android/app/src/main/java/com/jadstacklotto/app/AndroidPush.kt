package com.jadstacklotto.app

import android.app.Activity
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import android.webkit.JavascriptInterface

/**
 * V87 — Pon JS <-> Android pou push notifications, badj, ak notifikasyon
 * "aksyon rapid" pèsistan an.
 *
 * Kote JS rele l: window.AndroidPush.xxx() — gade
 * public/assets/js/push-native.js pou API piblik `window.Lotri.push`.
 */
class AndroidPush(private val activity: Activity?) {

    private fun ctx(): Context? = activity?.applicationContext

    /** JS rele sa lè paj la fin chaje pou l pran tokèn FCM ki t ap tann yo. */
    @JavascriptInterface
    fun getPendingToken(): String {
        val c = ctx() ?: return ""
        val prefs = c.getSharedPreferences(FcmService.PREFS, Context.MODE_PRIVATE)
        val token = prefs.getString(FcmService.KEY_PENDING_TOKEN, "") ?: ""
        return token
    }

    @JavascriptInterface
    fun isNativePushAvailable(): Boolean = true

    /** Kòmanse/mete ajou notifikasyon "aksyon rapid" pèsistan an. */
    @JavascriptInterface
    fun startQuickActions(title: String, actionsJson: String) {
        val c = ctx() ?: return
        QuickActionsService.start(c, title, actionsJson)
    }

    @JavascriptInterface
    fun stopQuickActions() {
        val c = ctx() ?: return
        QuickActionsService.stop(c)
    }

    /**
     * Efase badj/notifikasyon push lè itilizatè a li yo nan app la —
     * SAN touche notifikasyon "aksyon rapid" pèsistan an (QuickActionsService),
     * ki dwe rete vizib toutan.
     */
    @JavascriptInterface
    fun clearBadge() {
        val c = ctx() ?: return
        try {
            val nm = c.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                nm.activeNotifications
                    .filter { it.id != QuickActionsService.NOTIF_ID }
                    .forEach { nm.cancel(it.id) }
            } else {
                nm.cancelAll()
            }
        } catch (_: Exception) {}
    }
}
