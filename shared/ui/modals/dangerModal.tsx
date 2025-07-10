import React from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "shared/shadcn/alert-dialog";
import { Button } from "shared/shadcn/button";
import { Loader } from "lucide-react";

type AlerModalProps = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  onConfirm: () => void;
  isLoading: boolean;
  title: string;
  description: string;
  variant: "destructive" | "default" | "outline" | "secondary" | "ghost";
};

export default function DangerModal({
  isOpen,
  setOpen,
  onConfirm,
  title,
  description,
  isLoading,
  variant

}: AlerModalProps) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogTitle className="text-red-500 font-semibold">
          {title}
        </AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
        <AlertDialogFooter>
          <Button variant={"ghost"} onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={onConfirm} variant={variant}>
            {isLoading ? <Loader className="animate-spin" /> : "Confirm"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
