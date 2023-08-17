import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import * as httpCode from '@/constants/httpStatusCode'
import { deleteToken, readToken } from '@/services/localStorage.service'

const httpApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})

httpApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (readToken) {
      config.headers.Authorization = `Bearer ${readToken()}`
    } else {
      delete config.headers.Authorization
    }

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

httpApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    const { response, request } = error
    const { status } = (error.response as AxiosResponse) ?? {}
    if (response) {
      if (status === httpCode.UNAUTHENTICATED) {
        deleteToken()
        window.location.href = '/login'
      }
      if (status === httpCode.FORBIDDEN) {
        console.log('Permission denied')
      }
    } else if (request) {
      return Promise.reject(error)
    } else {
      if (axios.isCancel(error)) {
        console.warn('Request is canceled')
      }
      return Promise.reject(error)
    }
    return Promise.reject(error.response)
  }
)

export default httpApi
