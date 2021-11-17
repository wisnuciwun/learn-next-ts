import type { NextPage } from 'next'
import Menu from '../components/Menu'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1 className="element" style={{ backgroundColor: 'turquoise' }}><em>Wilujeng Sumping  !</em></h1>
      <Menu/>
    </div>
  )
}

export default Home
