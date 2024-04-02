import { NavLink } from "react-router-dom";
import image from "../pages/logo512.png";


export const Card = ({data}) => {
  return (
    <ul className="my-10 justify-center flex gap-5 flex-wrap">
        {data.map((movie) => (
        <li key={movie.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <NavLink to={`/movie/${movie.id}`}>
            <img className="rounded-t-lg" src={movie.poster_path?`https://images.tmdb.org/t/p/w500/${movie.poster_path}`:image} alt="" />
        </NavLink>
        <div className="p-5">
            <NavLink to={`/movie/${movie.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
            </NavLink>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
        </div>
    </li>) )}
  </ul>
  )
}
