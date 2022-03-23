import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year73`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });

    //로딩을 끝내서 setLoading을 false화면 보여주는 걸로 바꿔야함
  }, []);
  console.log(movies, "dfdfdfdf");
  return <div>{loading ? <h1>loading....</h1> : null}</div>;
}

export default App;
