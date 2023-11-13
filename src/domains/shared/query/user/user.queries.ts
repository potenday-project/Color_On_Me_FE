import { useMutation, useQuery } from "@tanstack/react-query";
import UserRepository from "./user.repository";

export const usePostUser = () => {
  return useMutation({
    mutationKey: ["postUser"],
    mutationFn: (data: string) => UserRepository.postUser(data),
  });
};

export const useGetUser = () => {
  return useQuery(["getUser"], () => UserRepository.getUser());
};

export const usePostId = () => {
  return useQuery(["postId"], () => UserRepository.postId());
};

export const usePatchPersonalColor = () => {
  return useMutation({
    mutationKey: ["patchPersonalColor"],
    mutationFn: (id: number) => UserRepository.patchPersonalColor(id),
  });
};
