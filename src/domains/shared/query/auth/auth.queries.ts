import { useMutation } from "@tanstack/react-query";
import AuthRepository from "./auth.repository";

export const useSignUp = () => {
  return useMutation({
    mutationKey: ["signUp"],
    mutationFn: (data) => AuthRepository.postSignUp(data),
  });
};

export const useEmailDuplicate = () => {
  return useMutation({
    mutationKey: ["emailDuplicate"],
    mutationFn: (data) => AuthRepository.postEmailDuplicate(data),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data) => AuthRepository.postLogin(data),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => AuthRepository.getLogout(),
  });
};
