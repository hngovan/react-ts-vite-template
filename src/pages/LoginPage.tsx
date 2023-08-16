import { useTranslation } from 'react-i18next'
import { PageTitle } from '@/components/common/PageTitle/PageTitle'
import { LoginForm } from '@/components/auth/LoginForm/LoginForm'

export const LoginPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle>{t('common.login')}</PageTitle>
      <LoginForm />
    </>
  )
}
