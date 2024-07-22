import {
  Header,
  Hero,
  PoweredBy,
  Footer,
  EnhanceMarket,
  CreateMarket,
  ResolutionMethod,
  EarnWithMarket,
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
        <EarnWithMarket />
        <Footer />
      </main>
    </>
  );
}
