import Head from "next/head";

const Layout = ({ children, metaDesc }) => {
  return (
    <div className="w-full h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={metaDesc} />
      </Head>
      <header className="w-full h-16 bg-white/70"></header>
      <footer className="w-full h-16 bg-white/70 fixed bottom-0"></footer>
    </div>
  );
};

export default Layout;
