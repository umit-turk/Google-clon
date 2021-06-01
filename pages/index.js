import Head from 'next/head'
import Avatar from '../components/Avatar'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     

     {/* Header */}
     <header className="flex w-full p-5 justify-between text-sm text-gray-700">
       {/* left */}
       <div className="flex space-x-4">
        <p className="link">About</p>
        <p className="link">Store</p>
       </div>

       {/* right */}

       <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        {/* Icon */}

        {/* Avatar */}
        <Avatar url="https://lh3.googleusercontent.com/ogw/ADGmqu-pPBzu3iEXf-iWrNKRSJYZZBS2uUP3rkVnXpNT=s32-c-mo" />

        

       </div>
     </header>

     {/* body */}

      {/* footer */}
    </div>
  )
}
