import React from "react";
import { useNavigate } from "react-router";
import RootPage from "~/pages/rootPage";

export default function RootRoute() {
  const nav = useNavigate();
  React.useEffect(() => {
    nav("/beranda");
  }, []);
  return <RootPage />;
}
