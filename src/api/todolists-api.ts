import axios from "axios";
import {number, string} from "prop-types";

const Token = "97cad68f-9e7c-406e-9978-33f93f5480f0"
const apiKey = "6c44c2cf-a10e-40d1-a32c-651c40ce19bf"
export const config = {
    headers: {
        Authorization: `Bearer ${Token}`,
        "API-KEY": apiKey,
        //авторизация apiKey "API-KEY" с таким ключом потому что ждёт сервер
    },
}
//правильно писать отсюда так как мы точно знаем какой тип обьекта нам возвращает сервер
export const TodolistType = {
    id:string,
    title:string,
    addedDate:string,
    order:number,
}

export const todolistsApi = {
    getTodolists() {
        const promise = axios.get("https://social-network.samuraijs.com/api/1.1//todo-lists", config)
    return promise
},
    createTodolist(title: string) {
        const promise = axios.post(`https://social-network.samuraijs.com/api/1.1//todo-lists`,{ title: title }, config)
        return promise
    },
    deleteTodolist(id: string) {
        const promise = axios.delete(`https://social-network.samuraijs.com/api/1.1//todo-lists/${ id }`, config)
        return promise
    },
    updateTodolist(id: string ,title:string) {
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1//todo-lists/${ id }`, {title: title}, config)
        return promise
    }


}