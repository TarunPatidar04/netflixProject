import { getpopularMovie } from "../redux/MovieSlice";
import axios from "axios";
import { Options } from "../utils/constant";
import { useDispatch } from "react-redux";

const usePopularMovies = async () => {
  const dispatch = useDispatch();

  try {
    const res = await axios.get("popularMovieURL", Options);
    //  console.log(res.data.results)
    dispatch(getpopularMovie(res.data.results));
    console.log(res);
  } catch (error) {
    console.log("Browse Error : ", error);
  }
};

export default usePopularMovies;
