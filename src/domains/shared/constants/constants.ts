export const PERSONAL_COLOR = {
  spring: [
    { name: "봄 웜 라이트", color: "rgb(210, 238, 250)", fontColor: "#000" },
    { name: "봄 웜 클리어", color: "rgb(254, 211, 60)", fontColor: "#000" },
    { name: "봄 웜 스트롱", color: "rgb(172, 221, 77)", fontColor: "#000" },
  ],
  summer: [
    { name: "여름 쿨 라이트", color: "rgb(248, 195, 223)", fontColor: "#000" },
    { name: "여름 쿨 클리어", color: "rgb(236, 242, 69)", fontColor: "#000" },
    { name: "여름 쿨 뮤트", color: "rgb(203, 143, 169)", fontColor: "#000" },
  ],
  fall: [
    { name: "가을 웜 뮤트", color: "rgb(217, 147, 118)", fontColor: "#000" },
    { name: "가을 웜 트루", color: "rgb(212, 96, 59)", fontColor: "#000" },
    { name: "가을 웜 딥", color: "rgb(153, 27, 7)", fontColor: "#fff" },
  ],
  winter: [
    { name: "겨울 쿨 스트롱", color: "rgb(26, 179, 133)", fontColor: "#000" },
    { name: "겨울 쿨 트루", color: "rgb(125, 200, 247)", fontColor: "#000" },
    { name: "겨울 쿨 딥", color: "rgb(170, 55, 90)", fontColor: "#fff" },
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
  "봄 웜 라이트": "SW_LG",
  "봄 웜 클리어": "SW_CL",
  "봄 웜 스트롱": "SW_ST",
  "여름 쿨 라이트": "SC_LG",
  "여름 쿨 클리어": "SC_CL",
  "여름 쿨 뮤트": "SC_MT",
  "가을 웜 뮤트": "FW_MT",
  "가을 웜 트루": "FW_TR",
  "가을 웜 딥": "FW_DP",
  "겨울 쿨 스트롱": "WC_ST",
  "겨울 쿨 트루": "WC_TR",
  "겨울 쿨 딥": "WC_DP",
};

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
