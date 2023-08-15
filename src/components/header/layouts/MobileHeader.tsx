import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown'
import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown'
import * as S from '../Header.styles'
import { BaseCol } from '@/components/common/BaseCol/BaseCol'
import { BaseRow } from '@/components/common/BaseRow/BaseRow'

interface MobileHeaderProps {
  toggleSider: () => void
  isSiderOpened: boolean
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSider, isSiderOpened }) => {
  return (
    <BaseRow justify='space-between' align='middle'>
      <BaseCol>
        <ProfileDropdown />
      </BaseCol>

      <BaseCol>
        <BaseRow align='middle'>
          <BaseCol>
            <SettingsDropdown />
          </BaseCol>
        </BaseRow>
      </BaseCol>

      <S.BurgerCol>
        <S.MobileBurger onClick={toggleSider} isCross={isSiderOpened} />
      </S.BurgerCol>
    </BaseRow>
  )
}
