import Image from "next/image";
import Perfil from "../../assets/perfil.jpg";

export function SobreMim() {
  return (
    <div id="sobre" className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 py-24 px-4">
      <div className="flex md:justify-end">
        <Image src={Perfil} alt="foto de ..." className="w-96 object-cover" />
      </div>
      <div className="text-lg text-zinc-600 flex flex-col gap-4">
        <h2 className="text-orange-500 text-2xl uppercase font-semibold">
          Sobre Mim
        </h2>
        <p>
          Minha jornada como engenheiro é uma história de paixão, perseverança e
          realizações. Desde o início, fui cativado pela maravilha da engenharia
          e pela capacidade de criar soluções inovadoras para desafios
          complexos. Ao longo dos anos, enfrentei projetos desafiadores que me
          levaram a explorar os limites da criatividade e da engenhosidade. Cada
          edifício que concebi, cada ponte que projetei e cada problema que
          resolvi moldaram minha experiência e minha determinação.
        </p>
        <p>
          Com uma carreira dedicada à busca constante da excelência, estou
          comprometido em proporcionar resultados excepcionais aos meus
          clientes. Meu objetivo é transformar sonhos em realidade, criando
          estruturas que não apenas resistem ao teste do tempo, mas também
          inspiram gerações futuras. Estou ansioso para continuar minha jornada,
          enfrentando novos desafios e construindo um mundo melhor através da
          engenharia.
        </p>
      </div>
    </div>
  );
}
