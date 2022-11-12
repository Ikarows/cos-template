import { get, post } from '@/config/request'

export const login = (p?: any) => get('/user/login', p)

export const postDemo = (p?: any) => post('/?c=b', p)
