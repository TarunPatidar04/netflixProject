import { getNowPlayingMovies } from "../redux/MovieSlice";
import axios from "axios";
import { Options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = async () => {
  const dispatch = useDispatch();

  try {
    const res = await axios.get("https:MovieURL", Options);
    //  console.log(res.data.results)
    dispatch(getNowPlayingMovies(res.data.results));
    console.log(res);
  } catch (error) {
    console.log("Browse Error : ", error);
  }
};

export default useNowPlayingMovies;
