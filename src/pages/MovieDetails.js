import { useParams } from "react-router-dom";
import image from "../pages/logo512.png";
import { useEffect, useState } from "react";

export const MovieDetails = () => {

  const obj = useParams();
  const movie_id = obj.id;
  const [data,SetData] = useState({ genres: [] });

  useEffect (() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=8fc0f5a6233dc9e1ed2d282588ce434b`)
    .then(response => response.json())
    .then(fdata => SetData(fdata))} , 
    [movie_id])

  return (
      <div className="py-8 justify-center flex flex-wrap">
        <div className="max-w-sm">
          <img className="rounded mb-5 md:mb-0" src={data.poster_path ? `https://images.tmdb.org/t/p/w500/${data.poster_path}` : image} alt="" />
        </div>
        <div className="max-w-2xl mx-12 md:ml-24">
          <p className="text-center dark:text-slate-100 md:text-left text-zinc-700 text-4xl"><strong>{data.title}</strong></p>
          <p className="text-zinc-600 dark:text-slate-100 my-4 text-lg font-normal">{data.overview}</p>
          <div>
            <ul className="flex gap-3">
              {data.genres.map((item) => (<li className="mb-5 dark:text-slate-100 dark:border-gray-600 mt-2 p-2 text-lg rounded border" key={item.id}>{item.name}</li>))}
            </ul>
          </div>
          <div className="text-lg my-2 gap-1 flex">
            <i className=" text-yellow-300 bi bi-star-fill"></i>
            <p className="dark:text-slate-100">{data.vote_average}</p>
            <i className="bi bi-dot"></i>
            <p className="dark:text-slate-100">{data.vote_count} reviews</p>
          </div>
          <div>
            <p className="text-lg dark:text-slate-100 text-slate-700 font-bold my-5">Runtime : {data.runtime}</p>
            <p className="text-lg dark:text-slate-100 text-slate-700 font-bold my-5">Budget : {data.budget}</p>
            <p className="text-lg dark:text-slate-100 text-slate-700 font-bold my-5">Revenue : {data.revenue}</p>
            <p className="text-lg dark:text-slate-100 font-bold text-slate-700 my-5">Release Date : {data.release_date}</p>
            <p className="text-lg dark:text-slate-100 text-slate-700 font-bold my-5">IMDB Code : {data.imdb_id}</p>
          </div>
        </div>
      </div>
  )
}
