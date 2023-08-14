import 'antd/dist/reset.css'
import GlobalStyle from '@/styles/GlobalStyle'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd'
import { useLanguage } from './hooks/useLanguage'
import { AppRouter } from '@/components/router/AppRouter'
import enUS from 'antd/lib/locale/en_US'
import jaJP from 'antd/lib/locale/ja_JP'
// import { useAppSelector } from './hooks/reduxHooks'

const App: React.FC = () => {
  const { language } = useLanguage()
  // const theme = useAppSelector(state => state.theme.theme)

  return (
    <>
      {/* <meta name='theme-color' content={themeObject[theme].primary} /> */}
      <GlobalStyle />
      <HelmetProvider>
        <ConfigProvider locale={language === 'en' ? enUS : jaJP}>
          <AppRouter />
        </ConfigProvider>
      </HelmetProvider>
    </>
  )
}

export default App
