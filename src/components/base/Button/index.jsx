import Link from 'next/link'
import styles from './button.module.scss'

export default function Button({ children, ...props }) {
  return <button {...props}>{children}</button>
}

export function InternalLink({ href, children }) {
  return (
    <Link href={href} className={styles.link}>{children}</Link>
  )
}

export function InternalLinkNav({ href, children }) {
  return (
    <Link href={href} className={`${styles.link}`}>{children}</Link>
  )
}

export function InternalLinkTC({ href, children }) {
  return (
    <Link href={href} className={styles.tc_internal_link}>{children}</Link>
  )
}

export function ExternalLink({ children, href, ...props }) {
  return (
    <a className={styles.link} target="_blank" href={href} {...props}>
      {children}
    </a>
  )
}

export function HeaderExternalLink({ children, href, ...props }) {
  return (
    <a className={`${styles.link} ${styles.header}`} target="_blank" href={href} {...props}>
      {children}
    </a>
  )
}

export function HeaderInternalLink({ href, children }) {
  return (
    <Link href={href} className={`${styles.link} ${styles.header}`}>{children}</Link>
  )
}
