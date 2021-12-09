import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <header className={styles.header}>

      </header>
      <main>{children}</main>

    </div>
  )
}