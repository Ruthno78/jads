# JADSTACK LOTTO — Agent-only frontend final

- `public/ajan.html` is the only public application HTML page.
- Authentication is integrated inside `ajan.html`; no `auth.html` is required.
- Only profiles with role `agent` are allowed into the app UI. Other roles receive an on-page access-denied message and a link to `jadstacklotto.com`.
- `public/assets/css/tokens.css` is the design-token source of truth. Agent actions use the JADSTACK navy family; lime is an accent and semantic success/danger colors remain reserved for their meanings.
- Game buttons are arranged in two independent horizontal rails. Each row scrolls separately; bottom navigation changes sections only by click. Swipe navigation between sections is disabled.
- Thermal printing is 80mm-compatible. The printer test follows the supplied POS receipt style. Real company tickets use the current company name, phone/address and actual games/bets from the existing ticket data.
- Supabase tables, RPC names, RLS, Storage and API parameters were not modified.
