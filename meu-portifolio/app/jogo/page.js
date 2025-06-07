"use client";
import { useState } from "react";

export default function JogoSenha() {
  const [senha] = useState(() => Math.floor(1000 + Math.random() * 9000).toString());
  const [tentativa, setTentativa] = useState("");
  const [historico, setHistorico] = useState([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(10);
  const [resultado, setResultado] = useState("");
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  const verificar = () => {
    if (jogoFinalizado || tentativa.length !== 4) return;

    const senhaArr = senha.split("");
    const tentativaArr = tentativa.split("");
    let bulls = 0, cows = 0;

    tentativaArr.forEach((d, i) => {
      if (d === senhaArr[i]) bulls++;
      else if (senhaArr.includes(d)) cows++;
    });

    const novaTentativa = { tentativa, bulls, cows };
    const novoHistorico = [novaTentativa, ...historico];
    setHistorico(novoHistorico);
    setTentativasRestantes(t => t - 1);

    if (bulls === 4) {
      setResultado("Parabéns! Você acertou a senha!");
      setJogoFinalizado(true);
    } else if (tentativasRestantes - 1 === 0) {
      setResultado(`Fim de jogo. A senha era ${senha}.`);
      setJogoFinalizado(true);
    }

    setTentativa("");
  };

  const novoJogo = () => {
    window.location.reload();
  };

  return (
    <main className="p-6 max-w-2xl mx-auto space-y-4">
      <h2 className="text-3xl">Jogo da Senha</h2>
      <input
        type="text"
        maxLength={4}
        value={tentativa}
        onChange={(e) => setTentativa(e.target.value)}
        className="text-black p-2 rounded w-full"
        placeholder="Digite uma senha de 4 dígitos"
        disabled={jogoFinalizado}
      />
      <button onClick={verificar} className="bg-red-600 px-4 py-2 rounded hover:bg-red-800">
        Verificar
      </button>
      <button onClick={() => alert(`Senha atual: ${senha}`)} className="ml-2 underline">
        Mostrar senha
      </button>

      <p>Tentativas restantes: {tentativasRestantes}</p>
      {resultado && <p className="text-xl font-bold">{resultado}</p>}

      {jogoFinalizado && (
        <button onClick={novoJogo} className="mt-4 bg-white text-black px-4 py-2 rounded">
          Novo Jogo
        </button>
      )}

      <ul className="mt-4 space-y-2">
        {historico.map((item, index) => (
          <li key={index}>
            <span className="text-red-500">{item.tentativa}</span>: {item.bulls} bulls, {item.cows} cows
          </li>
        ))}
      </ul>
    </main>
  );
}