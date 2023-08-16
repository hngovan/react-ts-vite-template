import { useMemo } from 'react'
import { useResponsive } from '@/hooks/useResponsive'
import { Overlay } from '@/components/common/Overlay/Overlay'
import { SiderMenu } from '../SiderMenu/SiderMenu'
import { SiderLogo } from '../SiderLogo'
import * as S from './MainSider.styles'

interface MainSiderProps {
  isCollapsed: boolean
  setCollapsed: (isCollapsed: boolean) => void
}

export const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const { isDesktop, mobileOnly, tabletOnly } = useResponsive()

  const isCollapsible = useMemo(() => mobileOnly && tabletOnly, [mobileOnly, tabletOnly])

  const toggleSider = () => setCollapsed(!isCollapsed)

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={!isDesktop && isCollapsed}
        collapsedWidth={tabletOnly ? 80 : 0}
        collapsible={isCollapsible}
        width={260}
        {...props}
      >
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>
          <SiderMenu theme={'dark'} setCollapsed={setCollapsed} />
        </S.SiderContent>
      </S.Sider>
      {mobileOnly && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  )
}
