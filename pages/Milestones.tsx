import React from 'react'
import Layout from '../components/Layout'
import styles from './Milestones.module.css'

interface MilestonesProps {
  milestones: [{
    title: String,
    id: number
  }]
}

export default function Milestones(props: MilestonesProps) {
  let { milestones } = props
  return (
    <div style={{ backgroundColor: 'tomato', width: '100%', height: '100vh', overflowY: 'auto' }}>
      <p style={{ color: 'black' }}>
        {milestones.map(x => {
          return (
            <div key={x.id} className={styles.card}>
              <p>{x.title}</p>
            </div>
          )
        })}
      </p>
    </div>

  )
}

export async function getServerSideProps() {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts')
  let milestones = await result.json()

  return {
    props: {
      milestones,
    }
  }
}

