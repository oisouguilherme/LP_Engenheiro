import { ComoFuncionaCard } from "./ComoFuncionaCard";

export function ComoFunciona() {
  return (
    <div id="ComoFunciona" className="max-w-6xl mx-auto text-center py-12">
      <h2 className="text-3xl font-semibold">COMO FUNCIONA</h2>
      <p className="text-xl py-8">SEU PROJETO SEM COMPLICAÇÃO EM 3 ETAPAS</p>
      <div className="flex gap-8 justify-center items-start flex-wrap">
        <ComoFuncionaCard
        title={"Rotina & Medidas"}
          text={`Iniciamos cada projeto com uma análise meticulosa e uma rotina de medidas precisas.Nossos engenheiros e técnicos dedicados garantem que a base de cada projeto seja sólida e precisa, um passo essencial em direção à excelência.`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-chat-left-text"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
          </svg>
        </ComoFuncionaCard>
        <ComoFuncionaCard
          title={"Projeto real"}
          text={`Do papel à realidade, nossos projetos ganham vida com criatividade e precisão. Trabalhamos incansavelmente para criar soluções arquitetônicas que não apenas atendem às suas necessidades, mas também superam suas expectativas. Seu sonho, nosso compromisso.`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
        </ComoFuncionaCard>
        <ComoFuncionaCard
          title={"Manual Executivo Ideal"}
          text={`Nosso compromisso com a excelência vai além da entrega do projeto. Criamos um manual executivo que é o guia para o sucesso contínuo. Cada detalhe, cada processo, e cada inovação são documentados para assegurar a durabilidade e eficiência do seu empreendimento.`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-file-earmark"
            viewBox="0 0 16 16"
          >
            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
          </svg>
        </ComoFuncionaCard>
      </div>
    </div>
  );
}
