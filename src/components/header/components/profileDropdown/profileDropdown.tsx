import { useAppSelector } from '@/hooks/reduxHooks'
import { useResponsive } from '@/hooks/useResponsive'
import { Popover, Typography, Divider, Row, Col, Avatar } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const { Text } = Typography

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation()

  return (
    <div {...props}>
      <Text>
        <Link to='/profile'>{t('profile.title')}</Link>
      </Text>
      <Divider />
      <Text>
        <Link to='/logout'>{t('header.logout')}</Link>
      </Text>
    </div>
  )
}

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive()

  const user = useAppSelector(state => state.user.user)

  return user ? (
    <Popover content={<ProfileOverlay />} trigger='click'>
      <Row gutter={[10, 10]} align='middle'>
        <Col>
          <Avatar src={user.imgUrl} alt='User' shape='circle' size={40} />
        </Col>
        {isTablet && (
          <Col>
            <span>{`${user.firstName} ${user.lastName[0]}`}</span>
          </Col>
        )}
      </Row>
    </Popover>
  ) : null
}
