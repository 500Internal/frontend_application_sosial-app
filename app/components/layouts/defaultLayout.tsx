import React from "react";
import { Outlet } from "react-router";
import LoadingScreen from "../loadings/pageLoading";

export default function DefaultLayout() {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {isVisible? <LoadingScreen /> : <Outlet />}
    </>
  );
}
