import Link from "next/link";

export function BannerMain() {
  return (
    <div className="">
      <div className="bg-black bg-opacity-80">
        <div className="max-w-6xl mx-auto grid grid-cols-2 py-24">
          <div className="flex flex-col items-start gap-8">
            <h1 className="uppercase text-5xl font-semibold text-laranja-400">
              projetos de interiores e arquitetônicos exclusivos para sua
              família
            </h1>
            <p className="text-white">
            Com um compromisso inabalável com a qualidade, estou pronto para enfrentar os desafios mais complexos e transformar ideias em estruturas sólidas que moldam nosso futuro. Explore meu trabalho e descubra como podemos construir juntos.
            </p>
            <Link
              href={"#"}
              className="bg-laranja-400 hover:bg-orange-500 duration-300 text-white px-28 py-4 uppercase"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
