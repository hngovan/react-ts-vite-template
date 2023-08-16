import { Outlet } from 'react-router-dom'
import * as S from './AuthLayout.styles'

const AuthLayout: React.FC = () => {
  return (
    <S.Wrapper>
      <S.LoginWrapper>
        <Outlet />
      </S.LoginWrapper>
    </S.Wrapper>
  )
}

export default AuthLayout
