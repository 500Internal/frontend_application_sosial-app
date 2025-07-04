import React from "react";
import { Card, CardContent } from "shared/shadcn/card";
import LoginForm from "./loginForm";

export default function LoginCard() {
  return (
    <Card className="md:w-2/8 bg-[#1d232a] border-gray-700 rounded-md">
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
