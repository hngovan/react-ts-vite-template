import { LAYOUT } from '@/styles/themes/constants'
import { media } from '@/styles/themes/constants'
import { Layout } from 'antd'
import styled from 'styled-components'

export const Header = styled(Layout.Header)`
  height: 4.25rem;
  margin: 0 ${LAYOUT.desktop.marginHorizontal};
  padding: 0;
  background: var(--layout-header-bg-color);

  ${`@media only screen and ${media.md}`} {
    line-height: 1.5;
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.desktop.headerHeight};
  }
`
