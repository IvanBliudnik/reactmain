import axios from "axios";


const Token = "97cad68f-9e7c-406e-9978-33f93f5480f0"
const apiKey = "6c44c2cf-a10e-40d1-a32c-651c40ce19bf"
export const config = {
    headers: {
        Authorization: `Bearer ${Token}`,
        "API-KEY": apiKey,
        //авторизация apiKey "API-KEY" с таким ключом потому что ждёт сервер
    },
}

export const todolistsApi = {
    getTodolists() {
        const promise = axios.get("https://social-network.samuraijs.com/api/1.1//todo-lists", config)
    return promise
}
}