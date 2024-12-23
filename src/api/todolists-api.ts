import axios from "axios";
import {GetTasksResponse} from "./tasks-api";

const Token = "97cad68f-9e7c-406e-9978-33f93f5480f0"
const apiKey = "6c44c2cf-a10e-40d1-a32c-651c40ce19bf"
export const config = {
    headers: {
        Authorization: `Bearer ${Token}`,
        "API-KEY": apiKey,
        //авторизация apiKey "API-KEY" с таким ключом потому что ждёт сервер
    },
}
//вместо axios сокращение и конфиг тоже сюда закинули
export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    ...config
})

//правильно писать отсюда так как мы точно знаем какой тип обьекта нам возвращает сервер
//<> это уточнение, мы уточняем что нам вернётся массив обьектов с типом TodolistType
export type TodolistType = {
    id: string,
    title: string,
    addedDate: string,
    order: number,
}
// type createTodolistResponseType = {
//     resultCode: number
//     messages: Array<string>,
//     data: {
//         item: TodolistType //тк мы протипизировали ранее, d D мы уточняем что будет этот тип обьекта
//             // {
//             //     "id": "a2dfe62b-23533331-4b37-9581-1cc77ebc999f",
//             //     "title": "important",
//             //     "addedDate": "2019-07-30T12:23:49.677",
//             //     "order": 0
//             // }
//     }
// }
type ResponseType<D> = { //<мы уточняем что у нас есть базовый тип с каким то D>
    resultCode: number
    messages: Array<string>,
    data: D
}

export const todolistsApi = {
    getTodolists() {
       return  instance.get<Array<TodolistType[]>>("todo-lists")
        //<> это уточнение, мы уточняем что нам вернётся массив обьектов с типом TodolistType

    },
    createTodolist(title: string) {
       return  instance.post<ResponseType<{ item: TodolistType }>>(`todo-lists`, {title: title})
    },
    deleteTodolist(id: string) {
        return instance.delete<ResponseType<{}>>(`todo-lists/${id}`)

    },
    updateTodolist(id: string, title: string) {
        return instance.put<ResponseType<{}>>(`todo-lists/${id}`, {title: title})
    }
}