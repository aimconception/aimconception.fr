# Guide d'intégration — AIM Conception
## Pages localités + service RLV

---

## ÉTAPE 1 — Nommer vos photos correctement

Chaque page attend une photo dans le dossier `img/realisations/`.
Renommez vos fichiers exactement comme indiqué ci-dessous :

| Votre photo originale | Nom à donner au fichier |
|---|---|
| proiect_casa_de_vacanta_Guidel.png | `guidel-maison-vacances.jpg` |
| Proiect_casa_de_vacanta_inzinzack.png | `inzinzac-villa-contemporaine.jpg` |
| Proiect_Casa_Lorient.png | `lorient-maison-r2.jpg` |
| Proiect_extension_Lorient.png | `lorient-extension-piscine.jpg` |
| Proiect_casa_noua_lanester.png | `lanester-plain-pied-piscine.jpg` |
| proiect_casa_si_amenajare_exterioara_Caudan_.png | `caudan-maison-pierre-paysager.jpg` |
| proiect_case_pasive_Ploemeur_.png | `ploemeur-maisons-passives.jpg` |
| Proiect_extension_Ploemeur_.png | `ploemeur-extension-facade.jpg` |

> ⚠️ Vous pouvez garder le format .png — changez juste le nom.
> Dans ce cas, ouvrez chaque fichier HTML et remplacez `.jpg` par `.png` dans la balise `<img src=...>`.

---

## ÉTAPE 2 — Placer les fichiers sur votre serveur

Structure de dossiers à respecter sur votre hébergement :

```
aimconception.fr/
├── index.html              ← déjà en place
├── services.html           ← déjà en place
├── realisations.html       ← déjà en place
├── contact.html            ← déjà en place
│
├── img/
│   └── realisations/       ← CRÉER ce sous-dossier s'il n'existe pas
│       ├── guidel-maison-vacances.jpg
│       ├── inzinzac-villa-contemporaine.jpg
│       ├── lorient-maison-r2.jpg
│       ├── lorient-extension-piscine.jpg
│       ├── lanester-plain-pied-piscine.jpg
│       ├── caudan-maison-pierre-paysager.jpg
│       ├── ploemeur-maisons-passives.jpg
│       └── ploemeur-extension-facade.jpg
│
└── localites/              ← CRÉER ce dossier
    ├── guidel.html
    ├── inzinzac-lochrist.html
    ├── lorient-maison.html
    ├── lorient-extension.html
    ├── lanester.html
    ├── caudan.html
    ├── ploemeur-passif.html
    ├── ploemeur-extension.html
    └── releve-existant.html
```

---

## ÉTAPE 3 — Ajuster les chemins d'images dans les fichiers HTML

Si vous placez les pages dans un dossier `/localites/`,
les chemins d'images `../img/realisations/` sont déjà corrects.

Si vous les placez à la racine du site (même niveau que index.html),
remplacez `../img/realisations/` par `img/realisations/` dans chaque fichier.

**Comment faire la modification :**
1. Ouvrez le fichier HTML dans un éditeur de texte (Notepad++, VS Code, etc.)
2. Utilisez Ctrl+H (Rechercher / Remplacer)
3. Rechercher : `../img/realisations/`
4. Remplacer par : `img/realisations/`
5. Cliquez sur "Remplacer tout"
6. Enregistrez

---

## ÉTAPE 4 — Ajouter les liens dans votre menu de navigation

Dans chaque fichier HTML existant du site (index.html, services.html, etc.),
ajoutez les nouvelles pages dans le menu. Exemple :

```html
<!-- Avant -->
<li><a href="/realisations.html">Réalisations</a></li>

<!-- Après — ajoutez un sous-menu ou des liens directs -->
<li><a href="/localites/releve-existant.html">Relevé de l'Existant</a></li>
```

Pour les pages localités, vous pouvez les lier depuis la page `realisations.html`
en ajoutant des boutons "Voir le projet" sous chaque réalisation.

---

## ÉTAPE 5 — Ajouter les pages à Google Search Console

Pour que Google indexe vos nouvelles pages rapidement :

1. Allez sur https://search.google.com/search-console
2. Connectez-vous avec le compte propriétaire du site
3. Dans le menu gauche : **Inspection d'URL**
4. Collez l'URL de chaque page (ex: https://aimconception.fr/localites/guidel.html)
5. Cliquez sur **"Demander l'indexation"**
6. Répétez pour chacune des 9 pages

---

## ÉTAPE 6 — Mettre à jour le sitemap (optionnel mais recommandé)

Si votre site possède un fichier `sitemap.xml`, ajoutez-y les nouvelles URLs :

```xml
<url>
  <loc>https://www.aimconception.fr/localites/guidel.html</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://www.aimconception.fr/localites/lanester.html</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<!-- Répéter pour chaque page -->
<url>
  <loc>https://www.aimconception.fr/localites/releve-existant.html</loc>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

---

## ÉTAPE 7 — Vérifier que tout fonctionne

Après mise en ligne, vérifiez chaque page :

- [ ] La photo s'affiche correctement
- [ ] Le menu de navigation fonctionne (liens vers Services, Réalisations, Contact)
- [ ] Le bouton "Demander un devis gratuit" renvoie vers contact.html
- [ ] Le bouton WhatsApp ouvre bien WhatsApp avec le bon numéro
- [ ] La page s'affiche correctement sur mobile (réduisez la fenêtre du navigateur)

---

## Résumé des URLs finales

| Page | URL sur votre site |
|---|---|
| Relevé de l'Existant | /localites/releve-existant.html |
| Guidel | /localites/guidel.html |
| Inzinzac-Lochrist | /localites/inzinzac-lochrist.html |
| Lorient — Maison | /localites/lorient-maison.html |
| Lorient — Extension | /localites/lorient-extension.html |
| Lanester | /localites/lanester.html |
| Caudan | /localites/caudan.html |
| Ploemeur — Passif | /localites/ploemeur-passif.html |
| Ploemeur — Extension | /localites/ploemeur-extension.html |
