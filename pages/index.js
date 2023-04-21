import Center from "@/components/Center";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import request from "@/utility/request";
import Head from "next/head";


export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      <Header/>
      
      <Navbar/>

      <Center req={results}/>
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;

  const req = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: req.results,
    },
  };
}