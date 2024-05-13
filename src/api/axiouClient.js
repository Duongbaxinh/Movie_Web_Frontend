import axious from 'axios'

const axiousClinet = axious.create({
    URL: '/',

})
axiousClinet.interceptors.request.use(async (config) => {
    return config;
})
axiousClinet.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data
        }
    }
)
export default axiousClinet