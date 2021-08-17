import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>D for Dilly Dally</title>
        <meta name="description" content="I'm busy dilly dallying." />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😎</text></svg>" />
      </Head>

      <main>
        <h1>Hi</h1>
      </main>
    </div>
  )
}

export default Home
