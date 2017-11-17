import userServices from './userServices'
import apiServices from './apiServices'

export const signup = userServices(apiServices).createUser
