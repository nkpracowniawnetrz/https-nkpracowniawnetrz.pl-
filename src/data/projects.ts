export type Room = {
  name: string;
  description: string;
  images: string[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  thumbnail: string;
  realized?: boolean;
  rooms?: Room[];
};

export const categories = [
  "Wszystkie",
  "Dom",
  "Mieszkanie",
  "Kuchnia",
  "Łazienka",
  "Sypialnia",
];

export const projects: Project[] = [
  {
    id: "dom-jednorodzinny",
    title: "Część dzienna domu jednorodzinnego",
    category: "Dom",
    description:
      "Kompleksowy projekt części dziennej domu jednorodzinnego obejmujący kuchnię, salon z jadalnią, korytarz, wiatrołap oraz strefę łazienek. Wnętrza utrzymane zostały w spójnej, nowoczesnej stylistyce opartej na jasnych barwach, naturalnych strukturach drewna i eleganckich detalach wykończeniowych. Projekt powstał z myślą o komforcie codziennego życia, funkcjonalnym układzie oraz harmonijnym połączeniu estetyki z praktycznymi rozwiązaniami.",
    thumbnail:
      "/images/portfolio/dom-jednorodzinny/salon_01-thumb.webp",
    images: [
      "/images/portfolio/dom-jednorodzinny/salon_01.webp",
      "/images/portfolio/dom-jednorodzinny/salon_02.webp",
      "/images/portfolio/dom-jednorodzinny/salon_03.webp",
      "/images/portfolio/dom-jednorodzinny/salon_04.webp",
      "/images/portfolio/dom-jednorodzinny/salon_05.webp",
      "/images/portfolio/dom-jednorodzinny/kuchnia_01.webp",
      "/images/portfolio/dom-jednorodzinny/kuchnia_02.webp",
      "/images/portfolio/dom-jednorodzinny/kuchnia_03.webp",
      "/images/portfolio/dom-jednorodzinny/kuchnia_04.webp",
      "/images/portfolio/dom-jednorodzinny/korytarz_01.webp",
      "/images/portfolio/dom-jednorodzinny/korytarz_02.webp",
      "/images/portfolio/dom-jednorodzinny/korytarz_03.webp",
      "/images/portfolio/dom-jednorodzinny/korytarz_04.webp",
      "/images/portfolio/dom-jednorodzinny/korytarz_05.webp",
      "/images/portfolio/dom-jednorodzinny/wiatro-ap_01.webp",
      "/images/portfolio/dom-jednorodzinny/wiatro-ap_02.webp",
      "/images/portfolio/dom-jednorodzinny/wiatro-ap_03.webp",
      "/images/portfolio/dom-jednorodzinny/wiatro-ap_04.webp",
      "/images/portfolio/dom-jednorodzinny/du-a_-azienka_01.webp",
      "/images/portfolio/dom-jednorodzinny/du-a_-azienka_02.webp",
      "/images/portfolio/dom-jednorodzinny/du-a_-azienka_03.webp",
      "/images/portfolio/dom-jednorodzinny/du-a_-azienka_04.webp",
      "/images/portfolio/dom-jednorodzinny/du-a_-azienka_05.webp",
      "/images/portfolio/dom-jednorodzinny/du-a_-azienka_06.webp",
      "/images/portfolio/dom-jednorodzinny/toaleta_01.webp",
      "/images/portfolio/dom-jednorodzinny/toaleta_02.webp",
      "/images/portfolio/dom-jednorodzinny/toaleta_03.webp",
      "/images/portfolio/dom-jednorodzinny/toaleta_05.webp",
    ],
    rooms: [
      {
        name: "Salon z jadalnią",
        description:
          "Strefa dzienna zaprojektowana jako miejsce odpoczynku i wspólnego spędzania czasu. Ciepłe materiały, dekoracyjne oświetlenie i spokojna kolorystyka budują przytulny, a jednocześnie nowoczesny charakter wnętrza.",
        images: [
          "/images/portfolio/dom-jednorodzinny/salon_01.webp",
          "/images/portfolio/dom-jednorodzinny/salon_02.webp",
          "/images/portfolio/dom-jednorodzinny/salon_03.webp",
          "/images/portfolio/dom-jednorodzinny/salon_04.webp",
          "/images/portfolio/dom-jednorodzinny/salon_05.webp",
        ],
      },
      {
        name: "Kuchnia",
        description:
          "Nowoczesna kuchnia z zabudową dopasowaną do potrzeb domowników. Jasne fronty, frezowane uchwyty i naturalne drewno tworzą elegancką oraz wygodną przestrzeń do codziennego użytkowania.",
        images: [
          "/images/portfolio/dom-jednorodzinny/kuchnia_01.webp",
          "/images/portfolio/dom-jednorodzinny/kuchnia_02.webp",
          "/images/portfolio/dom-jednorodzinny/kuchnia_03.webp",
          "/images/portfolio/dom-jednorodzinny/kuchnia_04.webp",
        ],
      },
      {
        name: "Korytarz",
        description:
          "Minimalistyczna przestrzeń komunikacyjna utrzymana w spójnej stylistyce całego domu. Proste formy i dopracowane detale nadają wnętrzu lekkości oraz elegancji.",
        images: [
          "/images/portfolio/dom-jednorodzinny/korytarz_01.webp",
          "/images/portfolio/dom-jednorodzinny/korytarz_02.webp",
          "/images/portfolio/dom-jednorodzinny/korytarz_03.webp",
          "/images/portfolio/dom-jednorodzinny/korytarz_04.webp",
          "/images/portfolio/dom-jednorodzinny/korytarz_05.webp",
        ],
      },
      {
        name: "Wiatrołap",
        description:
          "Funkcjonalny wiatrołap z zabudową zapewniającą wygodne przechowywanie i zachowanie porządku. Projekt łączy praktyczne rozwiązania z estetyką dopasowaną do reszty wnętrza.",
        images: [
          "/images/portfolio/dom-jednorodzinny/wiatro-ap_01.webp",
          "/images/portfolio/dom-jednorodzinny/wiatro-ap_02.webp",
          "/images/portfolio/dom-jednorodzinny/wiatro-ap_03.webp",
          "/images/portfolio/dom-jednorodzinny/wiatro-ap_04.webp",
        ],
      },
      {
        name: "Łazienka",
        description:
          "Projekt łazienki oparty na zestawieniu jasnych powierzchni, drewna i czarnych akcentów. Starannie dobrane materiały oraz miękkie formy wyposażenia tworzą spokojną i komfortową przestrzeń.",
        images: [
          "/images/portfolio/dom-jednorodzinny/du-a_-azienka_01.webp",
          "/images/portfolio/dom-jednorodzinny/du-a_-azienka_02.webp",
          "/images/portfolio/dom-jednorodzinny/du-a_-azienka_03.webp",
          "/images/portfolio/dom-jednorodzinny/du-a_-azienka_04.webp",
          "/images/portfolio/dom-jednorodzinny/du-a_-azienka_05.webp",
          "/images/portfolio/dom-jednorodzinny/du-a_-azienka_06.webp",
        ],
      },
      {
        name: "Toaleta",
        description:
          "Niewielka przestrzeń zaprojektowana z dbałością o detal i spójność z pozostałymi wnętrzami. Minimalistyczne wyposażenie podkreślają nowoczesny charakter aranżacji.",
        images: [
          "/images/portfolio/dom-jednorodzinny/toaleta_01.webp",
          "/images/portfolio/dom-jednorodzinny/toaleta_02.webp",
          "/images/portfolio/dom-jednorodzinny/toaleta_03.webp",
          "/images/portfolio/dom-jednorodzinny/toaleta_05.webp",
        ],
      },
    ],
  },
  {
    id: "mieszkanie-soft-elegance",
    title: "Mieszkanie Soft Elegance",
    category: "Mieszkanie",
    description:
      "Projekt mieszkania utrzymany w jasnej, eleganckiej stylistyce z wyraźnym akcentem naturalnego drewna i złotych detali. Otwarta strefa dzienna łączy kuchnię, jadalnię oraz salon w spójną i funkcjonalną przestrzeń sprzyjającą codziennemu komfortowi. Klasyczne formy w nowoczesnym wydaniu, subtelne oświetlenie oraz starannie dobrane materiały nadają wnętrzu przytulny i ponadczasowy charakter.",
    thumbnail:
      "/images/portfolio/mieszkanie-soft-elegance/mieszkanie_01-thumb.webp",
    images: [
      "/images/portfolio/mieszkanie-soft-elegance/mieszkanie_01.webp",
      "/images/portfolio/mieszkanie-soft-elegance/mieszkanie_04.webp",
      "/images/portfolio/mieszkanie-soft-elegance/mieszkanie_05.webp",
      "/images/portfolio/mieszkanie-soft-elegance/mieszkanie_06.webp",
    ],
  },
  {
    id: "lazienka-blekitna",
    title: "Łazienka w odcieniach błękitu",
    category: "Łazienka",
    description:
      "Nowoczesna łazienka w domu jednorodzinnym zaprojektowana z dbałością o spójność materiałów i ponadczasową estetykę. Delikatne błękitne płytki, ciepłe drewno oraz miękkie formy luster tworzą harmonijną i elegancką przestrzeń sprzyjającą codziennemu komfortowi.",
    realized: true,
    thumbnail:
      "/images/portfolio/lazienka-blekitna/realizacja_01-thumb.webp",
    images: [
      "/images/portfolio/lazienka-blekitna/nowe_01.webp",
      "/images/portfolio/lazienka-blekitna/nowe_02.webp",
      "/images/portfolio/lazienka-blekitna/nowe_03.webp",
      "/images/portfolio/lazienka-blekitna/realizacja_01.webp",
      "/images/portfolio/lazienka-blekitna/realizacja_02.webp",
    ],
  },
  {
    id: "kuchnia-modern-classic",
    title: "Kuchnia Modern Classic",
    category: "Kuchnia",
    description:
      "Projekt kuchni inspirowany klasycznymi formami w nowoczesnym wydaniu. Frezowane fronty, drewniane elementy oraz dekoracyjne oświetlenie tworzą przytulne i estetyczne wnętrze. Układ zabudowy został dopasowany do potrzeb domowników, tak aby połączyć wygodę codziennego użytkowania z funkcjonalną organizacją przestrzeni.",
    thumbnail:
      "/images/portfolio/kuchnia-modern-classic/kuchnia_01-thumb.webp",
    images: [
      "/images/portfolio/kuchnia-modern-classic/kuchnia_01.webp",
      "/images/portfolio/kuchnia-modern-classic/kuchnia_02.webp",
      "/images/portfolio/kuchnia-modern-classic/kuchnia_03.webp",
      "/images/portfolio/kuchnia-modern-classic/kuchnia_04.webp",
      "/images/portfolio/kuchnia-modern-classic/kuchnia_05.webp",
      "/images/portfolio/kuchnia-modern-classic/kuchnia_06.webp",
    ],
  },
  {
    id: "sypialnia-soft-beige",
    title: "Sypialnia Soft Beige",
    category: "Sypialnia",
    description:
      "Przytulna sypialnia utrzymana w ciepłych odcieniach beżu, zaprojektowana z myślą o wyciszeniu i codziennym komforcie. Sztukateria, dekoracyjne kinkiety oraz tapicerowany zagłówek przechodzący aż do sufitu nadają wnętrzu elegancki i spójny charakter. Całość dopełniają miękkie tkaniny i subtelne oświetlenie budujące spokojną, relaksującą atmosferę.",
    thumbnail:
      "/images/portfolio/sypialnia-soft-beige/sypialnia_01-thumb.webp",
    images: [
      "/images/portfolio/sypialnia-soft-beige/sypialnia_01.webp",
      "/images/portfolio/sypialnia-soft-beige/sypialnia_02.webp",
      "/images/portfolio/sypialnia-soft-beige/sypialnia_03.webp",
      "/images/portfolio/sypialnia-soft-beige/sypialnia_04.webp",
    ],
  },
  {
    id: "mieszkanie-55m",
    title: "Mieszkanie 55 m²",
    category: "Mieszkanie",
    description:
      "Projekt mieszkania o powierzchni 55 m², w którym nowoczesny minimalizm łączy się z ciepłem naturalnych materiałów. Jasna kolorystyka, drewno w odcieniu orzecha oraz starannie zaprojektowane oświetlenie budują harmonijną i ponadczasową przestrzeń. Każde pomieszczenie zostało dopracowane zarówno pod względem estetyki, jak i funkcjonalności, tworząc komfortowe wnętrze do codziennego życia.",
    thumbnail:
      "/images/portfolio/mieszkanie-55m/salon_01.png",
    images: [
      "/images/portfolio/mieszkanie-55m/salon_01.png",
      "/images/portfolio/mieszkanie-55m/salon_02.png",
      "/images/portfolio/mieszkanie-55m/salon_03.png",
      "/images/portfolio/mieszkanie-55m/salon_04.png",
      "/images/portfolio/mieszkanie-55m/salon_05.png",
      "/images/portfolio/mieszkanie-55m/salon_06.png",
      "/images/portfolio/mieszkanie-55m/salon_08.png",
      "/images/portfolio/mieszkanie-55m/korytarz_01.png",
      "/images/portfolio/mieszkanie-55m/korytarz_02.png",
      "/images/portfolio/mieszkanie-55m/sypialnia_01.png",
      "/images/portfolio/mieszkanie-55m/sypialnia_02.png",
      "/images/portfolio/mieszkanie-55m/sypialnia_03.png",
      "/images/portfolio/mieszkanie-55m/sypialnia_04.png",
      "/images/portfolio/mieszkanie-55m/garderoba_01.png",
      "/images/portfolio/mieszkanie-55m/garderoba_02.png",
      "/images/portfolio/mieszkanie-55m/garderoba_03.png",
    ],
    rooms: [
      {
        name: "Salon z aneksem kuchennym",
        description:
          "Przestrzeń dzienna zaprojektowana z myślą o wygodzie i swobodnym spędzaniu czasu. Kuchnia płynnie łączy się ze strefą wypoczynku, a ciepłe drewno, jasne powierzchnie i subtelne oświetlenie tworzą elegancką, przytulną atmosferę.",
        images: [
          "/images/portfolio/mieszkanie-55m/salon_01.png",
          "/images/portfolio/mieszkanie-55m/salon_02.png",
          "/images/portfolio/mieszkanie-55m/salon_03.png",
          "/images/portfolio/mieszkanie-55m/salon_04.png",
          "/images/portfolio/mieszkanie-55m/salon_05.png",
          "/images/portfolio/mieszkanie-55m/salon_06.png",
          "/images/portfolio/mieszkanie-55m/salon_08.png",
        ],
      },
      {
        name: "Przedpokój",
        description:
          "Minimalistyczna strefa wejściowa z funkcjonalną zabudową i dekoracyjnymi detalami. Ryflowane wykończenia oraz starannie dobrane oświetlenie nadają wnętrzu lekkości i podkreślają spójny charakter całego mieszkania.",
        images: [
          "/images/portfolio/mieszkanie-55m/korytarz_01.png",
          "/images/portfolio/mieszkanie-55m/korytarz_02.png",
        ],
      },
      {
        name: "Sypialnia",
        description:
          "Stonowana, spokojna przestrzeń sprzyjająca regeneracji. Miękkie tkaniny, ciepła kolorystyka i nastrojowe światło tworzą wnętrze pełne harmonii i komfortu.",
        images: [
          "/images/portfolio/mieszkanie-55m/sypialnia_01.png",
          "/images/portfolio/mieszkanie-55m/sypialnia_02.png",
          "/images/portfolio/mieszkanie-55m/sypialnia_03.png",
          "/images/portfolio/mieszkanie-55m/sypialnia_04.png",
        ],
      },
      {
        name: "Garderoba / biuro",
        description:
          "Wielofunkcyjne pomieszczenie łączące praktyczne miejsce do przechowywania z wygodną przestrzenią do pracy. Ergonomiczne rozwiązania i minimalistyczna forma pozwalają maksymalnie wykorzystać dostępną powierzchnię bez rezygnacji z estetyki.",
        images: [
          "/images/portfolio/mieszkanie-55m/garderoba_01.png",
          "/images/portfolio/mieszkanie-55m/garderoba_02.png",
          "/images/portfolio/mieszkanie-55m/garderoba_03.png",
        ],
      },
      {
        name: "Łazienka",
        description:
          "Nowoczesna łazienka zaprojektowana w stonowanej palecie beżów i ciepłych odcieni drewna. Minimalistyczne formy, czarne akcenty oraz podświetlane lustro nadają wnętrzu elegancki i uporządkowany charakter. Układ pomieszczenia został przemyślany tak, aby połączyć komfort codziennego użytkowania z maksymalnym wykorzystaniem dostępnej przestrzeni, uwzględniając również praktyczną strefę pralni.",
        images: [
          "/images/portfolio/lazienka-minimalistyczna/widok_01.webp",
          "/images/portfolio/lazienka-minimalistyczna/widok_02.webp",
          "/images/portfolio/lazienka-minimalistyczna/widok_03.webp",
          "/images/portfolio/lazienka-minimalistyczna/widok_05.webp",
          "/images/portfolio/lazienka-minimalistyczna/widok_06.webp",
        ],
      },
    ],
  },
  {
    id: "lazienka-ciepla",
    title: "Łazienka w ciepłych odcieniach",
    category: "Łazienka",
    description:
      "Przestrzeń zaprojektowana w oparciu o naturalne materiały, światło i ponadczasową prostotę. Ciepłe odcienie kamienia i drewna, uzupełnione subtelnymi złotymi akcentami, tworzą wnętrze o spokojnym, harmonijnym charakterze. Każdy element został przemyślany tak, aby zachować równowagę między estetyką a funkcjonalnością, tworząc miejsce sprzyjające codziennemu wyciszeniu.",
    thumbnail:
      "/images/portfolio/lazienka-ciepla/widok_01.png",
    images: [
      "/images/portfolio/lazienka-ciepla/widok_01.png",
      "/images/portfolio/lazienka-ciepla/widok_02.png",
      "/images/portfolio/lazienka-ciepla/widok_03.png",
      "/images/portfolio/lazienka-ciepla/widok_04.png",
      "/images/portfolio/lazienka-ciepla/widok_05.png",
      "/images/portfolio/lazienka-ciepla/widok_06.png",
    ],
  },
  {
    id: "czesc-dzienna-warszawa",
    title: "Część dzienna mieszkania w Warszawie",
    category: "Mieszkanie",
    description:
      "Nowoczesna elegancja, wyraziste kontrasty i przemyślana prostota. W tej warszawskiej realizacji część dzienna została zaprojektowana wokół kuchni - i nie jest to przypadek. Miała stać się sercem mieszkania, miejscem, które naturalnie łączy domowników i wyznacza charakter całego wnętrza. Czerń i biel nadają przestrzeni zdecydowany rytm, a złote akcenty wprowadzają odrobinę szlachetności i ocieplają minimalistyczny charakter aranżacji. Całość jest elegancka, ale nie chłodna. Nowoczesna, ale bez efektu przesadnej surowości. Zależało nam na wnętrzu, w którym każdy element ma swoje miejsce, a estetyka idzie w parze z codziennym komfortem. Kuchnia nie została ukryta na drugim planie - przeciwnie, to właśnie wokół niej toczy się życie tej przestrzeni. Bo dobrze zaprojektowane wnętrze to nie tylko to, jak wygląda, ale przede wszystkim to, jak się w nim żyje.",
    thumbnail:
      "/images/portfolio/czesc-dzienna-warszawa/widok_01-thumb.jpg",
    images: [
      "/images/portfolio/czesc-dzienna-warszawa/widok_01.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_02.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_03.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_04.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_05.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_06.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_07.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_08.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_09.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_10.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_11.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_12.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_13.jpg",
      "/images/portfolio/czesc-dzienna-warszawa/widok_14.jpg",
    ],
  },
  {
    id: "dom-tomaszow-modern-classic",
    title: "Dom w Tomaszowie Mazowieckim - salon z jadalnią w stylu modern classic",
    category: "Dom",
    description:
      "Salon z jadalnią w delikatnym wydaniu modern classic. Zależało mi na wnętrzu eleganckim, ale pozbawionym nadmiernego przepychu. Klasyczne sztukaterie i marmurowe akcenty przełamują proste formy mebli oraz nowoczesne oświetlenie. Całość utrzymana jest w ciepłej, beżowej kolorystyce, uzupełnionej naturalnym drewnem i miękkimi tkaninami. Subtelne detale, zaokrąglone formy i nastrojowe światło nadają przestrzeni przytulności, nie odbierając jej eleganckiego charakteru.",
    thumbnail:
      "/images/portfolio/dom-tomaszow-modern-classic/widok_01-thumb.jpg",
    images: [
      "/images/portfolio/dom-tomaszow-modern-classic/widok_01.jpg",
      "/images/portfolio/dom-tomaszow-modern-classic/widok_02.jpg",
      "/images/portfolio/dom-tomaszow-modern-classic/widok_03.jpg",
      "/images/portfolio/dom-tomaszow-modern-classic/widok_04.jpg",
    ],
  },
  {
    id: "kawalerka-dla-studentki",
    title: "Kawalerka dla studentki",
    category: "Mieszkanie",
    description:
      "Kawalerka zaprojektowana dla studentki, która nie boi się odważniejszych połączeń. Zamiast neutralnej, minimalistycznej bazy pojawia się tu burgundowa kuchnia, czarne akcenty i wzorzysta posadzka. Inspiracje vintage i rustykalne przeplatają się tu z bardziej surowymi elementami. Czerń, burgund i naturalne drewno tworzą nieoczywiste zestawienie, a sztukateria za łóżkiem dodaje całości dekoracyjności. To połączenie różnych estetyk, które nie próbuje być idealnie spójne, a właśnie w tym tkwi jego urok.",
    thumbnail:
      "/images/portfolio/kawalerka-dla-studentki/widok_01-thumb.jpg",
    images: [
      "/images/portfolio/kawalerka-dla-studentki/widok_01.jpg",
      "/images/portfolio/kawalerka-dla-studentki/widok_02.jpg",
      "/images/portfolio/kawalerka-dla-studentki/widok_03.jpg",
      "/images/portfolio/kawalerka-dla-studentki/widok_04.jpg",
      "/images/portfolio/kawalerka-dla-studentki/widok_05.jpg",
      "/images/portfolio/kawalerka-dla-studentki/widok_06.jpg",
      "/images/portfolio/kawalerka-dla-studentki/widok_07.jpg",
      "/images/portfolio/kawalerka-dla-studentki/widok_08.jpg",
      "/images/portfolio/kawalerka-dla-studentki/widok_09.jpg",
      "/images/portfolio/kawalerka-dla-studentki/widok_10.jpg",
      "/images/portfolio/kawalerka-dla-studentki/widok_11.jpg",
    ],
  },
  {
    id: "klasyczna-kuchnia",
    title: "Klasyczna kuchnia",
    category: "Kuchnia",
    description:
      "Niewielka kuchnia, ale z dużą dbałością o detale. W tej realizacji postawiliśmy na klasyczny styl w lekkim, eleganckim wydaniu. Kaszmirowe fronty z delikatnymi ramkami nadają zabudowie ponadczasowy charakter, a złote uchwyty subtelnie podkreślają jej wyjątkowy styl. Biały, marmurkowy blat i dopasowane wykończenie ściany nad nim rozjaśniają wnętrze i dodają mu elegancji. Całość utrzymana jest w spokojnej kolorystyce, dzięki czemu kuchnia nie przytłacza, mimo że każdy element ma tu swoje znaczenie. To przykład na to, że klasyczna kuchnia nie potrzebuje dużego metrażu ani wielu ozdobników. Czasem wystarczy dobrze dobrana kolorystyka, kilka szlachetnych detali i przemyślana zabudowa, żeby stworzyć przestrzeń, do której chce się wracać.",
    thumbnail:
      "/images/portfolio/klasyczna-kuchnia/widok_01-thumb.jpg",
    images: [
      "/images/portfolio/klasyczna-kuchnia/widok_01.jpg",
      "/images/portfolio/klasyczna-kuchnia/widok_02.jpg",
      "/images/portfolio/klasyczna-kuchnia/widok_03.jpg",
      "/images/portfolio/klasyczna-kuchnia/widok_04.jpg",
    ],
  },
  {
    id: "kuchnia-industrialna",
    title: "Kuchnia w stylu industrialnym",
    category: "Kuchnia",
    description:
      "Industrialny charakter tej kuchni nie jest oczywisty ani dosłowny. Ceglana ściana, czarne ramy witryn i ciemne przeszklenia nadają jej loftowego wyrazu, ale zestawienie ich z frontami w złamanej bieli wprowadza zupełnie inną miękkość. Delikatne ramki na frontach dodają zabudowie klasycznego akcentu, a drewnopodobna wysoka zabudowa i blat ocieplają całą kompozycję. Dzięki temu kuchnia łączy nieco surową estetykę industrialną z bardziej domowym, przyjaznym charakterem.",
    thumbnail:
      "/images/portfolio/kuchnia-industrialna/widok_01-thumb.jpg",
    images: [
      "/images/portfolio/kuchnia-industrialna/widok_01.jpg",
      "/images/portfolio/kuchnia-industrialna/widok_02.jpg",
      "/images/portfolio/kuchnia-industrialna/widok_03.jpg",
      "/images/portfolio/kuchnia-industrialna/widok_04.jpg",
      "/images/portfolio/kuchnia-industrialna/widok_05.jpg",
      "/images/portfolio/kuchnia-industrialna/widok_06.jpg",
    ],
  },
  {
    id: "lazienka-francuska",
    title: "Łazienka inspirowana stylem francuskim",
    category: "Łazienka",
    description:
      "Ta łazienka to połączenie subtelnej elegancji z codzienną wygodą. Inspiracją był styl francuski, ale zamiast dosłownych nawiązań postawiliśmy na jego spokojniejszą, bardziej współczesną odsłonę. Jasne powierzchnie i ciepłe odcienie beżu tworzą wnętrze, w którym po prostu dobrze się przebywa. Charakteru dodają złote detale, cegiełka oraz podłoga z geometrycznym wzorem, która przełamuje stonowaną kolorystykę i przyciąga wzrok. Nie zabrakło też praktycznych rozwiązań. Strefa prysznica, podwieszana ceramika i dyskretnie wkomponowana zabudowa pralni pozwalają zachować porządek, nie odbierając wnętrzu lekkości. To łazienka, w której klasyczna inspiracja spotyka się z nowoczesnym podejściem do projektowania. Bez nadmiaru dekoracji, za to z dbałością o detale, materiały i proporcje.",
    thumbnail:
      "/images/portfolio/lazienka-francuska/widok_01-thumb.jpg",
    images: [
      "/images/portfolio/lazienka-francuska/widok_01.jpg",
      "/images/portfolio/lazienka-francuska/widok_02.jpg",
      "/images/portfolio/lazienka-francuska/widok_03.jpg",
      "/images/portfolio/lazienka-francuska/widok_04.jpg",
      "/images/portfolio/lazienka-francuska/widok_05.jpg",
    ],
  },
  {
    id: "lazienka-dom-pod-miastem",
    title: "Łazienka w domu pod miastem",
    category: "Łazienka",
    description:
      "Ten projekt to połączenie funkcjonalności i spokojnej, ponadczasowej estetyki. Jasne, kamienne płytki tworzą harmonijne tło dla ciepłej, ciemnej zabudowy drewnianej. Wysoka szafa skrywa pralkę, dzięki czemu strefa gospodarcza pozostaje dyskretnie ukryta. Prysznic został oddzielony pełną ścianą - bez szklanych przeszkleń, zgodnie z oczekiwaniami domowników. Dwie umywalki i wolnostojąca wanna zapewniają komfort użytkowania, a armatura w wykończeniu szczotkowanej miedzi dodaje wnętrzu szlachetnego charakteru. Całość dopełniają subtelne podświetlenia LED i lustra o organicznych kształtach.",
    thumbnail:
      "/images/portfolio/lazienka-dom-pod-miastem/widok_01-thumb.jpg",
    images: [
      "/images/portfolio/lazienka-dom-pod-miastem/widok_01.jpg",
      "/images/portfolio/lazienka-dom-pod-miastem/widok_02.jpg",
      "/images/portfolio/lazienka-dom-pod-miastem/widok_03.jpg",
      "/images/portfolio/lazienka-dom-pod-miastem/widok_04.jpg",
      "/images/portfolio/lazienka-dom-pod-miastem/widok_05.jpg",
    ],
  },
  {
    id: "lazienka-odcienie-bezu",
    title: "Łazienka w odcieniach beżu",
    category: "Łazienka",
    description:
      "Remont tej łazienki nie wymagał dużych zmian w układzie - postawiłam przede wszystkim na nową estetykę i dopracowanie detali. Oddzielna strefa prysznicowa i wanna zapewniają komfort oraz swobodę codziennego użytkowania, a zabudowa z miejscem na pralkę i suszarkę pozwala zachować wizualny porządek. Jasne, kamienne powierzchnie zestawiłam z ciepłym dekorem dębu Casella Natural, który nadaje wnętrzu przytulności i wpisuje się w aktualne trendy. Całość dopełnia armatura w szczotkowanym niklu oraz subtelne oświetlenie LED, które podkreśla architekturę wnętrza i buduje delikatny, nastrojowy klimat. Naturalnie, elegancko i przede wszystkim funkcjonalnie – taka łazienka ma cieszyć nie tylko wyglądem, ale i na co dzień.",
    thumbnail:
      "/images/portfolio/lazienka-odcienie-bezu/widok_01-thumb.jpg",
    images: [
      "/images/portfolio/lazienka-odcienie-bezu/widok_01.jpg",
      "/images/portfolio/lazienka-odcienie-bezu/widok_02.jpg",
      "/images/portfolio/lazienka-odcienie-bezu/widok_03.jpg",
      "/images/portfolio/lazienka-odcienie-bezu/widok_04.jpg",
      "/images/portfolio/lazienka-odcienie-bezu/widok_05.jpg",
    ],
  },
  {
    id: "lazienka-industrialna",
    title: "Łazienka w stylu industrialnym",
    category: "Łazienka",
    description:
      "Łazienka w stylu industrialnym, w której surowość materiałów łączy się z ciepłem naturalnych akcentów. Dominują tu antracytowe płytki o wyrazistej strukturze, cegła oraz powierzchnie drewnopodobne, które nadają wnętrzu charakteru i głębi. Czarne elementy armatury i dodatki podkreślają loftowy styl aranżacji, a subtelne oświetlenie LED wydobywa faktury materiałów i buduje nastrojowy klimat. Całość tworzy nowoczesną, nieco surową, ale jednocześnie przytulną przestrzeń.",
    thumbnail:
      "/images/portfolio/lazienka-industrialna/widok_01-thumb.jpg",
    images: [
      "/images/portfolio/lazienka-industrialna/widok_01.jpg",
      "/images/portfolio/lazienka-industrialna/widok_02.jpg",
      "/images/portfolio/lazienka-industrialna/widok_03.jpg",
      "/images/portfolio/lazienka-industrialna/widok_04.jpg",
      "/images/portfolio/lazienka-industrialna/widok_05.jpg",
      "/images/portfolio/lazienka-industrialna/widok_06.jpg",
    ],
  },
  {
    id: "ponadczasowa-lazienka",
    title: "Ponadczasowa łazienka w domu jednorodzinnym",
    category: "Łazienka",
    description:
      "Jasna łazienka, w której biel i drewno tworzą przyjemne, ciepłe połączenie. Wolnostojąca wanna o delikatnie zaokrąglonej formie jest jednym z ciekawszych elementów aranżacji i dobrze komponuje się z jasnymi płytkami o rysunku kamienia. Dużo uwagi poświęcono również praktycznej stronie wnętrza. Pralka i suszarka zostały ukryte w zabudowie, a drewniany blat i proste meble porządkują całą przestrzeń. To projekt oparty na sprawdzonych materiałach i rozwiązaniach, które dobrze odnajdą się niezależnie od zmieniających się trendów.",
    thumbnail:
      "/images/portfolio/ponadczasowa-lazienka/widok_01-thumb.jpg",
    images: [
      "/images/portfolio/ponadczasowa-lazienka/widok_01.jpg",
      "/images/portfolio/ponadczasowa-lazienka/widok_02.jpg",
      "/images/portfolio/ponadczasowa-lazienka/widok_03.jpg",
      "/images/portfolio/ponadczasowa-lazienka/widok_04.jpg",
      "/images/portfolio/ponadczasowa-lazienka/widok_05.jpg",
      "/images/portfolio/ponadczasowa-lazienka/widok_06.jpg",
      "/images/portfolio/ponadczasowa-lazienka/widok_07.jpg",
      "/images/portfolio/ponadczasowa-lazienka/widok_08.jpg",
    ],
  },
  {
    id: "pralnia",
    title: "Pralnia",
    category: "Dom",
    description:
      "Pralnia z kotłownią to jedna z tych przestrzeni, które muszą sprostać wielu codziennym zadaniom. W tym projekcie pełni również rolę łącznika między garażem, ogrodem i domem. Mimo technicznego przeznaczenia pomieszczenie zyskało dopracowaną, spójną aranżację. Zabudowa w odcieniu przygaszonego różu, drewniane drzwi i jasna, geometryczna posadzka nadają mu nieco nietypowy charakter. To przykład na to, że nawet zaplecze gospodarcze może być przemyślaną częścią projektu całego domu.",
    thumbnail:
      "/images/portfolio/pralnia/widok_01-thumb.jpg",
    images: [
      "/images/portfolio/pralnia/widok_01.jpg",
      "/images/portfolio/pralnia/widok_02.jpg",
      "/images/portfolio/pralnia/widok_03.jpg",
      "/images/portfolio/pralnia/widok_04.jpg",
      "/images/portfolio/pralnia/widok_05.jpg",
    ],
  },
];
