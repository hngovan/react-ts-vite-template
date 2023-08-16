import { useState } from 'react'
import { HeaderActionWrapper } from '../../Header.styles'
import { SettingsOverlay } from './SettingsOverlay/SettingsOverlay'
import { SettingOutlined } from '@ant-design/icons'
import { Button, Popover } from 'antd'

export const SettingsDropdown: React.FC = () => {
  const [isOpened, setOpened] = useState(false)

  return (
    <Popover content={<SettingsOverlay />} trigger='click' onOpenChange={setOpened}>
      <HeaderActionWrapper>
        <Button size='large' icon={<SettingOutlined />} type={isOpened ? 'primary' : 'text'} />
      </HeaderActionWrapper>
    </Popover>
  )
}
