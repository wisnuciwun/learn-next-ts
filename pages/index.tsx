import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
      <Layout>
        <h1 style={{ backgroundColor: 'turquoise', padding: '10px' }}><em>Wilujeng Sumping  !</em></h1>
      </Layout>
  )
}

export default Home
