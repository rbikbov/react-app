import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { LinkWrapper } from '~shared/ui/LinkWrapper'
import styles from './LinksList.module.css'

interface LinkItem {
  text: string
  path: string
}

interface Props {
  links: LinkItem[]
}

export const LinksList: React.FC<Props> = ({ links }: Props) => {
  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <LinkWrapper
          key={link.path}
          linkProps={{ to: link.path }}
          render={({ isActive, isLoading, linkProps }) => (
            <li
              className={classNames(styles.links__item, {
                [styles.links__item_active]: isActive,
                [styles.links__item_loading]: isLoading,
              })}
            >
              <Link {...linkProps}>{link.text}</Link>
            </li>
          )}
        />
      ))}
    </ul>
  )
}
