import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

interface LoadingProps {
  size?: 'small' | 'default' | 'large' | undefined
  tip?: React.ReactNode
}

export const Loading: React.FC<LoadingProps> = ({ tip, size }) => {
  return (
    <SpinnerContainer>
      <Spin tip={tip} size={size} />
    </SpinnerContainer>
  )
}

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
