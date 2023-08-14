import { BaseLayout } from '@/components/common/BaseLayout/BaseLayout'
import { LAYOUT } from '@/styles/themes/constants'
import { media } from '@/styles/themes/constants'
import styled from 'styled-components'

export const Header = styled(BaseLayout.Header)`
  line-height: 1.5;
  background: var(--layout-header-bg-color);

  ${`@media only screen and ${media.md}`} {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
  }
`
