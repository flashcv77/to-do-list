import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import startImg from '../public/images/nextjs_pics/with_btn_no_bg.png'
import Layout from '../components/layout/Layout'
import { Progress } from 'antd'


export default function Home() {
  return (
    <div className={styles.container}>
      <Layout home>
        <main className={styles.main}>
          <Link href="./login">
            <a>
              <Image src={startImg} alt="start" />
            </a>
          </Link>
        </main>
        <footer className={styles.footer}>
          <Link href="http://localhost:3000/">
            <a
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                Andriy Martynyuk
              </span>
            </a>
          </Link>
        </footer>
      </Layout>
    </div>
  )
}
