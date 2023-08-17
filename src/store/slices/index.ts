import authReducer from '@/store/slices/authSlice'
import adminReducer from '@/store/slices/adminSlice'
import themeReducer from '@/store/slices/themeSlice'

export default {
  admin: adminReducer,
  auth: authReducer,
  theme: themeReducer
}
