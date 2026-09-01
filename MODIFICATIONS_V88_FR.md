# JADSTACK LOTTO V88 — Ajustement interface Agent

Cette version conserve la logique métier, les appels RPC et les références aux tables Supabase existantes.

Modifications principales :
- Nouveau HTML/CSS du POS Agent avec de nouveaux noms de classes et d’identifiants.
- Bouton principal remplacé par un bouton compact « Imprimer » avec icône d’imprimante.
- Le bouton ne prend plus toute la largeur de l’écran et reste facile à toucher sur téléphone.
- Mise en page responsive basée sur la largeur disponible : une colonne sur petit écran, deux panneaux sur écran plus large.
- Correction spécifique du mode paysage sur les téléphones larges afin d’éviter l’activation d’un affichage PC qui peut masquer le contenu.
- Plusieurs libellés visibles du module Agent/Imprimante ont été harmonisés en français.

Fichiers principaux modifiés :
- public/assets/js/ajan/views.js
- public/assets/css/v88-agent-layout.css
- public/ajan.html
- public/assets/js/shell.js
- public/assets/js/app-shell/mobile-shell.js
- public/assets/js/ajan/q2i-pos.js
