import React from 'react'
import { MoonSunSwitch } from '@/components/common/MoonSunSwitch/MoonSunSwitch'
import { ThemeType } from '@/interfaces/interfaces'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'
import { setTheme } from '@/store/slices/themeSlice'

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
