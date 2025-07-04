import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { getSession, loginService } from "~/services/authService";

export const useGetSession = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });
};

export const useLogin = () => {
  const nav = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      nav("/");
    },
    onError: (error) => {
      toast.error("Login gagal");
    },
  });

  return { mutate, isPending };
};
