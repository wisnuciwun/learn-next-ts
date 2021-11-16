import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1 className="element" style={{ backgroundColor: 'turquoise' }}><em>Wilujeng Sumping  !</em></h1>
      <div>
        <ul>
          <li className="trapezoid-left"><Link href="/Welcome">Welcome</Link></li>
          <li className="trapezoid-left"><Link href="/Detail/Other">Other</Link></li>
          <li className="trapezoid-left"><Link href="/Detail">Detail</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Home
