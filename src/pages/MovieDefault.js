import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


export const MovieDefault = () => {
  const nav = useNavigate();
  useEffect(() => {
  nav("/now_playing")},
  [nav])
  
}