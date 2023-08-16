import { createAction, createSlice, PrepareAction } from '@reduxjs/toolkit'
import { AdminModel } from '@/models/AdminModel'
import { persistAdmin, readUser } from '@/services/localStorage.service'

export interface UserState {
  admin: AdminModel | null
}

const initialState: UserState = {
  admin: readUser()
}

export const setAdmin = createAction<PrepareAction<AdminModel>>('admin/setAmin', newAdmin => {
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
      state.admin = action.payload
    })
  }
})

export default adminSlice.reducer
