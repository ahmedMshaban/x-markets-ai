
import EnhanceMarket from "@/components/home/EnhanceMarket";
import CreateMarket from "@/components/home/CreateMarket";
import ResolutionMethod from "@/components/home/ResolutionMethod";
import { Header, Hero, PoweredBy } from "./components";

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
      </main>
    </>
  );
}
