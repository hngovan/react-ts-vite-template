import React from 'react'
import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown'
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown'
import { Row, Col } from 'antd'

export const DesktopHeader: React.FC = () => {
  return (
    <Row justify='space-between' align='middle'>
      <Col></Col>
      <Col xl={8} xxl={7}>
        <Row align='middle' justify='end' gutter={[5, 5]}>
          <Col>
            <SettingsDropdown />
          </Col>
          <Col>
            <ProfileDropdown />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
