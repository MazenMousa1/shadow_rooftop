const BEVERAGE_CATEGORIES = [
  {
    "key": "hot-beverages",
    "label": "Hot Beverages",
    "arabicLabel": "المشروبات الساخنة",
    "items": [
      {
        "id": "hot-beverages-tea",
        "name": "Tea",
        "description": "Tea",
        "price": 61.236,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-tea.webp",
        "arabicName": "شاي",
        "arabicDescription": "شاي"
      },
      {
        "id": "hot-beverages-green-tea",
        "name": "Green Tea",
        "description": "Green Tea",
        "price": 57.834,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-green-tea.webp",
        "arabicName": "شاي اخضر",
        "arabicDescription": "شاي اخضر"
      },
      {
        "id": "hot-beverages-salep",
        "name": "Salep",
        "description": "Milk - Salep - Nuts",
        "price": 169.53300000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-salep.webp",
        "arabicName": "سحلب",
        "arabicDescription": "لبن - سحلب - مكسرات"
      },
      {
        "id": "hot-beverages-halabessa",
        "name": "Halabessa",
        "description": "Hummus El Sham",
        "price": 169.53300000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-halabessa.webp",
        "arabicName": "حلبسه",
        "arabicDescription": "حمص الشام"
      },
      {
        "id": "hot-beverages-turkish-coffee-single",
        "name": "Turkish Coffee (Single)",
        "description": "Turkish Coffee (Single)",
        "price": 97.71300000000001,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-turkish-coffee-single.webp",
        "arabicName": "قهوة تركي",
        "arabicDescription": "قهوة تركي"
      },
      {
        "id": "hot-beverages-turkish-coffee-double",
        "name": "Turkish Coffee (Double)",
        "description": "Turkish Coffee (Double)",
        "price": 118.503,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-turkish-coffee-double.webp",
        "arabicName": "قهوة تركي دوبل",
        "arabicDescription": "قهوة تركي دوبل"
      },
      {
        "id": "hot-beverages-french-coffee",
        "name": "French Coffee",
        "description": "French Coffee",
        "price": 118.503,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-french-coffee.webp",
        "arabicName": "قهوة فرنساوي",
        "arabicDescription": "قهوة فرنساوي"
      },
      {
        "id": "hot-beverages-espresso-single",
        "name": "Espresso (Single)",
        "description": "Espresso (Single)",
        "price": 97.71300000000001,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-espresso-single.webp",
        "arabicName": "اسبرسو",
        "arabicDescription": "اسبرسو"
      },
      {
        "id": "hot-beverages-espresso-double",
        "name": "Espresso (Double)",
        "description": "Espresso (Double)",
        "price": 135.513,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-espresso-double.webp",
        "arabicName": "اسبرسو دوبل",
        "arabicDescription": "اسبرسو دوبل"
      },
      {
        "id": "hot-beverages-macchiato-single",
        "name": "Macchiato (Single)",
        "description": "Macchiato (Single)",
        "price": 118.503,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-macchiato-single.webp",
        "arabicName": "ميكاتو",
        "arabicDescription": "ميكاتو"
      },
      {
        "id": "hot-beverages-macchiato-double",
        "name": "Macchiato (Double)",
        "description": "Macchiato (Double)",
        "price": 152.523,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-macchiato-double.webp",
        "arabicName": "ميكاتو دوبل",
        "arabicDescription": "ميكاتو دوبل"
      },
      {
        "id": "hot-beverages-latte",
        "name": "Latte",
        "description": "Latte",
        "price": 169.53300000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-latte.webp",
        "arabicName": "لاتيه",
        "arabicDescription": "اسبرسو - لبن"
      },
      {
        "id": "hot-beverages-cappuccino",
        "name": "Cappuccino",
        "description": "Cappuccino",
        "price": 152.523,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-cappuccino.webp",
        "arabicName": "كابتشينو",
        "arabicDescription": "اسبرسو - لبن"
      },
      {
        "id": "hot-beverages-flat-white",
        "name": "Flat White",
        "description": "Flat White",
        "price": 169.53300000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-flat-white.webp",
        "arabicName": "فلات وايت",
        "arabicDescription": "اسبرسو - لبن"
      },
      {
        "id": "hot-beverages-mochaccino",
        "name": "Mochaccino",
        "description": "Mochaccino",
        "price": 169.53300000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-mochaccino.webp",
        "arabicName": "موكاتشينو",
        "arabicDescription": "اسبرسو - لبن"
      },
      {
        "id": "hot-beverages-american-coffee",
        "name": "American Coffee",
        "description": "American Coffee",
        "price": 130.41,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-american-coffee.webp",
        "arabicName": "امريكان كوفي",
        "arabicDescription": "اسبرسو"
      },
      {
        "id": "hot-beverages-nescafe",
        "name": "Nescafe",
        "description": "Nescafe",
        "price": 130.41,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-nescafe.webp",
        "arabicName": "نسكافيه",
        "arabicDescription": "نسكافيه"
      },
      {
        "id": "hot-beverages-hot-chocolate",
        "name": "Hot Chocolate",
        "description": "Hot Chocolate",
        "price": 130.41,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-hot-chocolate.webp",
        "arabicName": "هوت شوكليت",
        "arabicDescription": "شوكليت - لبن"
      },
      {
        "id": "hot-beverages-hot-chocolate-flavors",
        "name": "Hot Chocolate Flavors",
        "description": "Hot Chocolate Flavors",
        "price": 146.664,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-hot-chocolate-flavors.webp",
        "arabicName": "هوت شوكليت نكهات",
        "arabicDescription": "شوكليت - لبن - نكهتك المفضلة"
      },
      {
        "id": "hot-beverages-anti-flu",
        "name": "Anti-Flu",
        "description": "Orange – Cinnamon – Anise",
        "price": 130.41,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-anti-flu.webp",
        "arabicName": "انتي - فلو",
        "arabicDescription": "عصير برتقال - قرفة - ينسون"
      },
      {
        "id": "hot-beverages-hot-cider",
        "name": "Hot Cider",
        "description": "Apple Juice – Cinnamon – Clove",
        "price": 130.41,
        "priceSource": "final",
        "image": "assets/images/beverages/hot-beverages-hot-cider.webp",
        "arabicName": "هوت سيدر",
        "arabicDescription": "عصير تفاح - قرفة - قرنفل"
      }
    ]
  },
  {
    "key": "soft-drinks",
    "label": "Soft Drinks",
    "arabicLabel": "المشروبات الغازية",
    "items": [
      {
        "id": "soft-drinks-coca-cola",
        "name": "Coca Cola",
        "description": "",
        "price": 87.156,
        "priceSource": "final",
        "image": "assets/images/beverages/soft-drinks-coca-cola.webp",
        "arabicName": "كوكاكولا",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-coca-cola-zero",
        "name": "Coca Cola Zero",
        "description": "",
        "price": 87.156,
        "priceSource": "final",
        "image": "assets/images/beverages/soft-drinks-coca-cola-zero.webp",
        "arabicName": "كوكاكولا زيرو",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-sprite",
        "name": "Sprite",
        "description": "",
        "price": 87.156,
        "priceSource": "final",
        "image": "assets/images/beverages/soft-drinks-sprite.webp",
        "arabicName": "اسبرايت",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-fanta",
        "name": "Fanta",
        "description": "",
        "price": 87.156,
        "priceSource": "final",
        "image": "assets/images/beverages/soft-drinks-fanta.webp",
        "arabicName": "فانتا",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-schweppes",
        "name": "Schweppes",
        "description": "",
        "price": 87.156,
        "priceSource": "final",
        "image": "assets/images/beverages/soft-drinks-schweppes.webp",
        "arabicName": "شويبس",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-small-water",
        "name": "Small Water",
        "description": "",
        "price": 41.796,
        "priceSource": "final",
        "image": "assets/images/beverages/soft-drinks-small-water.webp",
        "arabicName": "مياه صغيرة",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-medium-water-500-ml",
        "name": "Medium Water (500 Ml)",
        "description": "Puvana Water Glass Bottle (500 Ml)",
        "price": 151.2,
        "priceSource": "final",
        "image": "assets/images/beverages/soft-drinks-medium-water-500-ml.webp",
        "arabicName": "مياه كبيرة",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-large-water-1-l",
        "name": "Large Water (1 L)",
        "description": "Puvana Water Glass Bottle (1 L)",
        "price": 187.10999999999999,
        "priceSource": "final",
        "image": "assets/images/beverages/soft-drinks-large-water-1-l.webp",
        "arabicName": "مياه كبيرة",
        "arabicDescription": ""
      }
    ]
  },
  {
    "key": "fresh-juice",
    "label": "Fresh Juice",
    "arabicLabel": "العصائر الطازجة",
    "items": [
      {
        "id": "fresh-juice-banana-milk",
        "name": "Banana Milk",
        "description": "Fresh  Juice",
        "price": 151.902,
        "priceSource": "final",
        "image": "assets/images/beverages/fresh-juice-banana-milk.webp",
        "arabicName": "موز باللبن",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-guava",
        "name": "Guava",
        "description": "Fresh  Juice",
        "price": 135.0675,
        "priceSource": "final",
        "image": "assets/images/beverages/fresh-juice-guava.webp",
        "arabicName": "جوافة",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-guava-mint",
        "name": "Guava Mint",
        "description": "Fresh  Juice",
        "price": 140.94,
        "priceSource": "final",
        "image": "assets/images/beverages/fresh-juice-guava-mint.webp",
        "arabicName": "جوافة بالنعناع",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-kiwi",
        "name": "Kiwi",
        "description": "Fresh  Juice",
        "price": 151.902,
        "priceSource": "final",
        "image": "assets/images/beverages/fresh-juice-kiwi.webp",
        "arabicName": "كيوي",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-lemon",
        "name": "Lemon",
        "description": "Fresh  Juice",
        "price": 135.0675,
        "priceSource": "final",
        "image": "assets/images/beverages/fresh-juice-lemon.webp",
        "arabicName": "ليمون",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-lemon-milk",
        "name": "Lemon Milk",
        "description": "Fresh  Juice",
        "price": 147.987,
        "priceSource": "final",
        "image": "assets/images/beverages/fresh-juice-lemon-milk.webp",
        "arabicName": "ليمون باللبن",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-lemon-mint",
        "name": "Lemon Mint",
        "description": "Fresh  Juice",
        "price": 140.94,
        "priceSource": "final",
        "image": "assets/images/beverages/fresh-juice-lemon-mint.webp",
        "arabicName": "ليمون بالنعناع",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-mango",
        "name": "Mango",
        "description": "Fresh  Juice",
        "price": 151.902,
        "priceSource": "final",
        "image": "assets/images/beverages/fresh-juice-mango.webp",
        "arabicName": "مانجو",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-orange",
        "name": "Orange",
        "description": "Fresh  Juice",
        "price": 147.987,
        "priceSource": "final",
        "image": "assets/images/beverages/fresh-juice-orange.webp",
        "arabicName": "برتقال",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-strawberry",
        "name": "Strawberry",
        "description": "Fresh  Juice",
        "price": 151.902,
        "priceSource": "final",
        "image": "assets/images/beverages/fresh-juice-strawberry.webp",
        "arabicName": "فراولة",
        "arabicDescription": "عصير فريش"
      }
    ]
  },
  {
    "key": "cocktails",
    "label": "Cocktails",
    "arabicLabel": "الكوكتيلات",
    "items": [
      {
        "id": "cocktails-crazy-mango",
        "name": "Crazy Mango",
        "description": "Mango – Coconut – Vanilla Ice Cream",
        "price": 200.25224999999998,
        "priceSource": "final",
        "image": "assets/images/beverages/cocktails-crazy-mango.webp",
        "arabicName": "كريزي مانجو",
        "arabicDescription": "مانجو - جوز هند - ايس كريم فانيليا"
      },
      {
        "id": "cocktails-florida",
        "name": "Florida",
        "description": "Mango – Strawberry – Guava",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/cocktails-florida.webp",
        "arabicName": "فلوريدا",
        "arabicDescription": "مانجو - فراولة - جوافة"
      },
      {
        "id": "cocktails-happy-cocktail",
        "name": "Happy Cocktail",
        "description": "Mango – Kiwi – Vanilla – Milk",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/cocktails-happy-cocktail.webp",
        "arabicName": "هابي كوكتيل",
        "arabicDescription": "مانجو - كيوي - فانيليا - لبن"
      },
      {
        "id": "cocktails-hawaii",
        "name": "Hawaii",
        "description": "Mango – Peach – Banana – Pineapple",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/cocktails-hawaii.webp",
        "arabicName": "هااواي",
        "arabicDescription": "مانجو - خوخ - موز - اناناس"
      },
      {
        "id": "cocktails-kiwi-apple-mint",
        "name": "Kiwi Apple Mint",
        "description": "Kiwi – Apple – Lemon – Peach",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/cocktails-kiwi-apple-mint.webp",
        "arabicName": "كيوي ابل منت",
        "arabicDescription": "كيوي - تفاح - ليمون - خوخ"
      },
      {
        "id": "cocktails-lemobana",
        "name": "Lemobana",
        "description": "Lemon – Pineapple – Orange",
        "price": 200.25224999999998,
        "priceSource": "final",
        "image": "assets/images/beverages/cocktails-lemobana.webp",
        "arabicName": "ليموبانا",
        "arabicDescription": "ليمون - اناناس - برتقال"
      },
      {
        "id": "cocktails-mangobana",
        "name": "Mangobana",
        "description": "Mango – Vanilla Ice Cream – Cinnamon – Vanilla",
        "price": 200.25224999999998,
        "priceSource": "final",
        "image": "assets/images/beverages/cocktails-mangobana.webp",
        "arabicName": "مانجوبانا",
        "arabicDescription": "مانجو - ايس كريم فانيليا - قرفة - فانيليا"
      },
      {
        "id": "cocktails-mangomint",
        "name": "Mangomint",
        "description": "Mango – Banana – Peach – Pineapple – Mint",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/cocktails-mangomint.webp",
        "arabicName": "مانجو مينت",
        "arabicDescription": "مانجو - موز - خوخ - اناناس - نعناع"
      },
      {
        "id": "cocktails-pina-colada",
        "name": "Pina Colada",
        "description": "Pineapple – Coconut – Lemon",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/cocktails-pina-colada.webp",
        "arabicName": "بيناكولادا",
        "arabicDescription": "اناناس - جوز هند - ليمون"
      }
    ]
  },
  {
    "key": "granita",
    "label": "Granita",
    "arabicLabel": "الجرانيتا",
    "items": [
      {
        "id": "granita-guava-smoothie",
        "name": "Guava Smoothie",
        "description": "Guava – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-guava-smoothie.webp",
        "arabicName": "جوافة",
        "arabicDescription": "جوافة - ثلج"
      },
      {
        "id": "granita-lemon-mint-smoothie",
        "name": "Lemon Mint Smoothie",
        "description": "Lemon – Mint – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-lemon-mint-smoothie.webp",
        "arabicName": "ليمون بالنعناع",
        "arabicDescription": "ليمون نعناع - ثلج"
      },
      {
        "id": "granita-lemon-smoothie",
        "name": "Lemon Smoothie",
        "description": "Lemon – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-lemon-smoothie.webp",
        "arabicName": "ليمون",
        "arabicDescription": "ليمون - ثلج"
      },
      {
        "id": "granita-pineapple-smoothie",
        "name": "Pineapple Smoothie",
        "description": "Pineapple – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-pineapple-smoothie.webp",
        "arabicName": "اناناس",
        "arabicDescription": "اناناس - ثلج"
      },
      {
        "id": "granita-blueberry-smoothie",
        "name": "Blueberry Smoothie",
        "description": "Blueberry – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-blueberry-smoothie.webp",
        "arabicName": "بلوبيري",
        "arabicDescription": "بلوبيري - ثلج"
      },
      {
        "id": "granita-kiwi-smoothie",
        "name": "Kiwi Smoothie",
        "description": "Kiwi – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-kiwi-smoothie.webp",
        "arabicName": "كيوي",
        "arabicDescription": "كيوي -ثلج"
      },
      {
        "id": "granita-mango-smoothie",
        "name": "Mango Smoothie",
        "description": "Mango – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-mango-smoothie.webp",
        "arabicName": "مانجو",
        "arabicDescription": "مانجو - ثلج"
      },
      {
        "id": "granita-mixed-berries-smoothie",
        "name": "Mixed Berries Smoothie",
        "description": "Mixed Berries – Ice",
        "price": 207.15749999999997,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-mixed-berries-smoothie.webp",
        "arabicName": "ميكس بيري",
        "arabicDescription": "ميكس بيري - ثلج"
      },
      {
        "id": "granita-raspberry-smoothie",
        "name": "Raspberry Smoothie",
        "description": "Raspberry – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-raspberry-smoothie.webp",
        "arabicName": "راسبيري",
        "arabicDescription": "راسبيري - ثلج"
      },
      {
        "id": "granita-strawberry-smoothie",
        "name": "Strawberry Smoothie",
        "description": "Strawberry – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-strawberry-smoothie.webp",
        "arabicName": "فراولة",
        "arabicDescription": "فراولة - ثلج"
      },
      {
        "id": "granita-banana-dragon-smoothie",
        "name": "Banana Dragon Smoothie",
        "description": "Banana – Strawberry – Coconut – Ice",
        "price": 199.66499999999996,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-banana-dragon-smoothie.webp",
        "arabicName": "بانانا دراجون",
        "arabicDescription": "موز - فراولة - جوزهند - ثلج"
      },
      {
        "id": "granita-mixed-fruits-smoothie",
        "name": "Mixed Fruits Smoothie",
        "description": "Guava – Strawberry – Mango – Ice",
        "price": 199.66499999999996,
        "priceSource": "final",
        "image": "assets/images/beverages/granita-mixed-fruits-smoothie.webp",
        "arabicName": "ميكس فروتس",
        "arabicDescription": "جوافة - فراولة - مانجو - ثلج"
      }
    ]
  },
  {
    "key": "soda",
    "label": "Soda",
    "arabicLabel": "الصودا",
    "items": [
      {
        "id": "soda-virgin-mojito",
        "name": "Virgin Mojito",
        "description": "Mojito Flavor – Lemon – Mint – 7Up",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-virgin-mojito.webp",
        "arabicName": "موخيتو",
        "arabicDescription": "موخيتو فليفر - ليمون - نعناع - سفن اب"
      },
      {
        "id": "soda-scotch-mint-soda",
        "name": "Scotch Mint Soda",
        "description": "Mint Flavor – Lemon – Mint – 7Up",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-scotch-mint-soda.webp",
        "arabicName": "اسكوتش منت",
        "arabicDescription": "فتراك نعناع - ليمون - نعناع - سفن اب"
      },
      {
        "id": "soda-sun-shine-soda",
        "name": "Sun Shine Soda",
        "description": "Garden – Lemon – 7Up",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-sun-shine-soda.webp",
        "arabicName": "صن شاين",
        "arabicDescription": "فتراك رمان - ليمون - سفن اب"
      },
      {
        "id": "soda-american-soda",
        "name": "American Soda",
        "description": "Espresso – Red Bull",
        "price": 217.08,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-american-soda.webp",
        "arabicName": "امريكان صودا",
        "arabicDescription": "اسبرسو - ريد بول"
      },
      {
        "id": "soda-orange-soda",
        "name": "Orange Soda",
        "description": "Cherry – Orange – 7Up",
        "price": 217.08,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-orange-soda.webp",
        "arabicName": "اورانج",
        "arabicDescription": "كريز فليفر - عصير برتقال - سفن اب"
      },
      {
        "id": "soda-apple-breeze-soda",
        "name": "Apple Breeze Soda",
        "description": "Apple – Mint – Sprite – 7Up",
        "price": 217.08,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-apple-breeze-soda.webp",
        "arabicName": "ابل بريز",
        "arabicDescription": "تفاح - فتراك نعناع - سفن اب"
      },
      {
        "id": "soda-blue-orange-soda",
        "name": "Blue Orange Soda",
        "description": "Blue Curacao – Orange – 7Up",
        "price": 238.3425,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-blue-orange-soda.webp",
        "arabicName": "بلو اورانج",
        "arabicDescription": "بلوكرواسوا - برتقال - سفن اب"
      },
      {
        "id": "soda-grape-kiwi-soda",
        "name": "Grape Kiwi Soda",
        "description": "Grape – Kiwi – Kiwi Flavor – 7Up",
        "price": 238.3425,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-grape-kiwi-soda.webp",
        "arabicName": "جريب كيوي",
        "arabicDescription": "عنب احمر - كيوي - كيوي فلفر - سفن اب"
      },
      {
        "id": "soda-birell",
        "name": "Birell",
        "description": "Birell",
        "price": 201.4875,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-birell.webp",
        "arabicName": "بريل",
        "arabicDescription": "بريل"
      },
      {
        "id": "soda-red-bull",
        "name": "Red Bull",
        "description": "Red Bull",
        "price": 217.88999999999996,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-red-bull.webp",
        "arabicName": "ريدبول",
        "arabicDescription": ""
      },
      {
        "id": "soda-94-red-bull-fusion-soda",
        "name": "94. Red Bull Fusion Soda",
        "description": "Pineapple – Orange – Red Bull",
        "price": 279.045,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-94-red-bull-fusion-soda.webp",
        "arabicName": "ريدبول فيوجن",
        "arabicDescription": "اناناس - برتقال - ريدبول"
      },
      {
        "id": "soda-redbull-mojito",
        "name": "RedBull Mojito",
        "description": "Lemon - Mint - Redbull",
        "price": 279.045,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-redbull-mojito.webp",
        "arabicName": "ريدبول موخيتو",
        "arabicDescription": "ليمون - نعناع - ريد بول"
      },
      {
        "id": "soda-redbull-strawberry-soda",
        "name": "RedBull Strawberry Soda",
        "description": "Strawberry -  Redbull",
        "price": 279.045,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-redbull-strawberry-soda.webp",
        "arabicName": "ريدبول فراولة",
        "arabicDescription": "فراولة - ريدبول"
      },
      {
        "id": "soda-redbull-cherry",
        "name": "RedBull Cherry",
        "description": "Cherry - Redbull",
        "price": 279.045,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-redbull-cherry.webp",
        "arabicName": "ريدبول شيري",
        "arabicDescription": "كريز فليفر - ريدبول"
      },
      {
        "id": "soda-small-sparkling-water",
        "name": "Small Sparkling Water",
        "description": "Puvana Light Sparkling Water ( 240M )",
        "price": 157.95,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-small-sparkling-water.webp",
        "arabicName": "مياه فوارة صغيره",
        "arabicDescription": "مياه فوارة"
      },
      {
        "id": "soda-large-sparkling-water",
        "name": "Large Sparkling Water",
        "description": "Puvana Medium Sparkling Water ( 500M )",
        "price": 213.83999999999997,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-large-sparkling-water.webp",
        "arabicName": "مياه فوارة كبيره",
        "arabicDescription": "مياه فوارة"
      },
      {
        "id": "soda-shadow-soda",
        "name": "Shadow Soda",
        "description": "Pineapple - Blue Curacao - 7Up",
        "price": 279.045,
        "priceSource": "final",
        "image": "assets/images/beverages/soda-shadow-soda.webp",
        "arabicName": "شادو",
        "arabicDescription": "عصير اناناس - بلوكرواسوا - سفن اب"
      }
    ]
  },
  {
    "key": "healthy",
    "label": "Healthy",
    "arabicLabel": "المشروبات الصحية",
    "items": [
      {
        "id": "healthy-avomango",
        "name": "Avomango",
        "description": "Avocado - Mango",
        "price": 195.0075,
        "priceSource": "final",
        "image": "assets/images/beverages/healthy-avomango.webp",
        "arabicName": "افومانجو",
        "arabicDescription": "افوكادو - مانجو"
      },
      {
        "id": "healthy-nuclear-hulk",
        "name": "Nuclear Hulk",
        "description": "Avocado - Banana - Kiwi - Milk",
        "price": 195.0075,
        "priceSource": "final",
        "image": "assets/images/beverages/healthy-nuclear-hulk.webp",
        "arabicName": "نيوكلير هالك",
        "arabicDescription": "افوكادو - موز - كيوي - لبن"
      },
      {
        "id": "healthy-orange-carrots",
        "name": "Orange Carrots",
        "description": "Orange - Carrots",
        "price": 195.0075,
        "priceSource": "final",
        "image": "assets/images/beverages/healthy-orange-carrots.webp",
        "arabicName": "اورانج كاروتس",
        "arabicDescription": "عصير برتقال - جزر"
      },
      {
        "id": "healthy-strawberry-rocca",
        "name": "Strawberry Rocca",
        "description": "Strwaberry - Rocca",
        "price": 195.0075,
        "priceSource": "final",
        "image": "assets/images/beverages/healthy-strawberry-rocca.webp",
        "arabicName": "استروبري روكا",
        "arabicDescription": "فراولة - ورق جرجير"
      },
      {
        "id": "healthy-power-cocktail",
        "name": "Power Cocktail",
        "description": "Rocca - Avocado - Banana - Vanilla Ice Cream - Milk",
        "price": 228.42,
        "priceSource": "final",
        "image": "assets/images/beverages/healthy-power-cocktail.webp",
        "arabicName": "باور كوكتيل",
        "arabicDescription": "جرجير - افوكادو - موز - ايس كريم فانيليا - لبن"
      },
      {
        "id": "healthy-tropicana",
        "name": "Tropicana",
        "description": "Carrots - Kiwi - Orange - Honey",
        "price": 228.42,
        "priceSource": "final",
        "image": "assets/images/beverages/healthy-tropicana.webp",
        "arabicName": "تروبيكانا",
        "arabicDescription": "جزر - كيوي - برتقال - عسل ابيض"
      },
      {
        "id": "healthy-shadow-healthy",
        "name": "Shadow Healthy",
        "description": "Avocado - Kiwi - Rocca - Banana - Honey",
        "price": 242.59499999999997,
        "priceSource": "final",
        "image": "assets/images/beverages/healthy-shadow-healthy.webp",
        "arabicName": "شادو",
        "arabicDescription": "افوكادو - كيوي - جرجير - موز - عسل ابيض"
      }
    ]
  },
  {
    "key": "shakes",
    "label": "Shakes",
    "arabicLabel": "الميلك شيك",
    "items": [
      {
        "id": "shakes-mango-milk-shake",
        "name": "Mango Milk shake",
        "description": "Mango - Vanilla Ice Cream",
        "price": 228.42,
        "priceSource": "final",
        "image": "assets/images/beverages/shakes-mango-milk-shake.webp",
        "arabicName": "ميلك تشيك مانجو",
        "arabicDescription": "ايس كريم فانيليا - مانجو"
      },
      {
        "id": "shakes-banana-milk-shake",
        "name": "Banana Milk shake",
        "description": "Banana - Milk - Vanilla Ice Cream",
        "price": 228.42,
        "priceSource": "final",
        "image": "assets/images/beverages/shakes-banana-milk-shake.webp",
        "arabicName": "ميلك تشيك موز",
        "arabicDescription": "ايس كريم فانيليا - موز - لبن"
      },
      {
        "id": "shakes-blueberry-milk-shake",
        "name": "Blueberry Milk shake",
        "description": "Blueberry - Vanilla Ice Cream",
        "price": 228.42,
        "priceSource": "final",
        "image": "assets/images/beverages/shakes-blueberry-milk-shake.webp",
        "arabicName": "ميلك تشيك بلوبيري",
        "arabicDescription": "ايس كريم فانيليا - بلوبيري"
      },
      {
        "id": "shakes-oreo-milk-shake",
        "name": "Oreo Milk shake",
        "description": "Oreo - Chocolate - Milk - Vanilla ice Cream",
        "price": 228.42,
        "priceSource": "final",
        "image": "assets/images/beverages/shakes-oreo-milk-shake.webp",
        "arabicName": "ميلك تشيك اوريو",
        "arabicDescription": "ايس كريم فانيليا - شوكلت - اوريو - لبن"
      },
      {
        "id": "shakes-cheese-cake-milk-shake",
        "name": "Cheese Cake Milk shake",
        "description": "Cheese Cake With Flavor - Vanilla Ice Cream",
        "price": 298.6875,
        "priceSource": "final",
        "image": "assets/images/beverages/shakes-cheese-cake-milk-shake.webp",
        "arabicName": "ميلك تشيك تشيز كيك",
        "arabicDescription": "ايس كريم فانيليا - تشيز كيك مع فليفر من اختيارك"
      }
    ]
  },
  {
    "key": "frappe",
    "label": "Frappe",
    "arabicLabel": "الفرابيه",
    "items": [
      {
        "id": "frappe-frappuccino-classic",
        "name": "Frappuccino Classic",
        "description": "Frappe - Espresso - Milk",
        "price": 194.805,
        "priceSource": "final",
        "image": "assets/images/beverages/frappe-frappuccino-classic.webp",
        "arabicName": "فرابتشينو",
        "arabicDescription": "فرابيه - اسبرسو - لبن"
      },
      {
        "id": "frappe-frappe-flavours",
        "name": "Frappe Flavours",
        "description": "Frappe - Milk - Your Choice of Flavors",
        "price": 199.26000000000002,
        "priceSource": "final",
        "image": "assets/images/beverages/frappe-frappe-flavours.webp",
        "arabicName": "فرابيه نكهات",
        "arabicDescription": "فرابيه - لبن - فليفر من اختيارك"
      },
      {
        "id": "frappe-frappe-chocolate",
        "name": "Frappe Chocolate",
        "description": "Chocolate Frappe - Milk",
        "price": 199.8675,
        "priceSource": "final",
        "image": "assets/images/beverages/frappe-frappe-chocolate.webp",
        "arabicName": "شوكلت فرابيه",
        "arabicDescription": "فرابيه شوكليت - لبن"
      },
      {
        "id": "frappe-frappe-mocha-nuts",
        "name": "Frappe Mocha Nuts",
        "description": "Frappe - Peanut Butter -Caramel - Milk",
        "price": 199.8675,
        "priceSource": "final",
        "image": "assets/images/beverages/frappe-frappe-mocha-nuts.webp",
        "arabicName": "موكا نتس فرابيه",
        "arabicDescription": "فرابيه - زبدة فول سوداني - كراميل - لبن"
      },
      {
        "id": "frappe-frappuccino-mocha",
        "name": "Frappuccino Mocha",
        "description": "Chocolate Frappe - Espresso - Milk",
        "price": 199.8675,
        "priceSource": "final",
        "image": "assets/images/beverages/frappe-frappuccino-mocha.webp",
        "arabicName": "فرابتشينو موكا",
        "arabicDescription": "فرابيه شوكليت - اسبرسو - لبن"
      },
      {
        "id": "frappe-ice-latte",
        "name": "ice Latte",
        "description": "Espresso - Milk - Ice",
        "price": 167.265,
        "priceSource": "final",
        "image": "assets/images/beverages/frappe-ice-latte.webp",
        "arabicName": "ايس لاتيه",
        "arabicDescription": "اسبرسو - لبن - ثلج"
      },
      {
        "id": "frappe-ice-mocha",
        "name": "ice Mocha",
        "description": "Espresso - Chocolate - Milk - Ice",
        "price": 194.805,
        "priceSource": "final",
        "image": "assets/images/beverages/frappe-ice-mocha.webp",
        "arabicName": "ايس موكا",
        "arabicDescription": "اسبرسو - شوكليت - لبن - ثلج"
      },
      {
        "id": "frappe-ice-tea",
        "name": "ice Tea",
        "description": "Red tea - Ice",
        "price": 163.0125,
        "priceSource": "final",
        "image": "assets/images/beverages/frappe-ice-tea.webp",
        "arabicName": "ايس تي",
        "arabicDescription": "شاي احمر - ثلج"
      }
    ]
  },
  {
    "key": "dessert",
    "label": "Dessert",
    "arabicLabel": "الحلويات",
    "items": [
      {
        "id": "dessert-brownies",
        "name": "Brownies",
        "description": "Brownies With ice Cream",
        "price": 257.175,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-brownies.webp",
        "arabicName": "براونيز",
        "arabicDescription": "كيك البراونيز مع ايس كريم"
      },
      {
        "id": "dessert-cheese-cake",
        "name": "Cheese Cake",
        "description": "Cheese Cake With your Choice Of Flavor",
        "price": 257.175,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-cheese-cake.webp",
        "arabicName": "تشيز كيك",
        "arabicDescription": "تشيز كيك مع صوص من اختيارك"
      },
      {
        "id": "dessert-molten-ice-cream",
        "name": "Molten Ice Cream",
        "description": "Molten Cake With Ice Cream",
        "price": 257.175,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-molten-ice-cream.webp",
        "arabicName": "مولتن كيك",
        "arabicDescription": "مولتن كيك مع ايس كريم"
      },
      {
        "id": "dessert-oreo-madness",
        "name": "Oreo Madness",
        "description": "Oreo - Vanilla Ice Cream",
        "price": 257.175,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-oreo-madness.webp",
        "arabicName": "اوريو مادنس",
        "arabicDescription": "اوريو - ايس كريم فانيليا"
      },
      {
        "id": "dessert-chocolate-cake",
        "name": "Chocolate Cake",
        "description": "Chocolate Cake",
        "price": 257.175,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-chocolate-cake.webp",
        "arabicName": "شوكلت كيك",
        "arabicDescription": "شوكليت كيك"
      },
      {
        "id": "dessert-ice-cream-3-scoops",
        "name": "Ice Cream 3 Scoops",
        "description": "Ice Cream 3 Scoops of Your Choice",
        "price": 257.175,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-ice-cream-3-scoops.webp",
        "arabicName": "ايس كريم",
        "arabicDescription": "3 بولات من اختيارك"
      },
      {
        "id": "dessert-banana-split",
        "name": "Banana Split",
        "description": "Banana - Vanilla ice Cream",
        "price": 257.175,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-banana-split.webp",
        "arabicName": "بانانا سبليت",
        "arabicDescription": "موز- ايس كريم فانيليا"
      },
      {
        "id": "dessert-cheese-cake-lotus",
        "name": "Cheese Cake Lotus",
        "description": "Lotus Biscuits - Cheese Cake",
        "price": 264.66749999999996,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-cheese-cake-lotus.webp",
        "arabicName": "تشيزكيك لوتس",
        "arabicDescription": "بسكوت لوتس - مع تشيز كيك"
      },
      {
        "id": "dessert-cheese-madness",
        "name": "Cheese Madness",
        "description": "Cheese Cake - Vanilla Ice Cream",
        "price": 264.66749999999996,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-cheese-madness.webp",
        "arabicName": "تشيز مادنس",
        "arabicDescription": "ايس كريم فانيليا مع تشيز كيك"
      },
      {
        "id": "dessert-classic-pancake",
        "name": "CLASSIC PANCAKE",
        "description": "Fluffy homemade pancakes served with maple syrup, fresh fruits & whipped cream.",
        "price": 282.4875,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-classic-pancake.webp",
        "arabicName": "بان كيك كلاسيك",
        "arabicDescription": "بان كيك منزلي هش يُقدم مع شراب القيقب والفواكه الطازجة والكريمة المخفوقة."
      },
      {
        "id": "dessert-nutella-pancake",
        "name": "NUTELLA PANCAKE",
        "description": "Fluffy pancakes topped with Nutella, banana, strawberries & whipped cream.",
        "price": 298.89,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-nutella-pancake.webp",
        "arabicName": "بان كيك نوتيلا",
        "arabicDescription": "بان كيك هش مغطى بالنوتيلا والموز والفراولة والكريمة المخفوقة."
      },
      {
        "id": "dessert-classic-waffle",
        "name": "CLASSIC WAFFLE",
        "description": "Golden crispy waffle served with chocolate sauce, fresh seasonal fruits & whipped cream.",
        "price": 282.4875,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-classic-waffle.webp",
        "arabicName": "وافل كلاسيك",
        "arabicDescription": "وافل ذهبي مقرمش يُقدم مع صوص الشوكولاتة، والفواكه الطازجة الموسمية والكريمة المخفوقة."
      },
      {
        "id": "dessert-nutella-waffle",
        "name": "NUTELLA WAFFLE",
        "description": "Golden crispy waffle topped with Nutella, banana, strawberries & whipped cream.",
        "price": 298.89,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-nutella-waffle.webp",
        "arabicName": "وافل نوتيلا",
        "arabicDescription": "وافل ذهبي مقرمش مغطى بالنوتيلا والموز والفراولة والكريمة المخفوقة."
      },
      {
        "id": "dessert-lotus-waffle",
        "name": "LOTUS WAFFLE",
        "description": "Golden crispy waffle topped with Lotus spread, crushed Lotus biscuits & whipped cream.",
        "price": 309.015,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-lotus-waffle.webp",
        "arabicName": "وافل لوتس",
        "arabicDescription": "وافل ذهبي مقرمش مغطى بكريمة اللوتس وبسكويت اللوتس المجروش والكريمة المخفوقة."
      },
      {
        "id": "dessert-waffle-ice-cream",
        "name": "WAFFLE & ICE CREAM",
        "description": "Golden crispy waffle served with vanilla ice cream, chocolate sauce & fresh fruits.",
        "price": 329.265,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-waffle-ice-cream.webp",
        "arabicName": "وافل مع آيس كريم",
        "arabicDescription": "وافل ذهبي مقرمش يُقدم مع آيس كريم الفانيليا وصوص الشوكولاتة والفواكه الطازجة."
      },
      {
        "id": "dessert-premium-om-ali",
        "name": "PREMIUM OM ALI",
        "description": "Warm traditional Egyptian dessert with flaky pastry, rich milk & cream, raisins, coconut and mixed nuts.",
        "price": 282.4875,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-premium-om-ali.webp",
        "arabicName": "أم علي بريميوم",
        "arabicDescription": "حلوى مصرية تقليدية ساخنة، محضّرة من رقائق العجين المورّقة مع الحليب الغني والقشطة والزبيب وجوز الهند والمكسرات المشكلة"
      },
      {
        "id": "dessert-extras",
        "name": "Extras",
        "description": "Nutella - Lotus Spread - Chocolate Sauce - Honey - Fresh Fruits - Ice Cream Scoop - Whipped Cream",
        "price": 112.3875,
        "priceSource": "final",
        "image": "assets/images/beverages/dessert-extras.webp",
        "arabicName": "الإضافات",
        "arabicDescription": "نوتيلا - كريمة لوتس - صوص شوكولاتة - عسل - فواكه طازجة - سكوب آيس كريم - كريمة مخفوقة"
      }
    ]
  },
  {
    "key": "shisha",
    "label": "Shisha",
    "arabicLabel": "الشيشة",
    "items": [
      {
        "id": "shisha-shisha-maaseel",
        "name": "Shisha Maaseel",
        "description": "",
        "price": 141.75,
        "priceSource": "final",
        "image": "assets/images/beverages/shisha-shisha-maaseel.webp",
        "arabicName": "شيشه معسل",
        "arabicDescription": ""
      },
      {
        "id": "shisha-shisha-flavors",
        "name": "Shisha Flavors",
        "description": "",
        "price": 330.75,
        "priceSource": "final",
        "image": "assets/images/beverages/shisha-shisha-flavors.webp",
        "arabicName": "شيشه فواكهه",
        "arabicDescription": ""
      },
      {
        "id": "shisha-shisha-mix",
        "name": "Shisha Mix",
        "description": "",
        "price": 415.8,
        "priceSource": "final",
        "image": "assets/images/beverages/shisha-shisha-mix.webp",
        "arabicName": "شيشه ميكس",
        "arabicDescription": ""
      }
    ]
  }
];
