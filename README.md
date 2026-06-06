# HAPSEM Website

Moderne website voor **Huisartsenpraktijk Semmerzake / HAPSEM**.

Gebouwd met Next.js, React en Tailwind CSS.

---

## Lokaal starten (voor beginners)

### Stap 1: Node.js installeren

1. Ga naar [https://nodejs.org](https://nodejs.org)
2. Download de **LTS**-versie en installeer
3. Open PowerShell en typ: `node -v` — u zou een versienummer moeten zien

### Stap 2: Dependencies installeren

Open PowerShell in deze map:

```powershell
cd "c:\Users\Gebruiker\Documents\HAPSEM website"
npm install
```

### Stap 3: Development server starten

```powershell
npm run dev
```

Open in uw browser: **http://localhost:3000**

### Stap 4: Productie-build (optioneel)

```powershell
npm run build
npm start
```

---

## Online zetten

### Optie A: Vercel (aanbevolen, gratis)

1. Maak een account op [vercel.com](https://vercel.com)
2. Koppel uw GitHub-repository (of upload het project)
3. Vercel detecteert Next.js automatisch
4. Klik op Deploy — uw site krijgt een URL zoals `hapsem.vercel.app`

### Optie B: Eigen hosting

1. Run `npm run build`
2. Upload de map `.next` + `package.json` naar een server met Node.js
3. Run `npm start` op de server

---

## Projectstructuur

```
HAPSEM website/
├── src/
│   ├── app/              ← Pagina's (elke map = een URL)
│   │   ├── page.tsx      ← Home (/)
│   │   ├── contact/
│   │   ├── faq/
│   │   └── ...
│   ├── components/       ← Herbruikbare UI-onderdelen
│   │   ├── layout/       ← Header, Footer
│   │   ├── home/         ← Homepagina-secties
│   │   └── ui/           ← Knoppen, animaties
│   └── lib/
│       └── constants.ts  ← Praktijkgegevens (één plek wijzigen)
├── package.json
└── tailwind.config.ts    ← Kleuren en styling
```

---

## Belangrijke links

- **Online afspraken (Medici):** zie `MEDICI_APPOINTMENT_URL` in `src/lib/constants.ts`
- **Helena:** `HELENA_URL` in hetzelfde bestand

Wijzig praktijkgegevens altijd in `src/lib/constants.ts` — dan past alles automatisch mee.
