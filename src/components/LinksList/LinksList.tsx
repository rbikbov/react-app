import { Link, NavLink } from 'react-router-dom'
import styles from './LinksList.module.css'

interface Link {
  text: string
  path: string
}

interface Props {
  links: Link[]
}

export const LinksList: React.FC<Props> = ({ links }: Props) => {
  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
        >
          {({ isActive }) => (
            <li
              className={[
                styles.links__item,
                isActive ? styles.links__item_active : '',
              ].join(' ')}
            >
              <span>{link.text}</span>
            </li>
          )}
        </NavLink>
      ))}
    </ul>
  )
}
