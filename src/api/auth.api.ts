import httpApi from '@/utils/http.api'
import { AdminModel } from '@/models/AdminModel'

export interface LoginRequest {
  email: string
  password: string
  remember: boolean
}

export interface LoginResponse {
  token: string
  admin: AdminModel
}

export interface SignUpRequest {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface ResetPasswordRequest {
  email: string
}

export const login = (loginPayload: LoginRequest): Promise<LoginResponse> =>
  httpApi.post<LoginResponse>('login', { ...loginPayload }).then(({ data }) => data)

export const signUp = (signUpData: SignUpRequest): Promise<undefined> =>
  httpApi.post<undefined>('signUp', { ...signUpData }).then(({ data }) => data)

export const resetPassword = (resetPasswordPayload: ResetPasswordRequest): Promise<undefined> =>
  httpApi.post<undefined>('forgotPassword', { ...resetPasswordPayload }).then(({ data }) => data)
