import { ADMIN_ACCESS_TOKEN, ADMIN_INFO } from '@/constants/authentication'
import { UserModel } from '@/models/UserModel'

export const persistToken = (token: string): void => {
  localStorage.setItem(ADMIN_ACCESS_TOKEN, token)
}

export const readToken = (): string => {
  return localStorage.getItem(ADMIN_ACCESS_TOKEN) || ''
}

export const persistAdmin = (user: UserModel): void => {
  localStorage.setItem(ADMIN_INFO, JSON.stringify(user))
}

export const readUser = (): UserModel | null => {
  const userStr = localStorage.getItem('user')

  return userStr ? JSON.parse(userStr) : {}
}

export const deleteToken = (): void => localStorage.removeItem(ADMIN_ACCESS_TOKEN)
export const deleteAdmin = (): void => localStorage.removeItem(ADMIN_INFO)
