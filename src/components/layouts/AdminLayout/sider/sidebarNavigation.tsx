import { DashboardOutlined, FileProtectOutlined, UserOutlined } from '@ant-design/icons'

export interface SidebarNavigationItem {
  title: string
  key: string
  url?: string
  children?: SidebarNavigationItem[]
  icon?: React.ReactNode
}

export const sidebarNavigation: SidebarNavigationItem[] = [
  {
    title: 'common.dashboard',
    key: 'dashboard',
    url: '/',
    icon: <DashboardOutlined />
  },
  {
    title: 'common.productPage',
    key: 'product',
    url: '/product',
    icon: <FileProtectOutlined />
  },
  {
    title: 'common.profilePage',
    key: 'profile',
    url: '/profile',
    icon: <UserOutlined />
  }
]
