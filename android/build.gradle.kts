plugins {
    id("com.android.application") version "8.5.2" apply false
    id("org.jetbrains.kotlin.android") version "1.9.24" apply false
    // V87 — Firebase Cloud Messaging (push notifications natives).
    // Egzije fichye android/app/google-services.json (jwenn li nan
    // Firebase Console > Paramèt Pwojè > Zouti ou yo > Android app).
    id("com.google.gms.google-services") version "4.4.2" apply false
}
