import './App.css'
import 'antd/dist/reset.css'
import { HelmetProvider } from 'react-helmet-async'
import { ConfigProvider } from 'antd'
import { useLanguage } from './hooks/useLanguage'
import enUS from 'antd/lib/locale/en_US'
import jaJP from 'antd/lib/locale/ja_JP'
import { AppRouter } from '@/components/router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
// import { useAppSelector } from './hooks/reduxHooks'

const App: React.FC = () => {
  const { language } = useLanguage()
  // const theme = useAppSelector(state => state.theme.theme)

  return (
    <>
      {/* <meta name='theme-color' content={themeObject[theme].primary} /> */}
      <HelmetProvider>
        <BrowserRouter>
          <ConfigProvider locale={language === 'en' ? enUS : jaJP}>
            <AppRouter />
          </ConfigProvider>
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
