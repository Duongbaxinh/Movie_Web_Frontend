import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import author from "../api/author";


const useSubmited = (typeSumited, dataUser, handleValideUserData, rePath) => {
    const navigateTo = useNavigate();
    const [message, setMessage] = useState({
        message: "",
        status: null
    })
    const handleSumited = (e) => {
        e.preventDefault();
        const login = async () => {
            try {
                const valide = handleValideUserData(dataUser)
                const isCheckValide = Object.values(valide).every(Boolean)

                if (!isCheckValide) return setMessage({ ...message, message: "You must enter enough information", status: false })

                if (typeSumited.toLocaleLowerCase() === 'login') {
                    const { message, success, accessToken, response, co } = await author.login({ ...dataUser });
                    console.log('coooo', co)
                    if (!success) { setMessage({ message: message, status: success }) }
                    else {
                        localStorage.setItem('accessToken', accessToken)
                        localStorage.setItem('inforUser', JSON.stringify(response))
                        setMessage({ message: message, status: success })
                        return navigateTo(rePath)
                    }
                }
                else {
                    const { message, success } = await author.register({ ...dataUser });
                    if (!success) { setMessage({ message: message, status: success }) }
                    else {
                        setMessage({ message: message, status: success })
                        return navigateTo(rePath)
                    }
                }

            } catch (error) {
                const errAxios = error instanceof AxiosError
                if (!errAxios) throw error
                const { message, success } = error.response.data
                setMessage({ message: message, status: success })
            }
            setTimeout(() => {
                setMessage({ ...message, status: null })
            }, 1500)
        };
        login();
    };
    return { message, handleSumited }
}
export default useSubmited