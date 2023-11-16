import { useRecoilState } from "recoil";
import { colorRange } from "../store/localeStore";

const useColor = () => {
  return useRecoilState(colorRange);
};

export default useColor;
