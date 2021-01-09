import { get, post, put, patch, del } from './requests'

const userID = '95'

export const getToDoList = () => get(`api/v1/users/${userID}/tasks`)

export const createToDoList = (payload) => post(`api/v1/users/${userID}/tasks`, payload)

export const deleteToDoList = (id) => del(`api/v1/users/${userID}/tasks/${id}`)

export const updateToDoList = (payload) => put(`api/v1/users/${userID}/tasks/${payload.id}`,{task:payload})

export const markComplete = (id) => put(`api/v1/users/${userID}/tasks/${id}/completed`)

export const markUncomplete = (id) => put(`api/v1/users/${userID}/tasks/${id}/uncompleted`)
