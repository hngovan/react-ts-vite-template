import styled from 'styled-components'
import { media } from '@/styles/themes/constants'
import { Layout } from 'antd'

export const LayoutMaster = styled(Layout)`
  height: 100vh;
`

export const LayoutMain = styled(Layout)`
  background: var(--layout-body-bg-color);

  ${`@media only screen and ${media.md}`} {
    margin-left: 80px;
  }

  ${`@media only screen and ${media.xl}`} {
    margin-left: unset;
  }
`
