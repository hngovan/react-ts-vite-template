import * as S from './MainHeader.styles'

interface MainHeaderProps {
  children?: React.ReactNode
}

export const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  return <S.Header>{children}</S.Header>
}
