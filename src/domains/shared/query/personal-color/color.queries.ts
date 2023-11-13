import { useQuery } from "@tanstack/react-query";
import ColorRepository from "./color.repository";

export const usePersonalColor = (code: any) => {
  return useQuery(["PersonalColor", code], () =>
    ColorRepository.getPersonalColor(code)
  );
};
