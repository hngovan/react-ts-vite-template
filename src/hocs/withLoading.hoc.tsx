import { Suspense } from 'react'
import { Loading } from '@/components/common/Loading/Loading'

type ReturnType<T> = (props: T) => JSX.Element

export const withLoading = <T extends object>(Component: React.ComponentType<T>): ReturnType<T> => {
  return (props: T) => (
    <Suspense fallback={<Loading size='large' />}>
      <Component {...props} />
    </Suspense>
  )
}
