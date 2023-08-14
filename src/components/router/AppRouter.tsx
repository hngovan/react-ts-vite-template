import React from 'react'
import RequireAuth from '@/components/router/RequireAuth'
import { AdminLayout } from '@/components/layouts/AdminLayout/MainLayout/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// no lazy loading for auth pages to avoid flickering
import Login from '@/pages/Login'
import { withLoading } from '@/hocs/withLoading.hoc'

const DashboardPages = React.lazy(() => import('@/pages/DashboardPages'))
const Error404Page = React.lazy(() => import('@/pages/Error404Page'))
const Logout = React.lazy(() => import('./Logout'))

const Dashboard = withLoading(DashboardPages)
const Error404 = withLoading(Error404Page)
const LogoutFallback = withLoading(Logout)

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
          path: '*',
          element: <Error404 />
        }
      ]
    },
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: <Login />
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
