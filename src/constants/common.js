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
} from "../assets";


export const ATTRACTION_MENU_ITEM_LIST = [
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
    zone_desc: "北台灣",
    icon_src: NorthIcon,
    district_desc: ["台北市", "新北市", "基隆市", "桃園市", "新竹市", "新竹縣", "宜蘭縣"],
    align_style: "flex-end right"
  },
  {
    zone_desc: "中台灣",
    icon_src: CentralIcon,
    district_desc: ["台中市", "苗栗縣", "彰化縣", "南投縣", "雲林縣"],
    align_style: "flex-end left"
  },
  {
    zone_desc: "南台灣",
    icon_src: SouthIcon,
    district_desc: ["高雄市", "台南市", "嘉義市", "嘉義縣", "屏東縣", "澎湖縣"],
    align_style: "flex-start right"
  },
  {
    zone_desc: "東台灣",
    icon_src: EastIcon,
    district_desc: ["花蓮縣", "台東縣"],
    align_style: "flex-start left"
  },
];

export const BANNER_IMAGES = [
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
];

export const EXPLORE_LIST = [
  {
    img_url: 'explore_01.jpeg',
    img_name: '台東金剛大道',
  },
  {
    img_url: 'explore_02.jpeg',
    img_name: '南投日月潭文武廟',
  },
  {
    img_url: 'explore_03.jpeg',
    img_name: 'NULL',
  },
  {
    img_url: 'explore_04.jpeg',
    img_name: '南投合歡山',
  },
  {
    img_url: 'explore_05.jpeg',
    img_name: '北投圖書館',
  },
  {
    img_url: 'explore_06.jpeg',
    img_name: '樹林青龍嶺步道',
  },
  {
    img_url: 'explore_07.jpeg',
    img_name: '水里車埕車站',
  }
];

export const ENJOY_LIST = [
  {
    img_url: 'enjoy_01.png',
    img_name: '祥發海產餐廳',
    img_desc: '位面對東石舊漁港，堤防外有一長排竹蚵屋，是每日青蚵嫂集體剖蚵的好所在，所以在祥發用餐，不但可以品嚐美味，還可以欣賞當地人文風景及剝蚵的光景。'
  },
  {
    img_url: 'enjoy_02.png',
    img_name: '石碇一粒粽',
    img_desc: '粽子主打不油膩、吃了不脹氣，且選用最優質的材料，其中又以桂花粽最為特別，將整朵桂花加入粽子做調味，品嘗粽子的同時也能嚐到桂花香。'
  },
  {
    img_url: 'enjoy_03.png',
    img_name: '鄭記香腸',
    img_desc: '位於小琉球的老街上，最古早的鄭記琉球香腸老店創立於民國43年，已成為小琉球當地的名產之一。'
  },
  {
    img_url: 'enjoy_04.png',
    img_name: '兩支北方麵食館',
    img_desc: '專營北方麵食點心，從各式蒸餃、牛肉麵、酸辣麵等風味佳餚，堅持道地美味的執著，從醒麵、桿皮、包餡到成品，每一個環節都是對客戶的尊重與責任。'
  },
  {
    img_url: 'enjoy_05.png',
    img_name: '阿妃健康廚房',
    img_desc: '每顆水餃從肉餡、使用豐富的蔬菜、調味料的比例、水餃皮的手感與功夫，層層步驟讓水餃能兼具口感與高纖維，也讓營養價值更高。'
  },
  {
    img_url: 'enjoy_06.png',
    img_name: '鶴岡紅茶舖',
    img_desc: '店內販售花蓮瑞穗有機生態農場所種植的有機茶，坐下品嚐一杯香甜回甘的好茶，可以讓人暫時放掉煩惱，享受純淨的片刻。'
  },
  {
    img_url: 'enjoy_07.png',
    img_name: '三家村陽春麵',
    img_desc: '餐點上桌前，將佐料瑤舀進碗內，再加入一大早熬製的大骨高湯，最後放進麵條，保持麵體彈性口感不軟爛。'
  },
];

export const PARTICIPATE_IMAGES = [
  'participate_default.png',
  'participate_1.png',
  'participate_2.jpg',
  'participate_3.png',
  'participate_4.png'
];
