import * as React from "react"

export type Lang = "en" | "lv"
export const LANGS: Lang[] = ["en", "lv"]

/**
 * Every visible English string, with its Latvian version.
 * Keys are the English text itself, so components stay readable: t("Cocktails").
 * Anything missing here simply shows in English.
 */
const DICT: [string, string][] = [
  // ---- navigation / shared
  ["Cocktails", "Kokteiļi"],
  ["Kitchen", "Virtuve"],
  ["Gallery", "Galerija"],
  ["Visit us", "Apmeklē mūs"],
  ["Get directions", "Maršruts"],
  ["Language", "Valoda"],
  ["Cocktail bar & kitchen", "Kokteiļu bārs un virtuve"],
  ["Cocktail bar & kitchen in Old Town Riga", "Kokteiļu bārs un virtuve Vecrīgā"],

  // ---- hero
  ["The", "The"],
  ["Old Town", "Vecrīga"],
  ["Cocktail Hour", "Kokteiļu stunda"],
  ["5 € daily", "5 € katru dienu"],
  ["Smash & Turkish", "Smash un turku"],
  ["Open", "Atvērts"],
  ["Tue – Sun", "O – Sv"],
  ["Pull up a stool", "Pievelc krēslu"],
  ["CLASSICS", "KLASIKA"],
  ["HOUSE", "MĀJAS"],
  ["SHOTS", "ŠOTI"],
  ["BEER COCKTAILS", "ALUS KOKTEIĻI"],
  ["KITCHEN", "VIRTUVE"],
  ["WINTER", "ZIEMA"],
  ["Menu", "Ēdienkarte"],
  ["Cheers", "Priekā"],
  ["HOVER A DRINK", "NORĀDI UZ DZĒRIENA"],
  ["ON THE MENU", "ĒDIENKARTĒ"],
  ["5 € IN COCKTAIL HOUR", "5 € KOKTEIĻU STUNDĀ"],
  ["SHOT", "ŠOTS"],
  ["WITH FRIES", "AR FRĪ"],
  ["2 PCS", "2 GAB."],
  ["21 cocktails · 5 € · every evening from 18:00 · Zirgu iela 3", "21 kokteilis · 5 € · katru vakaru no 18:00 · Zirgu iela 3"],
  ["Shaken", "Kratīts"],
  ["Stirred", "Maisīts"],
  ["Served", "Pasniegts"],
  ["Sip", "Malko"],
  ["slow in", "lēni"],
  ["every evening", "katru vakaru"],
  ["Cocktail Hour · every evening from 18:00", "Kokteiļu stunda · katru vakaru no 18:00"],
  ["On the menu tonight", "Šovakar ēdienkartē"],
  ["21 at 5 €", "21 par 5 €"],
  ["until late", "līdz vēlam"],
  ["Nights", "Vakari"],
  ["Cheers, in Latvian", "Priekā — latviski"],
  ["Welcome", "Sveiki"],
  ["The bar", "Bārs"],
  ["Tonight", "Šovakar"],
  ["The Snuggest is a cosy cocktail bar & kitchen on Zirgu iela 3 in Old Town Riga. Twenty-one cocktails for 5 € every evening, smash burgers, a proper Turkish kitchen and Music Bingo nights.", "The Snuggest ir omulīgs kokteiļu bārs un virtuve Zirgu ielā 3, Vecrīgā. Divdesmit viens kokteilis par 5 € katru vakaru, smash burgeri, īsta turku virtuve un Music Bingo vakari."],
  ["21 cocktails at 5 €", "21 kokteilis par 5 €"],
  ["Cocktail Hour daily from 18:00", "Kokteiļu stunda katru dienu no 18:00"],
  ["Smash burgers & Turkish kitchen", "Smash burgeri un turku virtuve"],
  ["Craft beer & beer cocktails", "Kraftalus un alus kokteiļi"],
  ["4.9 ★ on Google", "4.9 ★ Google"],

  // ---- marquee + cocktail hour band
  ["Cocktails · Turkish kitchen · Music Bingo · ", "Kokteiļi · Turku virtuve · Music Bingo · "],
  ["Cocktail Hour · every day", "Kokteiļu stunda · katru dienu"],
  ["21 cocktails,", "21 kokteilis,"],
  ["a glass.", "par glāzi."],
  ["Mojito, Espresso Martini, Aperol Spritz, our Istanbul City beer cocktail and the house Snug Peach Gin — at the bar, every single evening.", "Mojito, Espresso Martini, Aperol Spritz, mūsu Istanbul City alus kokteilis un mājas Snug Peach Gin — bārā, katru vakaru."],
  ["Follow @thesnuggest", "Seko @thesnuggest"],
  ["Sun–Thu 18:00–21:00", "Sv–C 18:00–21:00"],
  ["Fri–Sat 18:00–20:00", "Pk–S 18:00–20:00"],
  ["21 cocktails · 5 €", "21 kokteilis · 5 €"],
  ["In the bar only", "Tikai bārā"],

  // ---- cocktails section
  ["House signatures, beer cocktails named after Istanbul and Antalya, and every classic you'd hope for.", "Mājas autordzērieni, alus kokteiļi Stambulas un Antalijas vārdā un visa klasika, ko vien vari vēlēties."],
  ["Cocktail menu", "Kokteiļu ēdienkarte"],
  ["Hot cocktails", "Karstie kokteiļi"],
  ["House favourites", "Mājas favorīti"],
  ["Beer cocktails", "Alus kokteiļi"],
  ["Classics", "Klasika"],
  ["Alcohol-free", "Bezalkoholiskie"],
  ["Wine & Prosecco", "Vīns un Prosecco"],
  ["Shots", "Šoti"],
  ["Our winter menu — warm glasses for cold Riga evenings.", "Mūsu ziemas ēdienkarte — silti dzērieni aukstiem Rīgas vakariem."],
  ["Our own recipes and the ones regulars keep coming back for.", "Mūsu pašu receptes un tās, pēc kurām stamgasti nāk atkal un atkal."],
  ["Named after home. You won't find these anywhere else in Riga.", "Nosaukti dzimtenes vārdā. Citur Rīgā tos neatradīsi."],
  ["By the glass (150 ml) or the bottle (750 ml).", "Glāzē (150 ml) vai pudelē (750 ml)."],
  ["Signature", "Autordzēriens"],
  ["New", "Jaunums"],
  ["5 € in Cocktail Hour", "5 € kokteiļu stundā"],
  ["Also: spirits, liqueurs, soft drinks, Turkish tea & coffee and a rotating craft beer list — ask your bartender.", "Kā arī: stiprie dzērieni, liķieri, bezalkoholiskie dzērieni, turku tēja un kafija un mainīgs kraftalus klāsts — jautā bārmenim."],
  // hot cocktails (names and descriptions from the order-system menu)
  ["Snug Mulled Wine", "Snug Karstvīns"],
  ["Black Tea Toddy", "Melnās Tējas Toddy"],
  ["Winter Mancolada", "Ziemas Mancolada"],
  ["Hot Amaretto", "Karstais Amaretto"],
  ["Pistachio Winter Dream", "Pistāciju Ziemas Sapnis"],
  ["Hot Pomegranate Mystery", "Granātābola Noslēpums"],
  ["Red wine, orange, cinnamon, clove, star anise", "Sarkanvīns, apelsīns, kanēlis, krustnagliņas, zvaigžņu anīss"],
  ["Black tea, Irish whiskey, honey, lemon, clove", "Melnā tēja, īru viskijs, medus, citrons, krustnagliņas"],
  ["Spiced rum, coconut cream, warm pineapple, lemon, cinnamon", "Garšvielu rums, kokosriekstu krēms, silts ananāss, citrons, kanēlis"],
  ["Amaretto, bourbon, lemon, honey, hot water, orange peel", "Amaretto, burbons, citrons, medus, karsts ūdens, apelsīna miziņa"],
  ["Pistachio cream liqueur, vodka, hot milk, vanilla", "Pistāciju krēma liķieris, degvīns, karsts piens, vaniļa"],
  ["Dark rum, warm pomegranate juice & sauce, blackberry syrup, cinnamon", "Tumšais rums, silta granātābolu sula un mērce, kazeņu sīrups, kanēlis"],
  // house
  ["Pistachio Dream", "Pistāciju Sapnis"],
  ["Mystery of the Pomegranate", "Granātābola Mīkla"],
  ["Peach liqueur, gin, tonic", "Persiku liķieris, džins, toniks"],
  ["Pistachio, vodka, milk, vanilla", "Pistācijas, degvīns, piens, vaniļa"],
  ["Vodka, pomegranate sauce & juice, blackberry syrup", "Degvīns, granātābolu mērce un sula, kazeņu sīrups"],
  ["Captain Morgan, coconut cream, pineapple, lemon juice", "Captain Morgan, kokosriekstu krēms, ananāss, citronu sula"],
  ["Vodka, coffee liqueur, simple syrup, espresso", "Degvīns, kafijas liķieris, cukura sīrups, espresso"],
  ["Pink gin, lemon juice, blackberry syrup, tonic", "Rozā džins, citronu sula, kazeņu sīrups, toniks"],
  ["Tequila, orange juice, grenadine", "Tekila, apelsīnu sula, grenadīns"],
  ["Amaretto, bourbon, lemon juice, simple syrup, egg white", "Amaretto, burbons, citronu sula, cukura sīrups, olbaltums"],
  ["Gin, lime juice, tonic, sugar, egg white", "Džins, laima sula, toniks, cukurs, olbaltums"],
  // beer
  ["Beer, amaretto, orange liqueur", "Alus, amaretto, apelsīnu liķieris"],
  ["Beer, tequila, Malibu, simple syrup", "Alus, tekila, Malibu, cukura sīrups"],
  ["Beer, cherry liqueur, peppermint syrup", "Alus, ķiršu liķieris, piparmētru sīrups"],
  ["Beer, ouzo, Jägermeister, lemon", "Alus, ouzo, Jägermeister, citrons"],
  ["Beer, tequila, lemon juice, salt", "Alus, tekila, citronu sula, sāls"],
  // classics
  ["Rum, fresh lime, mint, sugar, soda", "Rums, svaigs laims, piparmētra, cukurs, soda"],
  ["Prosecco, Aperol, tonic", "Prosecco, Aperol, toniks"],
  ["Prosecco, elderflower syrup, soda, mint, lime", "Prosecco, plūškoka ziedu sīrups, soda, piparmētra, laims"],
  ["Vodka, lime juice, ginger beer, mint", "Degvīns, laima sula, ingvera alus, piparmētra"],
  ["White rum, cola, lemon juice", "Baltais rums, kola, citronu sula"],
  ["Gin, lemon juice, soda, simple syrup", "Džins, citronu sula, soda, cukura sīrups"],
  ["White rum, grapefruit, cherry liqueur, lemon juice", "Baltais rums, greipfrūts, ķiršu liķieris, citronu sula"],
  ["Gin, blue curaçao, lime, simple syrup, egg white", "Džins, blue curaçao, laims, cukura sīrups, olbaltums"],
  ["Tequila, vodka, gin, white rum, orange liqueur, cola", "Tekila, degvīns, džins, baltais rums, apelsīnu liķieris, kola"],
  // alcohol-free
  ["Lime, mint, brown sugar, soda", "Laims, piparmētra, brūnais cukurs, soda"],
  ["Pineapple juice, coconut milk, lemon juice, sugar syrup", "Ananāsu sula, kokosriekstu piens, citronu sula, cukura sīrups"],
  ["Orange juice, grenadine, lemon juice, soda", "Apelsīnu sula, grenadīns, citronu sula, soda"],
  ["Apple juice, lime, sugar syrup, soda", "Ābolu sula, laims, cukura sīrups, soda"],
  // wine
  ["Red Wine", "Sarkanvīns"],
  ["White Wine", "Baltvīns"],
  ["Rosé Wine", "Rozā vīns"],
  ["Glass 150 ml · bottle 750 ml", "Glāze 150 ml · pudele 750 ml"],
  // shots
  ["Vodka, Malibu, blackberry syrup", "Degvīns, Malibu, kazeņu sīrups"],
  ["Tequila, strawberry liqueur, mint syrup", "Tekila, zemeņu liķieris, piparmētru sīrups"],
  ["Black Balsam, cream liqueur, coffee liqueur", "Melnais balzams, krējuma liķieris, kafijas liķieris"],
  ["Banana liqueur, coffee liqueur, blue curaçao", "Banānu liķieris, kafijas liķieris, blue curaçao"],
  ["Meter Cocktail ×8", "Metra kokteilis ×8"],
  ["Eight shots in a row, for the whole table", "Astoņi šoti rindā — visam galdam"],

  // ---- kitchen
  ["The kitchen", "Virtuve"],
  ["Food worth staying for", "Ēdiens, kura dēļ palikt"],
  ["Smash burgers, the grill and Turkish home cooking — served until late, or delivered to your door.", "Smash burgeri, grils un turku mājas virtuve — līdz vēlam vakaram vai ar piegādi līdz tavām durvīm."],
  ["From the Snuggest kitchen — drag, flick or use the arrows", "No Snuggest virtuves — velc, pašķir vai izmanto bultiņas"],
  ["The full food menu", "Visa ēdienkarte"],
  ["Burgers", "Burgeri"],
  ["served with fries", "pasniedz ar frī"],
  ["Mains", "Pamatēdieni"],
  ["Soup", "Zupa"],
  ["Snacks", "Uzkodas"],
  ["Dessert", "Deserts"],
  ["Sauces", "Mērces"],
  ["1.00 € each", "1.00 € gabalā"],
  ["2 pcs", "2 gab."],
  ["vegetarian", "veģetārs"],
  ["vegan", "vegāns"],
  ["for 2–3", "2–3 personām"],
  ["Turkish Kofta & Rice", "Turku kofte ar rīsiem"],
  ["Lahmacun", "Lahmacun"],
  ["Schnitzel", "Šnicele"],
  ["Lentil Soup", "Lēcu zupa"],
  ["Turkish Bean Salad", "Turku pupiņu salāti"],
  ["French Fries", "Frī kartupeļi"],
  ["2× smash beef patty, tomato, iceberg, onion, pickles, ketchup, mayo", "2× smash liellopa kotlete, tomāts, aisberga salāti, sīpols, marinēti gurķi, kečups, majonēze"],
  ["2× smash beef patty, cheese, tomato, iceberg, onion, pickles", "2× smash liellopa kotlete, siers, tomāts, aisberga salāti, sīpols, marinēti gurķi"],
  ["Crispy fried chicken, special yoghurt sauce, pickles, lettuce", "Kraukšķīga cepta vista, īpašā jogurta mērce, marinēti gurķi, salāti"],
  ["Beef kofta, white rice, bean salad (piyaz)", "Liellopa kofte, baltie rīsi, pupiņu salāti (piyaz)"],
  ["Thin Turkish flatbread with spiced minced meat", "Plāna turku plātsmaize ar garšvielotu maltu gaļu"],
  ["With lemon slice and cold potato salad", "Ar citrona šķēli un aukstajiem kartupeļu salātiem"],
  ["500 g grilled wings, fresh salad, bread", "500 g grilēti vistas spārniņi, svaigi salāti, maize"],
  ["Chicken shashlik, pickles, fresh salad, fries, wrapped", "Vistas šašliks, marinēti gurķi, svaigi salāti, frī — lavašā"],
  ["Warm lentil soup, crispy bread, lemon", "Silta lēcu zupa, kraukšķīga maize, citrons"],
  ["White beans, olive oil, parsley, onion, tomato, sumac", "Baltās pupiņas, olīveļļa, pētersīļi, sīpols, tomāts, sumahs"],
  ["250 g, with sauce", "250 g, ar mērci"],
  ["Fries, crispy chicken, calamari, cheese balls, sausage", "Frī, kraukšķīga vista, kalmāri, siera bumbiņas, desiņa"],
  ["Homemade chocolate brownie, warm and fudgy", "Mājās gatavots šokolādes braunijs, silts un sulīgs"],
  ["Special yoghurt sauce", "Īpašā jogurta mērce"],
  ["Our house sauce", "Mūsu mājas mērce"],
  ["Mayonnaise · garlic", "Majonēze · ķiploku"],
  ["Classic or with garlic", "Klasiskā vai ar ķiplokiem"],
  ["Ketchup · mustard · BBQ", "Kečups · sinepes · BBQ"],
  ["The usual suspects", "Visi ierastie"],
  ["10.00 € · with fries", "10.00 € · ar frī"],
  ["10.00 € · 2 pieces", "10.00 € · 2 gab."],
  ["10.50 € · for 2–3", "10.50 € · 2–3 personām"],
  ["5.50 € · vegetarian", "5.50 € · veģetārs"],
  ["Allergens:", "Alergēni:"],
  ["gluten", "lipeklis"],
  ["eggs", "olas"],
  ["milk", "piens"],
  ["nuts", "rieksti"],
  ["molluscs", "gliemji"],
  ["Allergen", "Alergēns"],
  ["Please tell our staff about any allergies.", "Lūdzu, informē personālu par alerģijām."],
  ["Hungry at home?", "Izsalcis mājās?"],
  ["Order on Wolt", "Pasūti Wolt"],
  ["Order on Bolt Food", "Pasūti Bolt Food"],

  // ---- galleries
  ["A night at The Snuggest", "Vakars The Snuggest"],
  ["Snuggest Kitchen", "Snuggest virtuve"],
  ["Tap any photo to open it, swipe down to close.", "Pieskaries fotogrāfijai, lai to atvērtu; pavelc uz leju, lai aizvērtu."],
  ["More on @thesnuggest", "Vairāk @thesnuggest"],
  ["Warm light, good music, full glasses.", "Silta gaisma, laba mūzika, pilnas glāzes."],
  ["See tonight at the bar on Instagram —", "Šovakar bārā — skaties Instagram"],

  // ---- visit
  ["Zirgu iela 3, Vecrīga", "Zirgu iela 3, Vecrīga"],
  ["A cobbled street in the heart of Old Town Riga, a few steps from the Cat House. Walk in — no booking needed.", "Bruģēta ieliņa pašā Vecrīgas sirdī, dažus soļus no Kaķu mājas. Nāc iekšā — rezervācija nav vajadzīga."],
  ["Opening hours", "Darba laiks"],
  ["Monday", "Pirmdiena"],
  ["Tuesday", "Otrdiena"],
  ["Wednesday", "Trešdiena"],
  ["Thursday", "Ceturtdiena"],
  ["Friday", "Piektdiena"],
  ["Saturday", "Sestdiena"],
  ["Sunday", "Svētdiena"],
  ["today", "šodien"],
  ["Closed", "Slēgts"],
  ["Cocktail Hour: Sun–Thu 18:00–21:00 · Fri–Sat 18:00–20:00", "Kokteiļu stunda: Sv–C 18:00–21:00 · Pk–S 18:00–20:00"],
  ["Contact", "Kontakti"],

  // ---- footer
  ["See you *tonight*\nat The Snuggest.", "Tiekamies *šovakar*\nThe Snuggest."],
  ["Cocktails from 5 €, a proper Turkish kitchen and the cosiest corner of Old Town Riga.", "Kokteiļi no 5 €, īsta turku virtuve un omulīgākais Vecrīgas stūrītis."],
  ["Cocktail bar & kitchen · Zirgu iela 3, Vecrīga, Rīga", "Kokteiļu bārs un virtuve · Zirgu iela 3, Vecrīga, Rīga"],
  ["Explore", "Izpēti"],
  ["Order", "Pasūtīt"],
  ["Follow", "Seko"],
  ["Review us on Google", "Novērtē mūs Google"],
  ["Alcohol is served to guests aged 18+. Please drink responsibly.", "Alkoholu pasniedzam no 18 gadu vecuma. Lūdzu, lieto atbildīgi."],
]

const LV = new Map(DICT)

function detect(): Lang {
  try {
    const saved = localStorage.getItem("snug.lang") as Lang | null
    if (saved && LANGS.includes(saved)) return saved
  } catch {
    /* storage blocked: fall through */
  }
  const nav = (typeof navigator !== "undefined" && navigator.language ? navigator.language : "en").slice(0, 2).toLowerCase()
  return nav === "lv" ? "lv" : "en"
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (en: string) => string }
const LangContext = React.createContext<Ctx>({ lang: "en", setLang: () => {}, t: (s) => s })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(detect)
  const setLang = React.useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem("snug.lang", l)
    } catch {
      /* ignore */
    }
  }, [])
  React.useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  const t = React.useCallback((en: string) => (lang === "en" ? en : LV.get(en) ?? en), [lang])
  const value = React.useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => React.useContext(LangContext)
export const useT = () => React.useContext(LangContext).t
