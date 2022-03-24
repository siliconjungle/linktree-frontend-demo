import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1>Linktree demo</h1>
      <Link href="/siliconjungle">
        <a>Profile page</a>
      </Link>
    </div>
  )
}

export default Home
