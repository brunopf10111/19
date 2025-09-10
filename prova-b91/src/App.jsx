import { useState } from "react";

function App() {
  const [pessoaFisicas, setPessoaFisicas] = useState([
    { id: 1, nome: "Ana Souza", Cpf: 55544422222 },
    { id: 2, nome: "Carlos Lima", Cpf: 55544422222 },
    { id: 3, nome: "Fernanda Rocha", Cpf: 55544422222 },
    { id: 4, nome: "Bruno Silva", Cpf: 55544422222 },
    { id: 5, nome: "Bruno Pimenta", Cpf: 55544422222 },
    { id: 6, nome: "Jhonatan Mota", Cpf: 5555555555 },
  ]);

  const [busca, setBusca] = useState("");
  const [novaPessoaFisica, setNovaPessoaFisica] = useState("");
  const [novoCpf, setNovoCpf] = useState("");

  const handleRemover = (id) => {
    setPessoaFisicas(
      pessoaFisicas.filter((pessoaFisica) => pessoaFisica.id !== id)
    );
  };

  const handleAdicionar = () => {
    if (novaPessoaFisica.trim() === "") return;
    const novoId =
      pessoaFisicas.length > 0
        ? pessoaFisicas[pessoaFisicas.length - 1].id + 1
        : 1;
    const nova = {
      id: novoId,
      nome: novaPessoaFisica,
      cpf: novoCpf,
    };

    setPessoaFisicas([...pessoaFisicas, nova]);
    setNovaPessoaFisica("");
    setNovoCpf("");
  };

  const pessoaFisicasFiltrados = pessoaFisicas.filter((pessoasFisicas) =>
    pessoasFisicas.nome.toLowerCase().includes(busca.toLowerCase())
  );

  //

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          backgroundColor: "Gainsboro",
          padding: "10px",
          width: "100%",
          textAlign: "center",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        Lista de Pessoas Fícas
      </h2>

      <input
        type="text"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      <div
        style={{
          backgroundColor: "PaleGreen",
          padding: "10px",
          borderRadius: "6px",
          marginBottom: "20px",
          display: "flex",
          gap: "1px",
        }}
      >
        <input
          type="text"
          placeholder="Nova Pessoa Física..."
          value={novaPessoaFisica}
          onChange={(e) => setNovaPessoaFisica(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <input
          type="text"
          placeholder="CPF"
          value={novoCpf}
          onChange={(e) => setNovoCpf(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
        <button
          onClick={handleAdicionar}
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "5px 16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Adicionar
        </button>
      </div>

      {pessoaFisicasFiltrados.length > 0 ? (
        pessoaFisicasFiltrados.map((pessoasFisicas) => (
          <div
            key={pessoasFisicas.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#fff",
              borderRadius: "6px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <span>{pessoasFisicas.nome}</span>
            <span>{pessoasFisicas.Cpf}</span>
            <button
              onClick={() => handleRemover(pessoasFisicas.id)}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "6px 10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remover
            </button>
          </div>
        ))
      ) : (
        <p style={{ color: "#666" }}>Nenhum cliente encontrado.</p>
      )}
    </div>
  );
}

export default App;
