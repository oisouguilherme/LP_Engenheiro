import Link from "next/link";

export function FaixaOrcamento() {
  return (
    <div className="bg-laranja-400 text-white">
      <div className="max-w-6xl mx-auto py-8 flex flex-col gap-4 md:flex-row justify-between items-center px-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">ORÇAMENTO RÁPIDO E SEM ENROLAÇÃO</h2>
          <p>
          Estamos prontos para transformar sua visão em números concretos. <br /> Entre em contato conosco para um orçamento que atenda às suas necessidades e objetivos.
          </p>
          <p className="italic">"Sua obra em boas mãos"</p>
        </div>
        <Link href={"#"} className="bg-blue-950 hover:bg-blue-900 duration-300 px-16 py-2">ORÇAMENTO</Link>
      </div>
    </div>
  );
}
