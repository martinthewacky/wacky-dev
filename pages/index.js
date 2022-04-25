import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Wacky Dev: The Home of The Wackiest Dev Alive</title>
        <meta
          name="description"
          content="The home of Wacky Dev welcomes you with unbelievable gratitude."
        />
      </Head>
      <div className="w-full h-full">
        <section className="w-full px-3">
          <h1 className="">WELCOME</h1>
          <h2 className="">WEB TRAVERSER!</h2>
        </section>
      </div>
    </Layout>
  );
}
