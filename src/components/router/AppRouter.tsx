import React from 'react'
import RequireAuth from '@/components/router/RequireAuth'
import { AdminLayout } from '@/components/layouts/AdminLayout/MainLayout/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// no lazy loading for auth pages to avoid flickering
import { LoginPage } from '@/pages/LoginPage'
import { withLoading } from '@/hocs/withLoading.hoc'

const AuthLayout = React.lazy(() => import('@/components/layouts/AuthLayout/AuthLayout'))
const DashboardPages = React.lazy(() => import('@/pages/DashboardPages'))
const Error404Page = React.lazy(() => import('@/pages/Error404Page'))
const ProfilePage = React.lazy(() => import('@/pages/Profile/Profile'))
const Logout = React.lazy(() => import('./Logout'))

const Dashboard = withLoading(DashboardPages)
const Error404 = withLoading(Error404Page)
const Profile = withLoading(ProfilePage)
const LogoutFallback = withLoading(Logout)

const AuthLayoutFallback = withLoading(AuthLayout)

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <AdminLayout />
    </RequireAuth>
  )

  const router = createBrowserRouter([
    {
      path: '/',
      element: protectedLayout,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path: 'profile',
          element: <Profile />
        },
        {
          path: '*',
          element: <Error404 />
        }
      ]
    },
    {
      path: 'auth',
      element: <AuthLayoutFallback />,
      children: [
        {
          path: 'login',
          element: <LoginPage />
        }
      ]
    },
    {
      path: 'logout',
      element: <LogoutFallback />
    }
  ])

  return <RouterProvider router={router} />
}
