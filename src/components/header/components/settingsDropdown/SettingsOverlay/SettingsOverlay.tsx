import React from 'react'
import { DropdownCollapse } from '@/components/header/Header.styles'
import { useTranslation } from 'react-i18next'
import { LanguagePicker } from '../LanguagePicker/LanguagePicker'
import { ThemePicker } from '../ThemePicker/ThemePicker'
import type { CollapseProps } from 'antd'
import * as S from './SettingsOverlay.styles'

export const SettingsOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation()

  const items: CollapseProps['items'] = [
    {
      key: 'languagePicker',
      label: t('header.changeLanguage'),
      children: <LanguagePicker />
    },
    {
      key: 'themePicker',
      label: t('header.changeTheme'),
      children: <ThemePicker />
    }
  ]

  return (
    <S.SettingsOverlayMenu {...props}>
      <DropdownCollapse items={items} bordered={false} expandIconPosition='end' ghost defaultActiveKey='themePicker' />
    </S.SettingsOverlayMenu>
  )
}
