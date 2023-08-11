import { Outlet } from 'react-router-dom'
import { MainHeader } from './MainHeader'
import MainFooter from './MainFooter'

export default function AdminLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
      {/* <Sidebar /> */}
    </>
  )
}
