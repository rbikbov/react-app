import { Link } from 'react-router-dom'
import { LinkWrapper } from '../LinkWrapper/LinkWrapper'
import styles from './LinksList.module.css'
import { FC } from 'react'

interface LinkItem {
  text: string
  path: string
}

interface Props {
  links: LinkItem[]
}

export const LinksList: FC<Props> = ({ links }: Props) => {
  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <LinkWrapper
          key={link.path}
          linkProps={{ to: link.path }}
          render={({ isActive, linkProps }) => (
            <li
              className={[
                styles.links__item,
                isActive ? styles.links__item_active : '',
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
