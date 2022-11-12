import { get, post } from '@/config/request'

export const login = (p: string) => get('/user/login', p)

export const postDemo = (p: string) => post('/?c=b', p)
