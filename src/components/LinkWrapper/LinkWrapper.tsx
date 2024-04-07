import { LinkProps, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface Props {
  linkProps: LinkProps
  render: ({
    isActive,
    linkProps,
  }: {
    isActive: boolean
    linkProps: LinkProps
  }) => ReactNode
}

export const LinkWrapper = ({ linkProps, render }: Props) => {
  const location = useLocation()
  const { to } = linkProps
  const pathname = typeof to === 'string' ? to : to.pathname
  const isActive = location.pathname === pathname
  return render({ isActive, linkProps })
}
