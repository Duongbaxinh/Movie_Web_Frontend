import axiousClinet from "./axiouClient";

const listSeri = {
    getSeriById: async (id) => {
        try {
            const url = `http://localhost:5000/api/v1/seris/${id}`
            return axiousClinet.get(url)
        } catch (error) {
            console.log(error)
        }
    },
    getSeris: async () => {
        try {
            const url = `http://localhost:8080/api/v1/seris`
            return axiousClinet.get(url)
        } catch (error) {
            console.log(error)
        }
    },
}
export default listSeri