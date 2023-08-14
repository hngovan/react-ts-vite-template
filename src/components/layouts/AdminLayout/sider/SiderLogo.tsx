import React from 'react'
import * as S from './MainSider/MainSider.styles'
import { RightOutlined } from '@ant-design/icons'
import { useResponsive } from '@/hooks/useResponsive'
import logo from '/vite.svg'
import logoDark from '@/assets/react.svg'
import { useAppSelector } from '@/hooks/reduxHooks'
import { Button } from 'antd'

interface SiderLogoProps {
  isSiderCollapsed: boolean
  toggleSider: () => void
}
export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
  const { tabletOnly } = useResponsive()

  const theme = useAppSelector(state => state.theme.theme)

  const img = theme === 'dark' ? logoDark : logo

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to='/'>
        <img src={img} alt='vite+react' width={48} height={48} />
        <S.BrandSpan>vite+react</S.BrandSpan>
      </S.SiderLogoLink>
      {tabletOnly && (
        <Button
          shape='circle'
          size='small'
          // $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  )
}
