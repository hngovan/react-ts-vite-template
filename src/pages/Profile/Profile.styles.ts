import { BORDER_RADIUS, media } from '@/styles/themes/constants'
import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.75rem 1.25rem;
  border-radius: ${BORDER_RADIUS};
  height: 100%;

  background-color: var(--background-color);

  ${`@media only screen and ${media.md}`} {
    padding: 2.5rem 6.25rem 6.25rem;
  }

  ${`@media only screen and ${media.xl}`} {
    flex-direction: row-reverse;
    justify-content: center;
    padding: 12.5rem 3.5rem;
  }
`
