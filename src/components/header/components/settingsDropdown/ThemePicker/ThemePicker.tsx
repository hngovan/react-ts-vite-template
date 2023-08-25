import { MoonSunSwitch } from '@/components/common/MoonSunSwitch/MoonSunSwitch'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { ThemeType } from '@/interfaces/interfaces'
import { setTheme } from '@/store/slices/themeSlice'
import React from 'react'

export const ThemePicker: React.FC = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(state => state.theme.theme)

  const handleClickButton = (theme: ThemeType) => {
    dispatch(setTheme(theme))
  }

  return (
    <MoonSunSwitch
      isMoonActive={theme === 'dark'}
      onClickMoon={() => handleClickButton('dark')}
      onClickSun={() => handleClickButton('light')}
    />
  )
}
