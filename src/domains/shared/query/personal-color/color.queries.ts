import { useQuery } from "@tanstack/react-query";
import ColorRepository from "./color.repository";

export const usePersonalColor = (code: number) => {
  return useQuery(["PersonalColor", code], () =>
    ColorRepository.getPersonalColor(code)
  );
};
