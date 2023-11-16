import { atom } from "recoil";
import { v1 } from "uuid";

export const colorRange = atom<"best" | "worst">({
  key: `codeKey/${v1()}`,
  default: "best",
});
