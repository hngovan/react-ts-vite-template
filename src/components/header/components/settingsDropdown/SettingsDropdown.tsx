import { useState } from 'react'
import { HeaderActionWrapper } from '../../Header.styles'
import { SettingsOverlay } from './SettingsOverlay/SettingsOverlay'
import { SettingOutlined } from '@ant-design/icons'
import { BaseButton } from '@/components/common/BaseButton/BaseButton'
import { BasePopover } from '@/components/common/BasePopover/BasePopover'

export const SettingsDropdown: React.FC = () => {
  const [isOpened, setOpened] = useState(false)

  return (
    <BasePopover content={<SettingsOverlay />} trigger='click' onOpenChange={setOpened}>
      <HeaderActionWrapper>
        <BaseButton
          size='large'
          icon={<SettingOutlined className='!text-2xl' />}
          type={isOpened ? 'primary' : 'text'}
        />
      </HeaderActionWrapper>
    </BasePopover>
  )
}
