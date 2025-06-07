export default function Projetos() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl mb-4">Projetos Desenvolvidos</h2>

      <section>
        <h3 className="text-2xl text-red-500">Residência Porto Digital</h3>
        <ul className="list-disc list-inside">
          <li>Processo criativo e colaboração com equipes.</li>
          <li>3º lugar com o projeto Lola e Lia no Kick Off.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl text-red-500">Beg Inovações</h3>
        <ul className="list-disc list-inside">
          <li>Desenvolvimento Low Code com integração ágil.</li>
          <li>Prototipagem funcional e reuniões com stakeholders.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl text-red-500">Projeto Ferreira Costa - Banco de Dados</h3>
        <ul className="list-disc list-inside">
          <li>Aplicação de SQL e PL/SQL em listas de exercícios e desafio final.</li>
          <li>Colaboração entre a equipe para resolver o desafio proposto.</li>
          <li>Uso prático de banco de dados em ambiente real.</li>
        </ul>
      </section>
    </main>
  );
}