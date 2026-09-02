plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("com.google.gms.google-services") apply false
}

// V87 — aplike plugin Firebase la SÈLMAN si google-services.json prezan,
// pou pa kraze konpilasyon an pou moun ki poko fin konfigire Firebase la.
// Mete fichye a nan android/app/google-services.json (Firebase Console >
// Paramèt Pwojè > Aplikasyon Android ou a > download google-services.json).
val hasFirebaseConfig = file("google-services.json").exists()
if (hasFirebaseConfig) {
    apply(plugin = "com.google.gms.google-services")
}

android {
    namespace = "com.jadstacklotto.app"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.jadstacklotto.app"
        minSdk = 24
        targetSdk = 34
        versionCode = 67
        versionName = "8.7"
    }

    // V95 — siyati release la OPSYONÈL: si keystore a pa dekode (pa gen
    // sekrè CI konfigire), build la kontinye e li pwodui yon APK release
    // ki pa siyen (app-release-unsigned.apk) olye li kraze workflow la.
    val releaseKeystore = file("release.keystore")
    if (releaseKeystore.exists()) {
        signingConfigs {
            create("release") {
                storeFile = releaseKeystore
                storePassword = System.getenv("ANDROID_KEYSTORE_PASSWORD")
                keyAlias = System.getenv("ANDROID_KEY_ALIAS")
                keyPassword = System.getenv("ANDROID_KEY_PASSWORD")
            }
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
            if (releaseKeystore.exists()) {
                signingConfig = signingConfigs.getByName("release")
            }
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
    buildFeatures { viewBinding = true }
}

dependencies {
    implementation("androidx.core:core-ktx:1.13.1")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("com.google.android.material:material:1.12.0")
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")
    implementation("androidx.swiperefreshlayout:swiperefreshlayout:1.1.0")
    implementation("androidx.core:core-splashscreen:1.0.1")
    implementation("androidx.activity:activity-ktx:1.9.1")
    implementation("androidx.biometric:biometric:1.1.0")
    // V95 — WebViewAssetLoader: sèvi paj lokal yo (ajan.html + assets) sou
    // yon https:// vityèl (appassets.androidplatform.net) olye file://,
    // sa evite pwoblèm CORS/localStorage/origin ak WebView lokal la.
    implementation("androidx.webkit:webkit:1.12.1")

    // V87 — Push notifications natifs (Firebase Cloud Messaging)
    implementation(platform("com.google.firebase:firebase-bom:33.5.1"))
    implementation("com.google.firebase:firebase-messaging-ktx")
}
