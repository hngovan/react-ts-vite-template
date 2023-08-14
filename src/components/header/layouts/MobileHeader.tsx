import { Row, Col } from 'antd'
import React from 'react'
import { ProfileDropdown } from '../components/profileDropdown/profileDropdown'

export const MobileHeader: React.FC = () => {
  return (
    <Row justify='space-between' align='middle'>
      <Col xl={8} xxl={7}>
        <Row align='middle' justify='end' gutter={[5, 5]}>
          <Col></Col>
          <Col>
            <ProfileDropdown />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}
