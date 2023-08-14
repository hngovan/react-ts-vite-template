import styled from 'styled-components'
import { LAYOUT, media } from '@/styles/themes/constants'
import { BaseLayout } from '@/components/common/BaseLayout/BaseLayout'

export default styled(BaseLayout.Content)`
  padding: ${LAYOUT.mobile.paddingVertical} ${LAYOUT.mobile.paddingHorizontal};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${`@media only screen and ${media.md}`} {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
  }
`
