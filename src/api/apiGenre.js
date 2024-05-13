import axiousClinet from "./axiouClient";

const apiGenre = {
    getGenreById: async (id) => {
        try {
            const url = `http://localhost:5000/api/v1/seris/${id}`
            return axiousClinet.get(url)
        } catch (error) {
            console.log(error)
        }
    },
    getGenres: async () => {
        try {
            const url = `http://localhost:5000/api/v1/genres`
            return axiousClinet.get(url)
        } catch (error) {
            console.log(error)
        }
    },
}
export default apiGenre