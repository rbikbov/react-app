import { useMemo } from 'react'
import classNames from 'classnames'
import styles from './Paginator.module.css'

interface Props {
  itemsCount: number
  pageSize: number
  currentPage: number
  loading: boolean
  onPageChange: (n: number) => void
}

export const Paginator: React.FC<Props> = ({
  itemsCount,
  pageSize,
  currentPage,
  loading,
  onPageChange,
}: Props): React.ReactElement => {
  const pagesCount = useMemo(
    () => Math.ceil(itemsCount / pageSize),
    [itemsCount, pageSize],
  )
  const pages = useMemo(
    () => new Array(pagesCount).fill(0).map((_, index) => index + 1),
    [pagesCount],
  )
  const isPrevDisabled = useMemo(
    () => pagesCount < 2 || currentPage === 1,
    [pagesCount, currentPage],
  )
  const isNextDisabled = useMemo(
    () => pagesCount < 2 || currentPage === pagesCount,
    [pagesCount, currentPage],
  )
  const onPageChangeWithLoading = (page: number) => {
    if (loading) return
    onPageChange(page)
  }
  return (
    <ul className={styles.paginator}>
      <li
        className={classNames(styles.paginator__item, {
          [styles.paginator__item_disabled]: isPrevDisabled || loading,
        })}
        onClick={() =>
          !isPrevDisabled && onPageChangeWithLoading(currentPage - 1)
        }
      >
        &lt;
      </li>
      {pages.map((page) => (
        <li
          className={classNames(styles.paginator__item, {
            [styles.paginator__item_active]: page === currentPage,
            [styles.paginator__item_disabled]: loading,
          })}
          key={page}
          onClick={() => onPageChangeWithLoading(page)}
        >
          {page}
        </li>
      ))}
      <li
        className={classNames(styles.paginator__item, {
          [styles.paginator__item_disabled]: isNextDisabled || loading,
        })}
        onClick={() =>
          !isNextDisabled && onPageChangeWithLoading(currentPage + 1)
        }
      >
        &gt;
      </li>
    </ul>
  )
}
