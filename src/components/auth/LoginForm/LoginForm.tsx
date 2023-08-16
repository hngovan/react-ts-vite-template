import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { notificationController } from '@/controllers/notificationController'
import { Button, Checkbox, Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { doLogin } from '@/store/slices/authSlice'
import * as Auth from '@/components/layouts/AuthLayout/AuthLayout.styles'
import * as S from './LoginForm.styles'

interface LoginFormData {
  email: string
  password: string
  remember: boolean
}

export const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const [loading, setLoading] = useState(false)

  const handleSubmit = (values: LoginFormData) => {
    setLoading(true)
    dispatch(doLogin(values))
      .unwrap()
      .then(() => navigate('/'))
      .catch(err => {
        notificationController.error({ message: err.message })
        setLoading(false)
      })
  }

  return (
    <Auth.FormWrapper>
      <Form layout='vertical' onFinish={handleSubmit} requiredMark='optional' initialValues={{ remember: true }}>
        <Auth.FormTitle>{t('common.login')}</Auth.FormTitle>
        <Form.Item
          name='email'
          rules={[
            { required: true, message: t('common.requiredField') },
            {
              type: 'email',
              message: t('common.notValidEmail')
            }
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder={t('common.email')} />
        </Form.Item>
        <Form.Item name='password' rules={[{ required: true, message: t('common.requiredField') }]}>
          <Input prefix={<LockOutlined />} type='password' placeholder={t('common.password')} />
        </Form.Item>
        <Auth.ActionsWrapper>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>{t('login.rememberMe')}</Checkbox>
            </Form.Item>
          </Form.Item>
          <Link to='/auth/forgot-password'>
            <S.ForgotPasswordText>{t('common.forgotPass')}</S.ForgotPasswordText>
          </Link>
        </Auth.ActionsWrapper>
        <Form.Item>
          <Button type='primary' htmlType='submit' loading={loading} block>
            Log in
          </Button>
        </Form.Item>
        <Auth.FooterWrapper>
          <Auth.Text>
            {t('login.noAccount')}{' '}
            <Link to='/auth/sign-up'>
              <Auth.LinkText>{t('common.here')}</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </Form>
    </Auth.FormWrapper>
  )
}
