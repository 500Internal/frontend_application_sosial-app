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
};

export default function DangerModal({
  isOpen,
  setOpen,
  onConfirm,
  title,
  description,
  isLoading,
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
          <Button onClick={onConfirm} variant={"destructive"}>
            {isLoading ? <Loader className="animate-spin" /> : "Confirm"}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
