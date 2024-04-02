import { Route, Routes } from "react-router-dom";
import { MovieDetails,MovieList,PageNotFound,Search } from "../pages" ;
import { Header,Footer } from "../components";
import { MovieDefault } from "../pages/MovieDefault";

export const Allroutes = () => {
  return (
    <div>
      <Header />
        <Routes>
            <Route path="/" element={<MovieDefault />}></Route>
            <Route path="/movie/:id" element={<MovieDetails />}></Route>
            <Route path="/:key" element={<MovieList />}></Route>
            <Route path="/search/:q" element={<Search />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      <Footer />
    </div>
  )
}