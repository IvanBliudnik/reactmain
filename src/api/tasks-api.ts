import {instance} from "./todolists-api";

//правильно писать отсюда так как мы точно знаем какой тип обьекта нам возвращает сервер
//<> это уточнение, мы уточняем что нам вернётся массив обьектов с типом TasksType
export type TaskType = {
    description: string,
    priority: number,
    status: number,
    startDate: string,
    deadline: string,
    todolistId: string,
    id: string,
    title: string,
    addedDate: string,
    order: number,
    total: number,
}
export type UpdateTaskModelType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}
export type GetTasksResponse = {
    items: TaskType[],
    totalCount: number,
    error: string | null,
}
// export type DeleteTasksResponse = {
//     resultCode: number
//     messages: Array<string>,
//     data: {}
// } так как тоже самое то берём ResponseType
type ResponseType<D = {}> = { //<мы уточняем что у нас есть базовый тип с каким то D>
    //<D = {}> значение по умолчанию, если ничего не передаём то не пишем <{}>
    resultCode: number
    messages: Array<string>,
    data: D
}

export const tasksApi = {
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
        //<> это уточнение, мы уточняем что нам вернётся массив обьектов с типом TasksType
    },
    createTask(todolistId:string, title: string) {
        return  instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId: string, taskId:string) {
        return  instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTasks(todolistId: string, taskId: string, model: UpdateTaskModelType) {
        return instance.put<UpdateTaskModelType>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
    }
}