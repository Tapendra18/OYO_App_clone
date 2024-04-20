import Header2 from "@/components/Header2";
import Header1 from "../components/Header1";
import Header3 from "@/components/Header3";
import Image from "next/image";
import Head from "next/head";



const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO : India's Best Online Hotel Booking Site For Sanitized Stay</title>
        <link rel="icon" href="/icon.png"></link>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className="my-10">
          <Image src={'/banner1.avif'} alt="banner1" width={200} height={200} className="h-60 w-full" />
        </div>
        <div className="mb-14">
          <Image src={'/banner2.avif'} alt="banner1" width={200} height={200} className="h-40 w-full" />
        </div>
      </div>
    </div>
  )
}

export default Home;