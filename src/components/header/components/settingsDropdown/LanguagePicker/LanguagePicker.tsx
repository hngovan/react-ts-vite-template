import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { RadioBtn } from '../SettingsOverlay/SettingsOverlay.styles'
import { BaseRadio } from '@/components/common/BaseRadio/BaseRadio'
import { BaseSpace } from '@/components/common/BaseSpace/BaseSpace'

export const LanguagePicker: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <BaseRadio.Group defaultValue={language} onChange={e => setLanguage(e.target.value)}>
      <BaseSpace direction='vertical'>
        <RadioBtn value='en'>
          <BaseSpace align='center'>English</BaseSpace>
        </RadioBtn>
        <RadioBtn value='jp'>
          <BaseSpace align='center'>Japan</BaseSpace>
        </RadioBtn>
      </BaseSpace>
    </BaseRadio.Group>
  )
}
