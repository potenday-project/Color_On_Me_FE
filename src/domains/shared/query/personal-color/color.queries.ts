import { useQuery } from "@tanstack/react-query";
import ColorRepository from "./color.repository";

export const usePersonalColor = (code: string) => {
  return useQuery(["PersonalColor", code], () =>
    ColorRepository.getPersonalColor(code)
  );
};
