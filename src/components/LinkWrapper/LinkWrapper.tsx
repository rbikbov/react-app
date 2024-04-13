import { LinkProps, useLocation, useNavigation } from 'react-router-dom'

interface Props {
  linkProps: LinkProps
  render: ({
    isActive,
    isLoading,
    linkProps,
  }: {
    isActive: boolean
    isLoading: boolean
    linkProps: LinkProps
  }) => React.ReactNode
}

export const LinkWrapper = ({ linkProps, render }: Props) => {
  const location = useLocation()
  const navigation = useNavigation()
  const { to } = linkProps
  const pathname = typeof to === 'string' ? to : to.pathname
  const isActive = location.pathname === pathname
  const isLoading = navigation.location
    ? navigation.location.pathname === pathname
    : false
  return render({ isActive, isLoading, linkProps })
}
