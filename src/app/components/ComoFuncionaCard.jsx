export function ComoFuncionaCard({ children, title, text }) {
  return (
    <div className="flex flex-col justify-center items-center w-80 text-center">
      <div className="bg-blue-950 w-16 h-16 flex  justify-center items-center text-white">
        {children}
      </div>
      <div>
        <p className="text-xl font-semibold py-4 text-blue-950">{title}</p>
        <p className="text-zinc-600">
          {text}
        </p>
      </div>
    </div>
  );
}