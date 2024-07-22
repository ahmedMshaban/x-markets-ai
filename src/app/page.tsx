import {
  Header,
  Hero,
  PoweredBy,
  Footer,
  EnhanceMarket,
  CreateMarket,
  ResolutionMethod,
} from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PoweredBy />
        <CreateMarket />
        <EnhanceMarket />
        <ResolutionMethod />
        <Footer />
      </main>
    </>
  );
}
