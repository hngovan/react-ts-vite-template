import { ADMIN_ACCESS_TOKEN, ADMIN_INFO } from '@/constants/authentication'
import { AdminModel } from '@/models/AdminModel'

const testUser = {
  id: 1,
  firstName: 'Chris',
  lastName: 'Johnson',
  imgUrl: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
  userName: '@john1989',
  email: {
    name: 'chris.johnson@altence.com',
    verified: true
  },
  phone: {
    number: '+18143519459',
    verified: false
  },
  sex: 'male',
  birthday: '01/26/2022',
  lang: 'en',
  country: 'GB',
  city: 'London',
  address1: '14 London Road',
  zipcode: 5211
}

export const persistToken = (token: string): void => {
  localStorage.setItem(ADMIN_ACCESS_TOKEN, token)
}

export const readToken = (): string => {
  return localStorage.getItem(ADMIN_ACCESS_TOKEN) || 'bearerToken'
}

export const persistAdmin = (user: AdminModel): void => {
  localStorage.setItem(ADMIN_INFO, JSON.stringify(user))
}

export const readUser = (): AdminModel | null => {
  const userStr = localStorage.getItem('user')

  return userStr ? JSON.parse(userStr) : testUser
}

export const deleteToken = (): void => localStorage.removeItem(ADMIN_ACCESS_TOKEN)
export const deleteAdmin = (): void => localStorage.removeItem(ADMIN_INFO)
