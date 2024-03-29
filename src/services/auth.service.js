import axios from 'axios'
import { getToken, removeToken, setToken } from './token.service'

export async function isAuthenticated() {
    try {
        const token = getToken()
        if(!token) {
            return false
        }
        const { data: isValidUser } = await axios.get("auth/isValid")
        return isValidUser
    } catch (error) {
        console.error("Hubo un error al consultar el token")
        return false
    }
}


export async function login (form) {
    try {
        const {data: {token} } = await axios.post("auth/login", form)
        setToken(token)
        return true
    } catch (error) {
        alert("Credenciales invalidas")
        return false
    }
}

export async function register (form) {
    try {
        const {data: {token} } = await axios.post("auth/register", form)
        setToken(token)
        return true
    } catch (error) {
        alert("No se registro el usuario")
        return false
    }
}

export async function logout () {
    removeToken()
}