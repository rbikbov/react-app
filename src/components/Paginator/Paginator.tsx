import { useMemo } from 'react'
import styles from './Paginator.module.css'

interface Props {
  itemsCount: number
  pageSize: number
  currentPage: number
  loading: boolean
  onPageChange: (n: number) => void
}

const Paginator: React.FC<Props> = ({
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
        className={[
          styles.paginator__item,
          isPrevDisabled ? styles.paginator__item_disabled : '',
          loading ? styles.paginator__item_disabled : '',
        ].join(' ')}
        onClick={() =>
          !isPrevDisabled && onPageChangeWithLoading(currentPage - 1)
        }
      >
        &lt;
      </li>
      {pages.map((page) => (
        <li
          className={[
            styles.paginator__item,
            page === currentPage ? styles.paginator__item_active : '',
            loading ? styles.paginator__item_disabled : '',
          ].join(' ')}
          key={page}
          onClick={() => onPageChangeWithLoading(page)}
        >
          {page}
        </li>
      ))}
      <li
        className={[
          styles.paginator__item,
          isNextDisabled ? styles.paginator__item_disabled : '',
          loading ? styles.paginator__item_disabled : '',
        ].join(' ')}
        onClick={() =>
          !isNextDisabled && onPageChangeWithLoading(currentPage + 1)
        }
      >
        &gt;
      </li>
    </ul>
  )
}

export default Paginator
