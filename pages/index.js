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
      <div className="w-full h-full overflow-y-scroll">
        <section className="w-full px-5">
          <h1 className="text-6xl font-extrabold text-center">WELCOME</h1>
          <br />
          <h2 className="text-4xl font-semibold text-center">WEB TRAVERSER!</h2>
          <br />
          <br />
          <h4 className="text-2xl text-neutral-600">
            Quite a fortune that you happened to navigate your way to my domain.
          </h4>
          <br />
          <br />
          <p>
            Please explore some, navigation is at the bottom (wacky, I know!)
            and it has a theme toggle too.
          </p>
          <br />
          <p>
            I have tried to make this place as user-friendly as possible, but
            alas, I'm still human.
          </p>
          <br />
          <p>
            So please, if you happen to cross paths with an issue or a bug, do
            not engage. I repeat, DO NOT ENGAGE! Unless you have a death wish.
          </p>
          <br />
          <p>
            Instead, please fill out this form and I'll be on it (eventually).
            It will take a while, but it's nothing I can't handle.
          </p>
          <br />
          <p>
            Need a starting point? Check out some of my favorite projects here.
            Or read a little about me.
          </p>
        </section>
      </div>
    </Layout>
  );
}
