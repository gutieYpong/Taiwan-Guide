import {
  AnnualIcon,
  BicycleIcon,
  CelebrationIcon,
  IceCreamIcon,
  MealIcon,
  OutdoorIcon,
  SnackIcon,
  SouvenirIcon,
  NorthIcon,
  CentralIcon,
  SouthIcon,
  EastIcon,

  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,

  Explore1,
  Explore2,
  Explore3,
  Explore4,
  Explore5,
  Explore6,
  Explore7,

  ParticipateDefault,
  Participate1,
  Participate2,
  Participate3,
  Participate4,

  Enjoy1,
  Enjoy2,
  Enjoy3,
  Enjoy4,
  Enjoy5,
  Enjoy6,
  Enjoy7,

  MissingSpotImg,
  MissingRestaurantImg,
  MissingActivityImg,
} from "../assets";

export const ATTRACTION_MENU_ITEM_LIST = [
  {
    zone_desc: "北台灣",
    icon_src: NorthIcon,
    city_name_ch: ["台北市", "新北市", "基隆市", "桃園市", "新竹市", "新竹縣", "宜蘭縣"],
    city_name_eng: ["Taipei", "NewTaipei", "Keelung", "Taoyuan", "Hsinchu", "HsinchuCounty", "YilanCounty"],
    align_style: "flex-end right"
  },
  {
    zone_desc: "中台灣",
    icon_src: CentralIcon,
    city_name_ch: ["台中市", "苗栗縣", "彰化縣", "南投縣", "雲林縣"],
    city_name_eng: ["Taichung", "MiaoliCounty", "ChanghuaCounty", "NantouCounty", "YunlinCounty"],
    align_style: "flex-end left"
  },
  {
    zone_desc: "南台灣",
    icon_src: SouthIcon,
    city_name_ch: ["高雄市", "台南市", "嘉義市", "嘉義縣", "屏東縣", "澎湖縣"],
    city_name_eng: ["Kaohsiung", "Tainan", "Chiayi", "ChiayiCounty", "PingtungCounty", "PenghuCounty"],
    align_style: "flex-start right"
  },
  {
    zone_desc: "東台灣",
    icon_src: EastIcon,
    city_name_ch: ["花蓮縣", "台東縣"],
    city_name_eng: ["HualienCounty", "TaitungCounty"],
    align_style: "flex-start left"
  },
];

export const DELICACY_MENU_ITEM_LIST = [
  {
    icon_src: MealIcon,
    icon_desc: "飽餐一頓",
  },
  {
    icon_src: IceCreamIcon,
    icon_desc: "甜食冰品",
  },
  {
    icon_src: SnackIcon,
    icon_desc: "在地美味",
  },
  {
    icon_src: SouvenirIcon,
    icon_desc: "特色伴手禮",
  }
];

export const ACTIVITY_MENU_ITEM_LIST = [
  {
    icon_src: AnnualIcon,
    icon_desc: "年度活動",
  },
  {
    icon_src: BicycleIcon,
    icon_desc: "單車之旅",
  },
  {
    icon_src: OutdoorIcon,
    icon_desc: "親近山海",
  },
  {
    icon_src: CelebrationIcon,
    icon_desc: "節日慶典",
  },
];

export const BANNER_IMAGES = [Banner1, Banner2, Banner3, Banner4, Banner5];

export const EXPLORE_LIST = [
  {
    img_src: Explore1,
    img_name: '台東金剛大道',
  },
  {
    img_src: Explore2,
    img_name: '南投日月潭文武廟',
  },
  {
    img_src: Explore3,
    img_name: 'NULL',
  },
  {
    img_src: Explore4,
    img_name: '南投合歡山',
  },
  {
    img_src: Explore5,
    img_name: '北投圖書館',
  },
  {
    img_src: Explore6,
    img_name: '樹林青龍嶺步道',
  },
  {
    img_src: Explore7,
    img_name: '水里車埕車站',
  }
];

export const PARTICIPATE_IMAGES = [ParticipateDefault, Participate1, Participate2, Participate3, Participate4];

export const ENJOY_LIST = [
  {
    img_src: Enjoy1,
    img_name: '祥發海產餐廳',
    img_desc: '位面對東石舊漁港，堤防外有一長排竹蚵屋，是每日青蚵嫂集體剖蚵的好所在，所以在祥發用餐，不但可以品嚐美味，還可以欣賞當地人文風景及剝蚵的光景。'
  },
  {
    img_src: Enjoy2,
    img_name: '石碇一粒粽',
    img_desc: '粽子主打不油膩、吃了不脹氣，且選用最優質的材料，其中又以桂花粽最為特別，將整朵桂花加入粽子做調味，品嘗粽子的同時也能嚐到桂花香。'
  },
  {
    img_src: Enjoy3,
    img_name: '鄭記香腸',
    img_desc: '位於小琉球的老街上，最古早的鄭記琉球香腸老店創立於民國43年，已成為小琉球當地的名產之一。'
  },
  {
    img_src: Enjoy4,
    img_name: '兩支北方麵食館',
    img_desc: '專營北方麵食點心，從各式蒸餃、牛肉麵、酸辣麵等風味佳餚，堅持道地美味的執著，從醒麵、桿皮、包餡到成品，每一個環節都是對客戶的尊重與責任。'
  },
  {
    img_src: Enjoy5,
    img_name: '阿妃健康廚房',
    img_desc: '每顆水餃從肉餡、使用豐富的蔬菜、調味料的比例、水餃皮的手感與功夫，層層步驟讓水餃能兼具口感與高纖維，也讓營養價值更高。'
  },
  {
    img_src: Enjoy6,
    img_name: '鶴岡紅茶舖',
    img_desc: '店內販售花蓮瑞穗有機生態農場所種植的有機茶，坐下品嚐一杯香甜回甘的好茶，可以讓人暫時放掉煩惱，享受純淨的片刻。'
  },
  {
    img_src: Enjoy7,
    img_name: '三家村陽春麵',
    img_desc: '餐點上桌前，將佐料瑤舀進碗內，再加入一大早熬製的大骨高湯，最後放進麵條，保持麵體彈性口感不軟爛。'
  },
];

export const CITY_LIST = ['台北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '宜蘭縣', '台中市', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '高雄市', '台南市', '嘉義市', '嘉義縣', '屏東縣', '澎湖縣', '花蓮縣', '台東縣', '台北市', '新北市', '桃園市', '基隆市', '新竹市', '台中市'];

/**
 * ... Filters ...
 */
export const CATE_SELECTOR_MAP = { scenicSpot: 0, delicacy: 1, activity: 2 };
export const DATA_FILTER_OBJECT = {
  scenicSpot: {
    api_category: 'ScenicSpot',
    missing_img: MissingSpotImg,
    params: {
      id: 'ScenicSpotID',
      name: 'ScenicSpotName'
    },
    service: [
      {
        title: '停車場',
        filter_indicator: 'ParkingInfo'
      },
      {
        title: '購票資訊',
        filter_indicator: 'TicketInfo'
      }
    ],
    theme: [
      {
        title: '自然風景',
        filter: ['自然風景類', '生態類', '遊憩類', '體育健身類', '國家風景區類', '都會公園類', '林場類', '國家公園類', '森林遊樂區類', '其他'],
      },
      {
        title: '觀光工廠',
        filter: ['觀光工廠類', '休閒農業類', '小吃/特產類'],
      },
      {
        title: '文化古蹟',
        filter: ['文化類', '廟宇類', '古蹟類', '藝術類'],
      },
      {
        title: '溫泉風呂',
        filter: ['溫泉類'],
      }
    ]
  },
  delicacy: {
    api_category: 'Restaurant',
    missing_img: MissingRestaurantImg,
    params: {
      id: 'RestaurantID',
      name: 'RestaurantName'
    },
    service: [
      {
        title: '停車場',
        filter_indicator: 'ParkingInfo'
      }
    ],
    theme: [
      {
        title: '飽餐一頓',
        filter: ['異國料理', '其他', '中式美食', '夜市小吃', '素食', '火烤料理'],
      },
      {
        title: '甜食冰品',
        filter: ['甜點冰品'],
      },
      {
        title: '在地美味',
        filter: ['夜市小吃', '地方特產', '中式美食'],
      },
      {
        title: '特色伴手禮',
        filter: ['地方特產', '伴手禮'],
      }
    ]
  },
  activity: {
    api_category: 'Activity',
    missing_img: MissingActivityImg,
    params: {
      id: 'ActivityID',
      name: 'ActivityName'
    },
    service: [
      {
        title: '即將開始',
        filter_indicator: 'ComingSoon'
      },
      {
        title: '進行中',
        filter_indicator: 'Happening'
      }
    ],
    theme: [
      {
        title: '年度活動',
        filter: ['年度活動', '四季活動'],
      },
      {
        title: '單車之旅',
        filter: ['自行車活動', '遊憩活動'],
      },
      {
        title: '親近山海',
        filter: ['四季活動', '遊憩活動'],
      },
      {
        title: '節日慶典',
        filter: ['節慶活動'],
      }
    ]
  },
  sorting: [
    {
      title: '相關結果優先',
      order: 'desc'
    },
    {
      title: '最新結果優先',
      order: 'desc'
    },
    {
      title: '最舊結果優先',
      order: 'asc'
    }
  ]
};