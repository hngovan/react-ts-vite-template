import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { Button, Result } from 'antd'

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
          <Button type='primary' onClick={() => (window.location.href = '/')}>
            Back Home
          </Button>
        }
      />
    </>
  )
}

export default Error404Page
