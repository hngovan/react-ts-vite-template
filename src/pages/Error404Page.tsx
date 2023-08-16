import { useTranslation } from 'react-i18next'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Result } from 'antd'
import { Link } from 'react-router-dom'

const Error404Page: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle>{t('common.clientError')}</PageTitle>
      <Result
        status='404'
        title='404'
        subTitle={t('error404.notFound')}
        extra={
          <Link to='/' className='ant-btn ant-btn-link'>
            {t('error404.comeBack')}
          </Link>
        }
      />
    </>
  )
}

export default Error404Page
