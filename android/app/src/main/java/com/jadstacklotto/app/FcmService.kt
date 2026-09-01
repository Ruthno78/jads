package com.jadstacklotto.app

import android.content.Intent
import android.content.SharedPreferences
import android.util.Log
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

/**
 * V87 — Resepsyon push FCM natif.
 *
 * - onNewToken() : sove tokèn nan lokalman epi eseye anrejistre l imedyatman
 *   nan Supabase (si yon MainActivity aktif ka fè pon JS la; sinon, JS la
 *   pral mande tokèn "annatant" la lè paj la fin chaje — gade push-native.js).
 * - onMessageReceived() :
 *     • si app la ap woule an premye plan (foreground) ak WebView aktif,
 *       n ap pase mesaj la dirèkteman bay JS (`Lotri.push.onForegroundPush`)
 *       pou l ka afiche you toast san dwoublon ak notifikasyon sistèm nan ;
 *     • si non, n ap poste yon notifikasyon natif Android ki, lè yo peze
 *       sou li, ouvri app la epi REDIRIJE otomatikman sou paj/`link` ki
 *       te vini nan payload la (deep-link natif).
 */
class FcmService : FirebaseMessagingService() {

    companion object {
        const val PREFS = "jl_push_prefs"
        const val KEY_PENDING_TOKEN = "pending_fcm_token"
        private const val TAG = "JL-FCM"
    }

    override fun onNewToken(token: String) {
        super.onNewToken(token)
        Log.d(TAG, "Nouvo tokèn FCM resevwa")
        prefs().edit().putString(KEY_PENDING_TOKEN, token).apply()
        val js = "window.Lotri && window.Lotri.push && window.Lotri.push.onNativeToken && " +
            "window.Lotri.push.onNativeToken(${jsonString(token)});"
        MainActivity.evaluateJsOnActiveInstance(js)
    }

    override fun onMessageReceived(message: RemoteMessage) {
        super.onMessageReceived(message)
        val data = message.data
        val title = message.notification?.title ?: data["title"] ?: getString(R.string.app_name)
        val body = message.notification?.body ?: data["body"] ?: ""
        val link = data["link"] ?: ""
        val badge = data["badge"]?.toIntOrNull() ?: 0

        if (MainActivity.isForeground) {
            val js = "window.Lotri && window.Lotri.push && window.Lotri.push.onForegroundPush && " +
                "window.Lotri.push.onForegroundPush(${jsonString(title)}, ${jsonString(body)}, ${jsonString(link)});"
            MainActivity.evaluateJsOnActiveInstance(js)
        } else {
            PushNotificationHelper.showPush(this, title, body, link, badge)
        }

        sendBroadcast(Intent(QuickActionsService.ACTION_REFRESH_BADGE).apply {
            setPackage(packageName)
            putExtra("badge", badge)
        })
    }

    private fun prefs(): SharedPreferences = getSharedPreferences(PREFS, MODE_PRIVATE)

    private fun jsonString(s: String): String {
        val escaped = s.replace("\\", "\\\\").replace("\"", "\\\"")
            .replace("\n", "\\n").replace("\r", "")
        return "\"$escaped\""
    }
}
