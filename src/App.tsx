import 'antd/dist/reset.css'
import GlobalStyle from '@/styles/GlobalStyle'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider, theme } from 'antd'
import { useLanguage } from './hooks/useLanguage'
import { AppRouter } from '@/components/router/AppRouter'
import enUS from 'antd/lib/locale/en_US'
import jaJP from 'antd/lib/locale/ja_JP'
import { themeObject } from './styles/themes/themeVariables'
import { useAppSelector } from './hooks/reduxHooks'
import { useThemeWatcher } from './hooks/useThemeWatcher'

const App: React.FC = () => {
  const { language } = useLanguage()
  const themeGloble = useAppSelector(state => state.theme.theme)

  useThemeWatcher()

  return (
    <>
      <meta name='theme-color' content={themeObject[themeGloble].primary} />
      <GlobalStyle />
      <HelmetProvider>
        <ConfigProvider
          locale={language === 'en' ? enUS : jaJP}
          theme={{
            algorithm: themeGloble === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
          }}
        >
          <AppRouter />
        </ConfigProvider>
      </HelmetProvider>
    </>
  )
}

export default App
