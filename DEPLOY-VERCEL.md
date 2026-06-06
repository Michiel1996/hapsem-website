# HAPSEM-website online zetten op Vercel

Uw site is gebouwd met **Next.js** — ideaal voor Vercel (gratis hosting + HTTPS).

---

## Wat u nodig heeft

1. **Git** — [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. **GitHub-account** — [https://github.com/signup](https://github.com/signup)
3. **Vercel-account** — [https://vercel.com/signup](https://vercel.com/signup) (log in met GitHub)

---

## Stap 1: Git-repository lokaal (in Cursor-terminal)

Open PowerShell in de map `HAPSEM website`:

```powershell
cd "C:\Users\Gebruiker\Documents\HAPSEM website"

git init
git branch -M main
git add .
git commit -m "Initial HAPSEM website"
```

---

## Stap 2: GitHub-repository aanmaken

1. Ga naar [https://github.com/new](https://github.com/new)
2. Repository name: bijv. `hapsem-website`
3. Kies **Private** of **Public**
4. **Niet** aanvinken: "Add a README" (u heeft al code)
5. Klik **Create repository**

Kopieer de URL, bijvoorbeeld:
`https://github.com/JOUW-GEBRUIKERSNAAM/hapsem-website.git`

---

## Stap 3: Code naar GitHub pushen

Vervang `JOUW-GITHUB-URL` door uw echte URL:

```powershell
git remote add origin JOUW-GITHUB-URL
git push -u origin main
```

GitHub vraagt mogelijk om in te loggen (browser of token).

---

## Stap 4: Deploy op Vercel

1. Ga naar [https://vercel.com](https://vercel.com)
2. **Log in with GitHub**
3. Klik **Add New… → Project**
4. Selecteer repository `hapsem-website`
5. Vercel herkent **Next.js** automatisch — wijzig niets
6. Klik **Deploy**

Na 1–2 minuten krijgt u een URL zoals:
`https://hapsem-website.vercel.app`

---

## Stap 5: Eigen domein (optioneel)

Bijv. `huisartsenpraktijksemmerzake.be`:

1. Vercel → uw project → **Settings → Domains**
2. Voeg domeinnaam toe
3. Stel DNS in bij Combell/Cloudflare zoals Vercel aangeeft

E-mail blijft gewoon bij uw huidige provider — hosting en e-mail zijn gescheiden.

---

## Updates later doorsturen

Na elke wijziging in Cursor:

```powershell
git add .
git commit -m "Beschrijving van de wijziging"
git push
```

Vercel bouwt en publiceert **automatisch** een nieuwe versie.

---

## Handige vervolgstappen

| Actie | Waarom |
|--------|--------|
| Google Business-profiel | Adres en openingsuren vindbaar in Google Maps |
| Google Search Console | Controleren of Google uw site indexeert |
| Google Analytics (optioneel) | Bezoekersstatistieken |

---

## Kosten

| Onderdeel | Kosten |
|-----------|--------|
| Vercel hosting | Gratis |
| SSL (https) | Gratis |
| Domeinnaam | ca. €10–20/jaar |

---

## Problemen?

**Build faalt op Vercel:** controleer of lokaal `npm run build` slaagt.

**Git niet gevonden:** herstart Cursor na Git-installatie, of gebruik het volledige pad:
`"C:\Program Files\Git\cmd\git.exe"`

**500-fout lokaal:** verwijder `.next` en start `npm run dev` opnieuw.
