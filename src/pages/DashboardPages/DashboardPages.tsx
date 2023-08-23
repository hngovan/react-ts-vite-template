import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

const DashboardPages: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle>{t('common.dashboard')}</PageTitle>
      <Title>{t('common.dashboard')}</Title>
    </>
  )
}

export default DashboardPages
