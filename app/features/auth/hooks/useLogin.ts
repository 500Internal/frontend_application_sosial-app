import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { loginService } from "../service/authService";
import { toast } from "sonner";

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
