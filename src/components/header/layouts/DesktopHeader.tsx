import React from 'react'
import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown'
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown'
import { BaseCol } from '@/components/common/BaseCol/BaseCol'
import { BaseRow } from '@/components/common/BaseRow/BaseRow'

export const DesktopHeader: React.FC = () => {
  return (
    <BaseRow justify='space-between' align='middle'>
      <div></div>
      <BaseCol xl={8} xxl={7}>
        <BaseRow align='middle' justify='end' gutter={[5, 5]}>
          <BaseCol>
            <SettingsDropdown />
          </BaseCol>
          <BaseCol>
            <ProfileDropdown />
          </BaseCol>
        </BaseRow>
      </BaseCol>
    </BaseRow>
  )
}
