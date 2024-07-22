import EnhanceMarket from "@/components/home/EnhanceMarket";
import { Header } from "./components";
import CreateMarket from "@/components/home/CreateMarket";
import ResolutionMethod from "@/components/home/ResolutionMethod";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CreateMarket />
        <EnhanceMarket />
        <ResolutionMethod />
      </main>
    </>
  );
}
