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
];
