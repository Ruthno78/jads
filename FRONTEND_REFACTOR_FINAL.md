# JADSTACK LOTTO — Frontend Refactor Final

## Scope
Frontend-only consolidation. Supabase tables, RPC names/signatures, RLS, Storage and existing API call arguments were not intentionally changed.

## Final structure
- `public/assets/css/tokens.css` — single design-token source of truth.
- `public/assets/css/final-<page>.css` — one stylesheet entry point per page, preserving the legacy cascade order before cleanup.
- `public/assets/js/final-<page>.js` — one local JS bundle per page, preserving script/inline execution order.
- External CDN dependencies remain external where the original pages required them.

## Responsive contract
One shared breakpoint system is appended to each final stylesheet: mobile <=767px, tablet 768–1023px, desktop >=1024px. Tables get controlled horizontal scrolling; primary touch controls are >=44px.

## Known frontend-only compatibility patch
The V13 ticket print popup used to reference the deleted `assets/css/v13.css`. The reference was changed to `assets/css/final.css`, which contains the consolidated print/common styles. No backend call was changed.

## Validation
All six final JS bundles were syntax-checked with Node. Local versioned CSS/JS files were removed only after their contents were embedded in the final page bundles.
