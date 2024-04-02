import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components";

export const Search = () => {

    const obj = useParams();
    const q = obj.q;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=8fc0f5a6233dc9e1ed2d282588ce434b&query=${q}`;

    const [data,SetData] = useState([{ genres: [] }]);

    useEffect(() => {
      fetch(url,{
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmMwZjVhNjIzM2RjOWUxZWQyZDI4MjU4OGNlNDM0YiIsInN1YiI6IjY1ZmFlMDZhY2Y2MmNkMDE2MzU1ODc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EPA_LPFo4SAm2-lNRDPhkzXjdlYcdN-ilwW2p4V4nr0',
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(fdata => SetData(fdata))
    },[url])

    const data_val = data.results || [];
    
  return (
    <div>
      {data_val.length===0?<p className="py-20 mx-20 text-slate-200 text-3xl">No result found for '{q}'</p>:<Card data={data_val || []} />}
    </div>
  )
}