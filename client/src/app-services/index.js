import userServices from './userServices'
import apiServices from './apiServices'

export const userApi = userServices(apiServices)
