import { BannerMain } from "./components/BannerMain";
import { ComoFunciona } from "./components/ComoFunciona";
import { Depoimentos } from "./components/Depoimentos";
import { FaixaOrcamento } from "./components/FaixaOrcamento";
import { Projetos } from "./components/Projetos";
import { ProjetosImages } from "./components/ProjetosImages";
import { SobreMim } from "./components/SobreMim";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <div className="bg-[url('/casa1.webp')] bg-cover">
      <Header />
      <BannerMain />
    </div>
      <SobreMim />
      <Projetos />
      <FaixaOrcamento />
      <ComoFunciona />
      <ProjetosImages />
      <Depoimentos />
      <Footer />
    </>
  )
}
