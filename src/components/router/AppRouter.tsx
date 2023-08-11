import React from 'react'
import RequireAuth from '@/components/router/RequireAuth'
import { AdminLayout } from '@/components/layouts'
import { useRoutes } from 'react-router-dom'

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

  console.log(protectedLayout)

  const router = useRoutes([
    {
      path: '/',
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />
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
    },
    {
      path: '/*',
      element: <Error404 />
    }
  ])

  return router
}
