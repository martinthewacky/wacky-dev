import Head from "next/head";

const Layout = ({ children, metaDesc }) => {
  return (
    <div className="w-full h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-full h-16 bg-white/70 fixed top-0"></header>
      <main className="w-full h-full py-16">{children}</main>
      <footer className="w-full h-16 bg-white/70 fixed bottom-0"></footer>
    </div>
  );
};

export default Layout;
