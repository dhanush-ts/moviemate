import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useEffect } from "react";

export const MovieList = () => {
  
    const obj = useParams();
    const id = obj.key;
    const data = useFetch(id);
    const val = id==="now_playing"?"Home":id
    useEffect(() => {document.title = val });

  return (
    <Card data={data} />
  )
}