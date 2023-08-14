import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { MainSider } from '../sider/MainSider/MainSider'
import { MainHeader } from '../MainHeader/MainHeader'
import { MainFooter } from '../MainFooter/MainFooter'
import { Header } from '@/components/header/Header'
import MainContent from '../MainContent/MainContent'
import * as S from './MainLayout.styles'

export const AdminLayout: React.FC = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(true)
  // const toggleSider = () => setSiderCollapsed(!siderCollapsed)

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <S.LayoutMain>
        <MainHeader>
          <Header />
        </MainHeader>
        <MainContent id='main-content'>
          <Outlet />
        </MainContent>
        <MainFooter />
      </S.LayoutMain>
    </S.LayoutMaster>
  )
}
