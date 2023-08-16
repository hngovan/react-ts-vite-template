import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@/styles/themes/constants'
import { styled } from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const FormWrapper = styled.div`
  padding: 2.5rem;
  width: 31.75rem;
  overflow: auto;
  background-color: rgba(var(--background-rgb-color), 0.93);
  border-radius: ${BORDER_RADIUS};
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);

  ${`@media only screen and ${media.xs}`} {
    padding: 2.5rem 1.25rem;
    width: 20.75rem;
    max-height: calc(100vh - 3rem);
  }

  ${`@media only screen and ${media.md}`} {
    padding: 2.5rem;
    width: 31.75rem;
    max-height: calc(100vh - 3rem);
  }
`

export const FormTitle = styled.div`
  color: var(--primary-color);

  ${`@media only screen and ${media.xs}`} {
    margin-bottom: 0.625rem;
    font-size: ${FONT_SIZE.lg};
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 1.5625rem;
  }

  ${`@media only screen and ${media.md}`} {
    margin-bottom: 0.875rem;
    font-size: ${FONT_SIZE.xxl};
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 1.9375rem;
  }

  ${`@media only screen and ${media.xl}`} {
    margin-bottom: 0.9375rem;
    font-size: ${FONT_SIZE.xxxl};
    font-weight: ${FONT_WEIGHT.extraBold};
    line-height: 2.125rem;
  }
`

export const FooterWrapper = styled.div`
  margin-top: 1.25rem;
  text-align: center;
`

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Text = styled.span`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.regular};
`

export const LinkText = styled(Text)`
  text-decoration: underline;
  color: var(--primary-color);
`
