import styled from 'styled-components'
import { media } from '@/styles/themes/constants'
import { Typography, Divider } from 'antd'

export const Text = styled(Typography.Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 0.875rem;
  font-weight: 600;

  & > a {
    display: block;
  }

  ${`@media only screen and ${media.md}`} {
    font-size: 1rem;
  }
`

export const ItemsDivider = styled(Divider)`
  margin: 0;
`
