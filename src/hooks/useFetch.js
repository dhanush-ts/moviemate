import { useEffect, useState } from "react";

export const useFetch = (key) => {
    const url = `https://api.themoviedb.org/3/movie/${key}?language=en-US&page=1`;

    const [data, SetData] = useState([]);

    useEffect(()=> {
        fetch(url, {
                    method: 'GET',
                    headers: {
                      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmMwZjVhNjIzM2RjOWUxZWQyZDI4MjU4OGNlNDM0YiIsInN1YiI6IjY1ZmFlMDZhY2Y2MmNkMDE2MzU1ODc3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EPA_LPFo4SAm2-lNRDPhkzXjdlYcdN-ilwW2p4V4nr0',
                      'Accept': 'application/json'
                    }
                  })
        .then(Response => Response.json())
        .then(fdata => SetData(fdata.results))
    },
    [url] )

    return data
}
