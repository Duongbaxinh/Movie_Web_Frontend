import axiousClinet from "./axiouClient";

const listFilm = {
  getList: async () => {
    try {
      const url = `http://localhost:5000/api/v1/movies`;
      return axiousClinet.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  getDetai: async (id) => {
    console.log("id film ", id);
    try {
      const url = `https://movie-web-backend-2pz8.onrender.com/api/v1/movies/${id.id}`;
      console.log(url);
      return axiousClinet.get(url);
    } catch (error) {
      console.log(error);
    }
  },
  getQueryMovie: async (param) => {
    try {
      const url = `https://movie-web-backend-2pz8.onrender.com/api/v1/search`;
      return axiousClinet.get(url, { params: param });
    } catch (error) {
      console.log(error);
    }
  },
  getMovieBySeriesId: async (SeriesId) => {
    try {
      const url = `https://movie-web-backend-2pz8.onrender.com/api/v1/movies/:${SeriesId}`;
    } catch (error) {
      console.log(error);
    }
  },
};
export default listFilm;
