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
        "image": null,
        "arabicName": "شاي",
        "arabicDescription": "شاي"
      },
      {
        "id": "hot-beverages-green-tea",
        "name": "Green Tea",
        "description": "Green Tea",
        "price": 57.834,
        "priceSource": "final",
        "image": null,
        "arabicName": "شاي اخضر",
        "arabicDescription": "شاي اخضر"
      },
      {
        "id": "hot-beverages-shadow-green-tea-pot",
        "name": "Shadow Green Tea Pot",
        "description": "",
        "price": 184.46399999999997,
        "priceSource": "final",
        "image": null,
        "arabicName": "براد شاي اخضر شادو",
        "arabicDescription": ""
      },
      {
        "id": "hot-beverages-salep",
        "name": "Salep",
        "description": "Milk - Salep - Nuts",
        "price": 169.53300000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "سحلب",
        "arabicDescription": "لبن - سحلب - مكسرات"
      },
      {
        "id": "hot-beverages-halabessa",
        "name": "Halabessa",
        "description": "Hummus El Sham",
        "price": 169.53300000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "حلبسه",
        "arabicDescription": "حمص الشام"
      },
      {
        "id": "hot-beverages-fenugreek",
        "name": "Fenugreek",
        "description": "",
        "price": 39.6,
        "priceSource": "base",
        "image": null,
        "arabicName": "حلبه",
        "arabicDescription": "حلبه"
      },
      {
        "id": "hot-beverages-fenugreek-with-milk",
        "name": "Fenugreek with Milk",
        "description": "",
        "price": 62.7,
        "priceSource": "base",
        "image": null,
        "arabicName": "حلبه باللبن",
        "arabicDescription": "حلبه باللبن"
      },
      {
        "id": "hot-beverages-turkish-coffee-single",
        "name": "Turkish Coffee (Single)",
        "description": "Turkish Coffee (Single)",
        "price": 97.71300000000001,
        "priceSource": "final",
        "image": null,
        "arabicName": "قهوة تركي",
        "arabicDescription": "قهوة تركي"
      },
      {
        "id": "hot-beverages-turkish-coffee-double",
        "name": "Turkish Coffee (Double)",
        "description": "Turkish Coffee (Double)",
        "price": 118.503,
        "priceSource": "final",
        "image": null,
        "arabicName": "قهوة تركي دوبل",
        "arabicDescription": "قهوة تركي دوبل"
      },
      {
        "id": "hot-beverages-french-coffee",
        "name": "French Coffee",
        "description": "French Coffee",
        "price": 118.503,
        "priceSource": "final",
        "image": null,
        "arabicName": "قهوة فرنساوي",
        "arabicDescription": "قهوة فرنساوي"
      },
      {
        "id": "hot-beverages-espresso-single",
        "name": "Espresso (Single)",
        "description": "Espresso (Single)",
        "price": 97.71300000000001,
        "priceSource": "final",
        "image": null,
        "arabicName": "اسبرسو",
        "arabicDescription": "اسبرسو"
      },
      {
        "id": "hot-beverages-espresso-double",
        "name": "Espresso (Double)",
        "description": "Espresso (Double)",
        "price": 135.513,
        "priceSource": "final",
        "image": null,
        "arabicName": "اسبرسو دوبل",
        "arabicDescription": "اسبرسو دوبل"
      },
      {
        "id": "hot-beverages-macchiato-single",
        "name": "Macchiato (Single)",
        "description": "Macchiato (Single)",
        "price": 118.503,
        "priceSource": "final",
        "image": null,
        "arabicName": "ميكاتو",
        "arabicDescription": "ميكاتو"
      },
      {
        "id": "hot-beverages-macchiato-double",
        "name": "Macchiato (Double)",
        "description": "Macchiato (Double)",
        "price": 152.523,
        "priceSource": "final",
        "image": null,
        "arabicName": "ميكاتو دوبل",
        "arabicDescription": "ميكاتو دوبل"
      },
      {
        "id": "hot-beverages-latte",
        "name": "Latte",
        "description": "Latte",
        "price": 169.53300000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "لاتيه",
        "arabicDescription": "اسبرسو - لبن"
      },
      {
        "id": "hot-beverages-cappuccino",
        "name": "Cappuccino",
        "description": "Cappuccino",
        "price": 152.523,
        "priceSource": "final",
        "image": null,
        "arabicName": "كابتشينو",
        "arabicDescription": "اسبرسو - لبن"
      },
      {
        "id": "hot-beverages-flat-white",
        "name": "Flat White",
        "description": "Flat White",
        "price": 169.53300000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "فلات وايت",
        "arabicDescription": "اسبرسو - لبن"
      },
      {
        "id": "hot-beverages-mochaccino",
        "name": "Mochaccino",
        "description": "Mochaccino",
        "price": 169.53300000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "موكاتشينو",
        "arabicDescription": "اسبرسو - لبن"
      },
      {
        "id": "hot-beverages-american-coffee",
        "name": "American Coffee",
        "description": "American Coffee",
        "price": 130.41,
        "priceSource": "final",
        "image": null,
        "arabicName": "امريكان كوفي",
        "arabicDescription": "اسبرسو"
      },
      {
        "id": "hot-beverages-nescafe",
        "name": "Nescafe",
        "description": "Nescafe",
        "price": 130.41,
        "priceSource": "final",
        "image": null,
        "arabicName": "نسكافيه",
        "arabicDescription": "نسكافيه"
      },
      {
        "id": "hot-beverages-hot-chocolate",
        "name": "Hot Chocolate",
        "description": "Hot Chocolate",
        "price": 130.41,
        "priceSource": "final",
        "image": null,
        "arabicName": "هوت شوكليت",
        "arabicDescription": "شوكليت - لبن"
      },
      {
        "id": "hot-beverages-hot-chocolate-flavors",
        "name": "Hot Chocolate Flavors",
        "description": "Hot Chocolate Flavors",
        "price": 146.664,
        "priceSource": "final",
        "image": null,
        "arabicName": "هوت شوكليت نكهات",
        "arabicDescription": "شوكليت - لبن - نكهتك المفضلة"
      },
      {
        "id": "hot-beverages-anti-flu",
        "name": "Anti-Flu",
        "description": "Orange – Cinnamon – Anise",
        "price": 130.41,
        "priceSource": "final",
        "image": null,
        "arabicName": "انتي - فلو",
        "arabicDescription": "عصير برتقال - قرفة - ينسون"
      },
      {
        "id": "hot-beverages-hot-cider",
        "name": "Hot Cider",
        "description": "Apple Juice – Cinnamon – Clove",
        "price": 130.41,
        "priceSource": "final",
        "image": null,
        "arabicName": "هوت سيدر",
        "arabicDescription": "عصير تفاح - قرفة - قرنفل"
      },
      {
        "id": "hot-beverages-hot-platter",
        "name": "Hot Platter",
        "description": "Chocolate - Peanut Butter - Caramel - Milk",
        "price": 69,
        "priceSource": "base",
        "image": null,
        "arabicName": "هوت بلاتر",
        "arabicDescription": "شوكليت - زبدة الفول السوداني - كراميل - لبن"
      },
      {
        "id": "hot-beverages-hot-peanuts",
        "name": "Hot Peanuts",
        "description": "Peanut Butter - Milk",
        "price": 77.6,
        "priceSource": "base",
        "image": null,
        "arabicName": "هوت بيانتس",
        "arabicDescription": "زبدة الفول السوداني - لبن"
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
        "image": null,
        "arabicName": "كوكاكولا",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-coca-cola-zero",
        "name": "Coca Cola Zero",
        "description": "",
        "price": 87.156,
        "priceSource": "final",
        "image": null,
        "arabicName": "كوكاكولا زيرو",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-sprite",
        "name": "Sprite",
        "description": "",
        "price": 87.156,
        "priceSource": "final",
        "image": null,
        "arabicName": "اسبرايت",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-fanta",
        "name": "Fanta",
        "description": "",
        "price": 87.156,
        "priceSource": "final",
        "image": null,
        "arabicName": "فانتا",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-schweppes",
        "name": "Schweppes",
        "description": "",
        "price": 87.156,
        "priceSource": "final",
        "image": null,
        "arabicName": "شويبس",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-small-water",
        "name": "Small Water",
        "description": "",
        "price": 41.796,
        "priceSource": "final",
        "image": null,
        "arabicName": "مياه صغيرة",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-medium-water-500-ml",
        "name": "Medium Water (500 Ml)",
        "description": "Puvana Water Glass Bottle (500 Ml)",
        "price": 151.2,
        "priceSource": "final",
        "image": null,
        "arabicName": "مياه كبيرة",
        "arabicDescription": ""
      },
      {
        "id": "soft-drinks-large-water-1-l",
        "name": "Large Water (1 L)",
        "description": "Puvana Water Glass Bottle (1 L)",
        "price": 187.10999999999999,
        "priceSource": "final",
        "image": null,
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
        "image": null,
        "arabicName": "موز باللبن",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-guava",
        "name": "Guava",
        "description": "Fresh  Juice",
        "price": 135.0675,
        "priceSource": "final",
        "image": null,
        "arabicName": "جوافة",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-guava-mint",
        "name": "Guava Mint",
        "description": "Fresh  Juice",
        "price": 140.94,
        "priceSource": "final",
        "image": null,
        "arabicName": "جوافة بالنعناع",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-kiwi",
        "name": "Kiwi",
        "description": "Fresh  Juice",
        "price": 151.902,
        "priceSource": "final",
        "image": null,
        "arabicName": "كيوي",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-lemon",
        "name": "Lemon",
        "description": "Fresh  Juice",
        "price": 135.0675,
        "priceSource": "final",
        "image": null,
        "arabicName": "ليمون",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-lemon-milk",
        "name": "Lemon Milk",
        "description": "Fresh  Juice",
        "price": 147.987,
        "priceSource": "final",
        "image": null,
        "arabicName": "ليمون باللبن",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-lemon-mint",
        "name": "Lemon Mint",
        "description": "Fresh  Juice",
        "price": 140.94,
        "priceSource": "final",
        "image": null,
        "arabicName": "ليمون بالنعناع",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-mango",
        "name": "Mango",
        "description": "Fresh  Juice",
        "price": 151.902,
        "priceSource": "final",
        "image": null,
        "arabicName": "مانجو",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-orange",
        "name": "Orange",
        "description": "Fresh  Juice",
        "price": 147.987,
        "priceSource": "final",
        "image": null,
        "arabicName": "برتقال",
        "arabicDescription": "عصير فريش"
      },
      {
        "id": "fresh-juice-strawberry",
        "name": "Strawberry",
        "description": "Fresh  Juice",
        "price": 151.902,
        "priceSource": "final",
        "image": null,
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
        "image": null,
        "arabicName": "كريزي مانجو",
        "arabicDescription": "مانجو - جوز هند - ايس كريم فانيليا"
      },
      {
        "id": "cocktails-florida",
        "name": "Florida",
        "description": "Mango – Strawberry – Guava",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "فلوريدا",
        "arabicDescription": "مانجو - فراولة - جوافة"
      },
      {
        "id": "cocktails-happy-cocktail",
        "name": "Happy Cocktail",
        "description": "Mango – Kiwi – Vanilla – Milk",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "هابي كوكتيل",
        "arabicDescription": "مانجو - كيوي - فانيليا - لبن"
      },
      {
        "id": "cocktails-hawaii",
        "name": "Hawaii",
        "description": "Mango – Peach – Banana – Pineapple",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "هااواي",
        "arabicDescription": "مانجو - خوخ - موز - اناناس"
      },
      {
        "id": "cocktails-kiwi-apple-mint",
        "name": "Kiwi Apple Mint",
        "description": "Kiwi – Apple – Lemon – Peach",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "كيوي ابل منت",
        "arabicDescription": "كيوي - تفاح - ليمون - خوخ"
      },
      {
        "id": "cocktails-lemobana",
        "name": "Lemobana",
        "description": "Lemon – Pineapple – Orange",
        "price": 200.25224999999998,
        "priceSource": "final",
        "image": null,
        "arabicName": "ليموبانا",
        "arabicDescription": "ليمون - اناناس - برتقال"
      },
      {
        "id": "cocktails-mangobana",
        "name": "Mangobana",
        "description": "Mango – Vanilla Ice Cream – Cinnamon – Vanilla",
        "price": 200.25224999999998,
        "priceSource": "final",
        "image": null,
        "arabicName": "مانجوبانا",
        "arabicDescription": "مانجو - ايس كريم فانيليا - قرفة - فانيليا"
      },
      {
        "id": "cocktails-mangomint",
        "name": "Mangomint",
        "description": "Mango – Banana – Peach – Pineapple – Mint",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "مانجو مينت",
        "arabicDescription": "مانجو - موز - خوخ - اناناس - نعناع"
      },
      {
        "id": "cocktails-pina-colada",
        "name": "Pina Colada",
        "description": "Pineapple – Coconut – Lemon",
        "price": 182.43900000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "بيناكولادا",
        "arabicDescription": "اناناس - جوز هند - ليمون"
      },
      {
        "id": "cocktails-shadow-cocktail",
        "name": "Shadow Cocktail",
        "description": "Mango - Strawberry - Milk - Banana - Vanilla Ice Cream",
        "price": 118.7,
        "priceSource": "base",
        "image": null,
        "arabicName": "شادو",
        "arabicDescription": "مانجو - فراولة - لبن - موز - ايس كريم فانيليا"
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
        "image": null,
        "arabicName": "جوافة",
        "arabicDescription": "جوافة - ثلج"
      },
      {
        "id": "granita-lemon-mint-smoothie",
        "name": "Lemon Mint Smoothie",
        "description": "Lemon – Mint – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "ليمون بالنعناع",
        "arabicDescription": "ليمون نعناع - ثلج"
      },
      {
        "id": "granita-lemon-smoothie",
        "name": "Lemon Smoothie",
        "description": "Lemon – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "ليمون",
        "arabicDescription": "ليمون - ثلج"
      },
      {
        "id": "granita-pineapple-smoothie",
        "name": "Pineapple Smoothie",
        "description": "Pineapple – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "اناناس",
        "arabicDescription": "اناناس - ثلج"
      },
      {
        "id": "granita-blueberry-smoothie",
        "name": "Blueberry Smoothie",
        "description": "Blueberry – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "بلوبيري",
        "arabicDescription": "بلوبيري - ثلج"
      },
      {
        "id": "granita-kiwi-smoothie",
        "name": "Kiwi Smoothie",
        "description": "Kiwi – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "كيوي",
        "arabicDescription": "كيوي -ثلج"
      },
      {
        "id": "granita-mango-smoothie",
        "name": "Mango Smoothie",
        "description": "Mango – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "مانجو",
        "arabicDescription": "مانجو - ثلج"
      },
      {
        "id": "granita-mixed-berries-smoothie",
        "name": "Mixed Berries Smoothie",
        "description": "Mixed Berries – Ice",
        "price": 207.15749999999997,
        "priceSource": "final",
        "image": null,
        "arabicName": "ميكس بيري",
        "arabicDescription": "ميكس بيري - ثلج"
      },
      {
        "id": "granita-raspberry-smoothie",
        "name": "Raspberry Smoothie",
        "description": "Raspberry – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "راسبيري",
        "arabicDescription": "راسبيري - ثلج"
      },
      {
        "id": "granita-strawberry-smoothie",
        "name": "Strawberry Smoothie",
        "description": "Strawberry – Ice",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "فراولة",
        "arabicDescription": "فراولة - ثلج"
      },
      {
        "id": "granita-banana-dragon-smoothie",
        "name": "Banana Dragon Smoothie",
        "description": "Banana – Strawberry – Coconut – Ice",
        "price": 199.66499999999996,
        "priceSource": "final",
        "image": null,
        "arabicName": "بانانا دراجون",
        "arabicDescription": "موز - فراولة - جوزهند - ثلج"
      },
      {
        "id": "granita-mixed-fruits-smoothie",
        "name": "Mixed Fruits Smoothie",
        "description": "Guava – Strawberry – Mango – Ice",
        "price": 199.66499999999996,
        "priceSource": "final",
        "image": null,
        "arabicName": "ميكس فروتس",
        "arabicDescription": "جوافة - فراولة - مانجو - ثلج"
      },
      {
        "id": "granita-shadow-granita",
        "name": "Shadow Granita",
        "description": "Cola - Canned Cola - Cherry - Ice",
        "price": 111.4,
        "priceSource": "base",
        "image": null,
        "arabicName": "شادو",
        "arabicDescription": "كولا - كانز كولا - كريز - ثلج"
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
        "image": null,
        "arabicName": "موخيتو",
        "arabicDescription": "موخيتو فليفر - ليمون - نعناع - سفن اب"
      },
      {
        "id": "soda-scotch-mint-soda",
        "name": "Scotch Mint Soda",
        "description": "Mint Flavor – Lemon – Mint – 7Up",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "اسكوتش منت",
        "arabicDescription": "فتراك نعناع - ليمون - نعناع - سفن اب"
      },
      {
        "id": "soda-sun-shine-soda",
        "name": "Sun Shine Soda",
        "description": "Garden – Lemon – 7Up",
        "price": 188.73000000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "صن شاين",
        "arabicDescription": "فتراك رمان - ليمون - سفن اب"
      },
      {
        "id": "soda-american-soda",
        "name": "American Soda",
        "description": "Espresso – Red Bull",
        "price": 217.08,
        "priceSource": "final",
        "image": null,
        "arabicName": "امريكان صودا",
        "arabicDescription": "اسبرسو - ريد بول"
      },
      {
        "id": "soda-orange-soda",
        "name": "Orange Soda",
        "description": "Cherry – Orange – 7Up",
        "price": 217.08,
        "priceSource": "final",
        "image": null,
        "arabicName": "اورانج",
        "arabicDescription": "كريز فليفر - عصير برتقال - سفن اب"
      },
      {
        "id": "soda-apple-breeze-soda",
        "name": "Apple Breeze Soda",
        "description": "Apple – Mint – Sprite – 7Up",
        "price": 217.08,
        "priceSource": "final",
        "image": null,
        "arabicName": "ابل بريز",
        "arabicDescription": "تفاح - فتراك نعناع - سفن اب"
      },
      {
        "id": "soda-blue-orange-soda",
        "name": "Blue Orange Soda",
        "description": "Blue Curacao – Orange – 7Up",
        "price": 238.3425,
        "priceSource": "final",
        "image": null,
        "arabicName": "بلو اورانج",
        "arabicDescription": "بلوكرواسوا - برتقال - سفن اب"
      },
      {
        "id": "soda-grape-kiwi-soda",
        "name": "Grape Kiwi Soda",
        "description": "Grape – Kiwi – Kiwi Flavor – 7Up",
        "price": 238.3425,
        "priceSource": "final",
        "image": null,
        "arabicName": "جريب كيوي",
        "arabicDescription": "عنب احمر - كيوي - كيوي فلفر - سفن اب"
      },
      {
        "id": "soda-birell",
        "name": "Birell",
        "description": "Birell",
        "price": 201.4875,
        "priceSource": "final",
        "image": null,
        "arabicName": "بريل",
        "arabicDescription": "بريل"
      },
      {
        "id": "soda-red-bull",
        "name": "Red Bull",
        "description": "Red Bull",
        "price": 217.88999999999996,
        "priceSource": "final",
        "image": null,
        "arabicName": "ريدبول",
        "arabicDescription": ""
      },
      {
        "id": "soda-94-red-bull-fusion-soda",
        "name": "94. Red Bull Fusion Soda",
        "description": "Pineapple – Orange – Red Bull",
        "price": 279.045,
        "priceSource": "final",
        "image": null,
        "arabicName": "ريدبول فيوجن",
        "arabicDescription": "اناناس - برتقال - ريدبول"
      },
      {
        "id": "soda-redbull-mojito",
        "name": "RedBull Mojito",
        "description": "Lemon - Mint - Redbull",
        "price": 279.045,
        "priceSource": "final",
        "image": null,
        "arabicName": "ريدبول موخيتو",
        "arabicDescription": "ليمون - نعناع - ريد بول"
      },
      {
        "id": "soda-redbull-strawberry-soda",
        "name": "RedBull Strawberry Soda",
        "description": "Strawberry -  Redbull",
        "price": 279.045,
        "priceSource": "final",
        "image": null,
        "arabicName": "ريدبول فراولة",
        "arabicDescription": "فراولة - ريدبول"
      },
      {
        "id": "soda-redbull-cherry",
        "name": "RedBull Cherry",
        "description": "Cherry - Redbull",
        "price": 279.045,
        "priceSource": "final",
        "image": null,
        "arabicName": "ريدبول شيري",
        "arabicDescription": "كريز فليفر - ريدبول"
      },
      {
        "id": "soda-small-sparkling-water",
        "name": "Small Sparkling Water",
        "description": "Puvana Light Sparkling Water ( 240M )",
        "price": 157.95,
        "priceSource": "final",
        "image": null,
        "arabicName": "مياه فوارة صغيره",
        "arabicDescription": "مياه فوارة"
      },
      {
        "id": "soda-large-sparkling-water",
        "name": "Large Sparkling Water",
        "description": "Puvana Medium Sparkling Water ( 500M )",
        "price": 213.83999999999997,
        "priceSource": "final",
        "image": null,
        "arabicName": "مياه فوارة كبيره",
        "arabicDescription": "مياه فوارة"
      },
      {
        "id": "soda-shadow-soda",
        "name": "Shadow Soda",
        "description": "Pineapple - Blue Curacao - 7Up",
        "price": 279.045,
        "priceSource": "final",
        "image": null,
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
        "image": null,
        "arabicName": "افومانجو",
        "arabicDescription": "افوكادو - مانجو"
      },
      {
        "id": "healthy-nuclear-hulk",
        "name": "Nuclear Hulk",
        "description": "Avocado - Banana - Kiwi - Milk",
        "price": 195.0075,
        "priceSource": "final",
        "image": null,
        "arabicName": "نيوكلير هالك",
        "arabicDescription": "افوكادو - موز - كيوي - لبن"
      },
      {
        "id": "healthy-orange-carrots",
        "name": "Orange Carrots",
        "description": "Orange - Carrots",
        "price": 195.0075,
        "priceSource": "final",
        "image": null,
        "arabicName": "اورانج كاروتس",
        "arabicDescription": "عصير برتقال - جزر"
      },
      {
        "id": "healthy-strawberry-rocca",
        "name": "Strawberry Rocca",
        "description": "Strwaberry - Rocca",
        "price": 195.0075,
        "priceSource": "final",
        "image": null,
        "arabicName": "استروبري روكا",
        "arabicDescription": "فراولة - ورق جرجير"
      },
      {
        "id": "healthy-power-cocktail",
        "name": "Power Cocktail",
        "description": "Rocca - Avocado - Banana - Vanilla Ice Cream - Milk",
        "price": 228.42,
        "priceSource": "final",
        "image": null,
        "arabicName": "باور كوكتيل",
        "arabicDescription": "جرجير - افوكادو - موز - ايس كريم فانيليا - لبن"
      },
      {
        "id": "healthy-tropicana",
        "name": "Tropicana",
        "description": "Carrots - Kiwi - Orange - Honey",
        "price": 228.42,
        "priceSource": "final",
        "image": null,
        "arabicName": "تروبيكانا",
        "arabicDescription": "جزر - كيوي - برتقال - عسل ابيض"
      },
      {
        "id": "healthy-shadow-healthy",
        "name": "Shadow Healthy",
        "description": "Avocado - Kiwi - Rocca - Banana - Honey",
        "price": 242.59499999999997,
        "priceSource": "final",
        "image": null,
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
        "image": null,
        "arabicName": "ميلك تشيك مانجو",
        "arabicDescription": "ايس كريم فانيليا - مانجو"
      },
      {
        "id": "shakes-banana-milk-shake",
        "name": "Banana Milk shake",
        "description": "Banana - Milk - Vanilla Ice Cream",
        "price": 228.42,
        "priceSource": "final",
        "image": null,
        "arabicName": "ميلك تشيك موز",
        "arabicDescription": "ايس كريم فانيليا - موز - لبن"
      },
      {
        "id": "shakes-blueberry-milk-shake",
        "name": "Blueberry Milk shake",
        "description": "Blueberry - Vanilla Ice Cream",
        "price": 228.42,
        "priceSource": "final",
        "image": null,
        "arabicName": "ميلك تشيك بلوبيري",
        "arabicDescription": "ايس كريم فانيليا - بلوبيري"
      },
      {
        "id": "shakes-oreo-milk-shake",
        "name": "Oreo Milk shake",
        "description": "Oreo - Chocolate - Milk - Vanilla ice Cream",
        "price": 228.42,
        "priceSource": "final",
        "image": null,
        "arabicName": "ميلك تشيك اوريو",
        "arabicDescription": "ايس كريم فانيليا - شوكلت - اوريو - لبن"
      },
      {
        "id": "shakes-cheese-cake-milk-shake",
        "name": "Cheese Cake Milk shake",
        "description": "Cheese Cake With Flavor - Vanilla Ice Cream",
        "price": 298.6875,
        "priceSource": "final",
        "image": null,
        "arabicName": "ميلك تشيك تشيز كيك",
        "arabicDescription": "ايس كريم فانيليا - تشيز كيك مع فليفر من اختيارك"
      },
      {
        "id": "shakes-shadow-milkshake",
        "name": "Shadow Milkshake",
        "description": "Vanilla Ice Cream - KitKat - Marshmallow",
        "price": 127.7,
        "priceSource": "base",
        "image": null,
        "arabicName": "ميلك تشيك شادو",
        "arabicDescription": "ايس كريم فانيليا - كيت كات - مارشيملو"
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
        "image": null,
        "arabicName": "فرابتشينو",
        "arabicDescription": "فرابيه - اسبرسو - لبن"
      },
      {
        "id": "frappe-frappe-flavours",
        "name": "Frappe Flavours",
        "description": "Frappe - Milk - Your Choice of Flavors",
        "price": 199.26000000000002,
        "priceSource": "final",
        "image": null,
        "arabicName": "فرابيه نكهات",
        "arabicDescription": "فرابيه - لبن - فليفر من اختيارك"
      },
      {
        "id": "frappe-frappe-chocolate",
        "name": "Frappe Chocolate",
        "description": "Chocolate Frappe - Milk",
        "price": 199.8675,
        "priceSource": "final",
        "image": null,
        "arabicName": "شوكلت فرابيه",
        "arabicDescription": "فرابيه شوكليت - لبن"
      },
      {
        "id": "frappe-frappe-mocha-nuts",
        "name": "Frappe Mocha Nuts",
        "description": "Frappe - Peanut Butter -Caramel - Milk",
        "price": 199.8675,
        "priceSource": "final",
        "image": null,
        "arabicName": "موكا نتس فرابيه",
        "arabicDescription": "فرابيه - زبدة فول سوداني - كراميل - لبن"
      },
      {
        "id": "frappe-frappuccino-mocha",
        "name": "Frappuccino Mocha",
        "description": "Chocolate Frappe - Espresso - Milk",
        "price": 199.8675,
        "priceSource": "final",
        "image": null,
        "arabicName": "فرابتشينو موكا",
        "arabicDescription": "فرابيه شوكليت - اسبرسو - لبن"
      },
      {
        "id": "frappe-shadow-frappe",
        "name": "Shadow Frappe",
        "description": "Frappe - Peanut Butter - Caramel - Digestive Biscuit - Milk",
        "price": 112.7,
        "priceSource": "base",
        "image": null,
        "arabicName": "شادو فرابيه",
        "arabicDescription": "فرابيه - زبدة فول سوداني - كراميل -بسكوت دايجيستيف-  لبن"
      },
      {
        "id": "frappe-ice-latte",
        "name": "ice Latte",
        "description": "Espresso - Milk - Ice",
        "price": 167.265,
        "priceSource": "final",
        "image": null,
        "arabicName": "ايس لاتيه",
        "arabicDescription": "اسبرسو - لبن - ثلج"
      },
      {
        "id": "frappe-ice-mocha",
        "name": "ice Mocha",
        "description": "Espresso - Chocolate - Milk - Ice",
        "price": 194.805,
        "priceSource": "final",
        "image": null,
        "arabicName": "ايس موكا",
        "arabicDescription": "اسبرسو - شوكليت - لبن - ثلج"
      },
      {
        "id": "frappe-ice-tea",
        "name": "ice Tea",
        "description": "Red tea - Ice",
        "price": 163.0125,
        "priceSource": "final",
        "image": null,
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
        "image": null,
        "arabicName": "براونيز",
        "arabicDescription": "كيك البراونيز مع ايس كريم"
      },
      {
        "id": "dessert-cheese-cake",
        "name": "Cheese Cake",
        "description": "Cheese Cake With your Choice Of Flavor",
        "price": 257.175,
        "priceSource": "final",
        "image": null,
        "arabicName": "تشيز كيك",
        "arabicDescription": "تشيز كيك مع صوص من اختيارك"
      },
      {
        "id": "dessert-molten-ice-cream",
        "name": "Molten Ice Cream",
        "description": "Molten Cake With Ice Cream",
        "price": 257.175,
        "priceSource": "final",
        "image": null,
        "arabicName": "مولتن كيك",
        "arabicDescription": "مولتن كيك مع ايس كريم"
      },
      {
        "id": "dessert-oreo-madness",
        "name": "Oreo Madness",
        "description": "Oreo - Vanilla Ice Cream",
        "price": 257.175,
        "priceSource": "final",
        "image": null,
        "arabicName": "اوريو مادنس",
        "arabicDescription": "اوريو - ايس كريم فانيليا"
      },
      {
        "id": "dessert-chocolate-cake",
        "name": "Chocolate Cake",
        "description": "Chocolate Cake",
        "price": 257.175,
        "priceSource": "final",
        "image": null,
        "arabicName": "شوكلت كيك",
        "arabicDescription": "شوكليت كيك"
      },
      {
        "id": "dessert-ice-cream-3-scoops",
        "name": "Ice Cream 3 Scoops",
        "description": "Ice Cream 3 Scoops of Your Choice",
        "price": 257.175,
        "priceSource": "final",
        "image": null,
        "arabicName": "ايس كريم",
        "arabicDescription": "3 بولات من اختيارك"
      },
      {
        "id": "dessert-banana-split",
        "name": "Banana Split",
        "description": "Banana - Vanilla ice Cream",
        "price": 257.175,
        "priceSource": "final",
        "image": null,
        "arabicName": "بانانا سبليت",
        "arabicDescription": "موز- ايس كريم فانيليا"
      },
      {
        "id": "dessert-cheese-cake-lotus",
        "name": "Cheese Cake Lotus",
        "description": "Lotus Biscuits - Cheese Cake",
        "price": 264.66749999999996,
        "priceSource": "final",
        "image": null,
        "arabicName": "تشيزكيك لوتس",
        "arabicDescription": "بسكوت لوتس - مع تشيز كيك"
      },
      {
        "id": "dessert-cheese-madness",
        "name": "Cheese Madness",
        "description": "Cheese Cake - Vanilla Ice Cream",
        "price": 264.66749999999996,
        "priceSource": "final",
        "image": null,
        "arabicName": "تشيز مادنس",
        "arabicDescription": "ايس كريم فانيليا مع تشيز كيك"
      },
      {
        "id": "dessert-classic-pancake",
        "name": "CLASSIC PANCAKE",
        "description": "Fluffy homemade pancakes served with maple syrup, fresh fruits & whipped cream.",
        "price": 282.4875,
        "priceSource": "final",
        "image": null,
        "arabicName": "بان كيك كلاسيك",
        "arabicDescription": "بان كيك منزلي هش يُقدم مع شراب القيقب والفواكه الطازجة والكريمة المخفوقة."
      },
      {
        "id": "dessert-nutella-pancake",
        "name": "NUTELLA PANCAKE",
        "description": "Fluffy pancakes topped with Nutella, banana, strawberries & whipped cream.",
        "price": 298.89,
        "priceSource": "final",
        "image": null,
        "arabicName": "بان كيك نوتيلا",
        "arabicDescription": "بان كيك هش مغطى بالنوتيلا والموز والفراولة والكريمة المخفوقة."
      },
      {
        "id": "dessert-classic-waffle",
        "name": "CLASSIC WAFFLE",
        "description": "Golden crispy waffle served with chocolate sauce, fresh seasonal fruits & whipped cream.",
        "price": 282.4875,
        "priceSource": "final",
        "image": null,
        "arabicName": "وافل كلاسيك",
        "arabicDescription": "وافل ذهبي مقرمش يُقدم مع صوص الشوكولاتة، والفواكه الطازجة الموسمية والكريمة المخفوقة."
      },
      {
        "id": "dessert-nutella-waffle",
        "name": "NUTELLA WAFFLE",
        "description": "Golden crispy waffle topped with Nutella, banana, strawberries & whipped cream.",
        "price": 298.89,
        "priceSource": "final",
        "image": null,
        "arabicName": "وافل نوتيلا",
        "arabicDescription": "وافل ذهبي مقرمش مغطى بالنوتيلا والموز والفراولة والكريمة المخفوقة."
      },
      {
        "id": "dessert-lotus-waffle",
        "name": "LOTUS WAFFLE",
        "description": "Golden crispy waffle topped with Lotus spread, crushed Lotus biscuits & whipped cream.",
        "price": 309.015,
        "priceSource": "final",
        "image": null,
        "arabicName": "وافل لوتس",
        "arabicDescription": "وافل ذهبي مقرمش مغطى بكريمة اللوتس وبسكويت اللوتس المجروش والكريمة المخفوقة."
      },
      {
        "id": "dessert-waffle-ice-cream",
        "name": "WAFFLE & ICE CREAM",
        "description": "Golden crispy waffle served with vanilla ice cream, chocolate sauce & fresh fruits.",
        "price": 329.265,
        "priceSource": "final",
        "image": null,
        "arabicName": "وافل مع آيس كريم",
        "arabicDescription": "وافل ذهبي مقرمش يُقدم مع آيس كريم الفانيليا وصوص الشوكولاتة والفواكه الطازجة."
      },
      {
        "id": "dessert-premium-om-ali",
        "name": "PREMIUM OM ALI",
        "description": "Warm traditional Egyptian dessert with flaky pastry, rich milk & cream, raisins, coconut and mixed nuts.",
        "price": 282.4875,
        "priceSource": "final",
        "image": null,
        "arabicName": "أم علي بريميوم",
        "arabicDescription": "حلوى مصرية تقليدية ساخنة، محضّرة من رقائق العجين المورّقة مع الحليب الغني والقشطة والزبيب وجوز الهند والمكسرات المشكلة"
      },
      {
        "id": "dessert-extras",
        "name": "Extras",
        "description": "Nutella - Lotus Spread - Chocolate Sauce - Honey - Fresh Fruits - Ice Cream Scoop - Whipped Cream",
        "price": 112.3875,
        "priceSource": "final",
        "image": null,
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
        "image": null,
        "arabicName": "شيشه معسل",
        "arabicDescription": ""
      },
      {
        "id": "shisha-shisha-flavors",
        "name": "Shisha Flavors",
        "description": "",
        "price": 330.75,
        "priceSource": "final",
        "image": null,
        "arabicName": "شيشه فواكهه",
        "arabicDescription": ""
      },
      {
        "id": "shisha-shisha-mix",
        "name": "Shisha Mix",
        "description": "",
        "price": 415.8,
        "priceSource": "final",
        "image": null,
        "arabicName": "شيشه ميكس",
        "arabicDescription": ""
      }
    ]
  }
];
