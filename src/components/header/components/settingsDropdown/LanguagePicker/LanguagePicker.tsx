import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { RadioBtn } from '../SettingsOverlay/SettingsOverlay.styles'
import { Space, Radio } from 'antd'

export const LanguagePicker: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <Radio.Group defaultValue={language} onChange={e => setLanguage(e.target.value)}>
      <Space direction='vertical'>
        <RadioBtn value='en'>
          <Space align='center'>English</Space>
        </RadioBtn>
        <RadioBtn value='jp'>
          <Space align='center'>Japan</Space>
        </RadioBtn>
      </Space>
    </Radio.Group>
  )
}
