# V87 — Push Notifications Natif Android : Etap Manyèl ki Rete

Tout kòd la (Android + Supabase) fin ekri. Men sa ki mande yon aksyon
MANYÈL ou paske yo mande kredansyèl ki pa ka jenere otomatikman.

## 1) Firebase — kreye pwojè a
1. Ale sou https://console.firebase.google.com → "Add project" → itilize
   non `JADSTACK LOTTO` (oswa nenpòt non).
2. Anndan pwojè a: "Add app" → Android → package name egzakteman:
   `com.jadstacklotto.app`
3. Telechaje `google-services.json` epi mete l nan:
   `android/app/google-services.json`
   (San fichye sa a, build la ap kontinye mache, men push la p ap fonksyone
   — plugin Firebase la gaded pou pa kraze konpilasyon.)

## 2) Firebase — service account pou Edge Function lan voye push
1. Firebase Console → ⚙️ Paramèt Pwojè → "Service accounts"
2. "Generate new private key" → sa telechaje yon fichye JSON.
3. Kopye TOUT kontni fichye sa a — ou pral bezwen l nan etap 4.

## 3) Deplwaye Edge Function `send-push`
Kòd la deja ekri nan `supabase/functions/send-push/index.ts` (nan zip la).
Deplwaye l ak Supabase CLI:
```
supabase functions deploy send-push --project-ref lauyrbuyegsgibfoawme --no-verify-jwt
```
(`--no-verify-jwt` paske se yon trigger SQL entèn ki rele l ak yon segrè
pa li menm, pa yon itilizatè ak yon JWT.)

## 4) Konfigire segrè yo pou fonksyon an
Nan Supabase Dashboard → Edge Functions → `send-push` → Secrets, ajoute:

| Non | Valè |
|---|---|
| `FCM_SERVICE_ACCOUNT_JSON` | Tout kontni fichye service-account.json ou telechaje nan etap 2 |
| `SEND_PUSH_WEBHOOK_SECRET` | `57f2428c40339757d75d9b242e12c89ba0a693540c8a9c2c` |

(Segrè sa a se menm valè ki deja anrejistre nan tab
`public.jl43_push_config.webhook_secret` — deja konfigire nan baz done a.)

## 5) Teste
1. Rebuild APK la (`google-services.json` la dwe la).
2. Enstale sou yon telefòn, konekte ak yon kont, kite app la nan background.
3. Fè yon lòt kont (oswa ou menm) kreye yon nouvo antre nan
   `jl43_notifications` pou premye a (egz. voye yon mesaj chat, oswa yon
   evènman ki deja jenere yon notifikasyon jl43).
4. Notifikasyon an dwe parèt nan barrre sistèm Android la; peze sou li dwe
   ouvri app la epi ale dirèkteman sou paj ki nan `link` la (redireksyon
   otomatik); yon badj dwe parèt sou icon app la.

## Sa ki DEJA fèt san ou bezwen fè anyen
- Baz done: tab `jl43_device_tokens`, `jl43_push_config`, RPC pou
  anrejistre/retire tokèn, trigger ki rele Edge Function otomatikman.
- Android: `FcmService`, `PushNotificationHelper` (channel + badj +
  deep-link), `QuickActionsService` (notifikasyon pèsistan ak bouton
  rakousi pou chak wòl), bridge JS `push-native.js` konekte nan tout
  paj (`ajan.html`, `konpayi.html`, `employeur.html`, `super-admin.html`).
- Enprimant Bluetooth (Q2i) ak telechajman fichye (`FileDownloader`,
  `DownloadManager`) te DEJA natif e fonksyonèl anvan chanjman sa a —
  yo pa t bezwen okenn koreksyon.
