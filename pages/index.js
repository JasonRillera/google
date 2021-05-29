import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Next JS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <header>
        <div>
          <p className="link">About</p>
          <p className="link">Store</p>

        </div>
          <p className="link">Gmail</p>
          <p className="link">Images</p>
        <div>

        </div>
      </header>
      
      {/* BODY */}
      
      
      {/* FOOTER */}


    </div>
  )
}
