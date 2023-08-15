import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Card, Button, Row, Col, Space } from 'antd'
import { useTranslation } from 'react-i18next'

const AlertsPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle>{t('common.profilePage')}</PageTitle>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title='Basic Button'>
            <Space size={24} wrap>
              <Button type='primary'>Primary Button</Button>
              <Button>Default Button</Button>
              <Button type='dashed'>Dashed Button</Button>
              <Button type='text'>Text Button</Button>
              <Button type='link'>Link Button</Button>
            </Space>
          </Card>
        </Col>
        <Col span={24}>
          <Card title='Button Size'>
            <Space size={24} wrap>
              <Button size='small'>small</Button>
              <Button size='middle'>middle</Button>
              <Button size='large'>large</Button>
            </Space>
          </Card>
        </Col>
        <Col span={24}>
          <Card title='Danger Buttons'>
            <Space size={24} wrap>
              <Button type='primary' danger>
                Primary
              </Button>
              <Button danger>Default</Button>
              <Button type='dashed' danger>
                Dashed
              </Button>
              <Button type='text' danger>
                Text
              </Button>
              <Button type='link' danger>
                Link
              </Button>
            </Space>
          </Card>
        </Col>
        <Col span={24}>
          <Card title='Button Block'>
            <Space direction='vertical' style={{ width: '100%' }}>
              <Button type='primary' block>
                Primary
              </Button>
              <Button block>Default</Button>
              <Button type='dashed' block>
                Dashed
              </Button>
              <Button disabled block>
                disabled
              </Button>
              <Button type='text' block>
                text
              </Button>
              <Button type='link' block>
                Link
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default AlertsPage
