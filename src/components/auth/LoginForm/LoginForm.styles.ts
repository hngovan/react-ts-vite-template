import { FONT_SIZE } from '@/styles/themes/constants'
import { styled } from 'styled-components'

export const RememberMeText = styled.span`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.xs};
`

export const ForgotPasswordText = styled.span`
  color: var(--text-light-color);
  font-size: ${FONT_SIZE.xs};
  text-decoration: underline;
`
