import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { login, LoginRequest, signUp, SignUpRequest } from '@/api/auth.api'
import { deleteAdmin, deleteToken, persistToken, readToken } from '@/services/localStorage.service'
import { setAdmin } from '@/store/slices/adminSlice'

export interface AuthSlice {
  token: string | null
}

const initialState: AuthSlice = {
  token: readToken()
}

export const doLogin = createAsyncThunk('auth/doLogin', async (loginPayload: LoginRequest, { dispatch }) =>
  login(loginPayload).then(res => {
    dispatch(setAdmin(res.admin))
    persistToken(res.token)

    return res.token
  })
)

export const doSignUp = createAsyncThunk('auth/doSignUp', async (signUpPayload: SignUpRequest) => signUp(signUpPayload))

export const doLogout = createAsyncThunk('auth/doLogout', (_, { dispatch }) => {
  deleteToken()
  deleteAdmin()
  dispatch(setAdmin(null))
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload
    })
    builder.addCase(doLogout.fulfilled, state => {
      state.token = ''
    })
  }
})

export default authSlice.reducer
