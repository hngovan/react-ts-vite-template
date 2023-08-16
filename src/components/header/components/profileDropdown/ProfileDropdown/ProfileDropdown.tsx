import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay'
import { useAppSelector } from '@/hooks/reduxHooks'
import { useResponsive } from '@/hooks/useResponsive'
import * as S from './ProfileDropdown.styles'
import { Row, Col, Avatar, Popover } from 'antd'

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive()

  const user = useAppSelector(state => state.user.user)

  return user ? (
    <Popover content={<ProfileOverlay />} trigger='click'>
      <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align='middle'>
        <Col>
          <Avatar src={user.imgUrl} alt='Admin' shape='circle' size={40} />
        </Col>
        {isTablet && (
          <Col>
            <span>{`${user.firstName} ${user.lastName}`}</span>
          </Col>
        )}
      </S.ProfileDropdownHeader>
    </Popover>
  ) : null
}
