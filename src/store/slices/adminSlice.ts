import { createAction, createSlice, PrepareAction } from '@reduxjs/toolkit'
import { UserModel } from '@/models/UserModel'
import { persistAdmin, readUser } from '@/services/localStorage.service'

export interface UserState {
  user: UserModel | null
}

const initialState: UserState = {
  user: readUser()
}

export const setAdmin = createAction<PrepareAction<UserModel>>('user/setUser', newAdmin => {
  persistAdmin(newAdmin)

  return {
    payload: newAdmin
  }
})

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setAdmin, (state, action) => {
      state.user = action.payload
    })
  }
})

export default adminSlice.reducer
