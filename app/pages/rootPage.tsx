import React from "react"
import { useNavigate } from "react-router";


export default function RootPage() {
  const nav = useNavigate();
  React.useEffect(() => {
    nav("/home")
  }, []);
  return (
    <>
    </>
  )
}
