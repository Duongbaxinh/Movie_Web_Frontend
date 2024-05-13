import axiousClinet from './axiouClient';

const listFilm = {
    getList: async () => {
        try {
            const url = `http://localhost:5000/api/v1/movies`
            return axiousClinet.get(url)
        } catch (error) {
            console.log(error)
        }
    },
    getDetai: async (id) => {
        console.log('id film ', id)
        try {
            const url = `http://localhost:8080/api/v1/movies/${id.id}`
            console.log(url)
            return axiousClinet.get(url)
        } catch (error) {
            console.log(error)
        }
    },
    getQueryMovie: async (param) => {
        try {
            const url = `http://localhost:8080/api/v1/search`
            return axiousClinet.get(url, { params: param })
        } catch (error) {
            console.log(error)
        }
    },
    getMovieBySeriId: async (seriId) => {
        try {
            const url = `http://localhost:8080/api/v1/movies/:${seriId}`
        } catch (error) {
            console.log(error)
        }
    }
}
export default listFilm;