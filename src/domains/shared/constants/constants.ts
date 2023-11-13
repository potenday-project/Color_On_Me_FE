export const PERSONAL_COLOR = {
  spring: [
    {
      id: 1,
      name: "봄 웜 라이트",
      color: "rgb(210, 238, 250)",
      fontColor: "#000",
    },
    {
      id: 2,
      name: "봄 웜 클리어",
      color: "rgb(254, 211, 60)",
      fontColor: "#000",
    },
    {
      id: 3,
      name: "봄 웜 스트롱",
      color: "rgb(172, 221, 77)",
      fontColor: "#000",
    },
  ],
  summer: [
    {
      id: 4,
      name: "여름 쿨 라이트",
      color: "rgb(248, 195, 223)",
      fontColor: "#000",
    },
    {
      id: 5,
      name: "여름 쿨 클리어",
      color: "rgb(236, 242, 69)",
      fontColor: "#000",
    },
    {
      id: 6,
      name: "여름 쿨 뮤트",
      color: "rgb(203, 143, 169)",
      fontColor: "#000",
    },
  ],
  fall: [
    {
      id: 7,
      name: "가을 웜 뮤트",
      color: "rgb(217, 147, 118)",
      fontColor: "#000",
    },
    {
      id: 8,
      name: "가을 웜 트루",
      color: "rgb(212, 96, 59)",
      fontColor: "#000",
    },
    { id: 9, name: "가을 웜 딥", color: "rgb(153, 27, 7)", fontColor: "#fff" },
  ],
  winter: [
    {
      id: 10,
      name: "겨울 쿨 스트롱",
      color: "rgb(26, 179, 133)",
      fontColor: "#000",
    },
    {
      id: 11,
      name: "겨울 쿨 트루",
      color: "rgb(125, 200, 247)",
      fontColor: "#000",
    },
    {
      id: 12,
      name: "겨울 쿨 딥",
      color: "rgb(170, 55, 90)",
      fontColor: "#fff",
    },
  ],
};
export const FLATTENED_PERSONAL_COLOR = [
  "봄 웜 라이트",
  "봄 웜 클리어",
  "봄 웜 스트롱",
  "여름 쿨 라이트",
  "여름 쿨 클리어",
  "여름 쿨 뮤트",
  "가을 웜 뮤트",
  "가을 웜 트루",
  "가을 웜 딥",
  "겨울 쿨 스트롱",
  "겨울 쿨 트루",
  "겨울 쿨 딥",
];

type PersonalColorType = {
  [key: string]: string;
};

export const PERSONAL_COLOR_MAPPING: PersonalColorType = {
  "봄 웜 라이트": "Best_SW_LG",
  "봄 웜 클리어": "Best_SW_CL",
  "봄 웜 스트롱": "Best_SW_ST",
  "여름 쿨 라이트": "Best_SC_LG",
  "여름 쿨 클리어": "Best_SC_CL",
  "여름 쿨 뮤트": "Best_SC_MT",
  "가을 웜 뮤트": "Best_FW_MT",
  "가을 웜 트루": "Best_FW_TR",
  "가을 웜 딥": "Best_FW_DP",
  "겨울 쿨 스트롱": "Best_WC_ST",
  "겨울 쿨 트루": "Best_WC_TR",
  "겨울 쿨 딥": "Best_WC_DP",
};

export const PERSONAL_COLOR_MAPPING1: any = {
  1: {
    code: "Best_SW_LG",
    string: "봄 웜 라이트",
  },
  2: {
    code: "Best_SW_CL",
    string: "봄 웜 클리어",
  },
  3: {
    code: "Best_SW_ST",
    string: "봄 웜 스트롱",
  },
  4: {
    code: "Best_SC_LG",
    string: "여름 쿨 라이트",
  },
  5: {
    code: "Best_SC_CL",
    string: "여름 쿨 클리어",
  },
  6: {
    code: "Best_SC_MT",
    string: "여름 쿨 뮤트",
  },
  7: {
    code: "Best_FW_MT",
    string: "가을 웜 뮤트",
  },
  8: {
    code: "Best_FW_TR",
    string: "가을 웜 트루",
  },
  9: {
    code: "Best_FW_DP",
    string: "가을 웜 딥",
  },
  10: {
    code: "Best_WC_ST",
    string: "겨울 쿨 스트롱",
  },
  11: {
    code: "Best_WC_TR",
    string: "겨울 쿨 트루",
  },
  12: {
    code: "Best_WC_DP",
    string: "겨울 쿨 딥",
  },
};

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const SERVER_BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;
