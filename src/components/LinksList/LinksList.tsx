import { Link } from 'react-router-dom'
import { LinkWrapper } from '../LinkWrapper/LinkWrapper'
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
              className={[
                styles.links__item,
                isActive ? styles.links__item_active : '',
                isLoading ? styles.links__item_loading : '',
              ].join(' ')}
            >
              <Link {...linkProps}>{link.text}</Link>
            </li>
          )}
        />
      ))}
    </ul>
  )
}
