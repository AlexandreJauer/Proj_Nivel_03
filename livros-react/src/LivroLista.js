import { useState, useEffect } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';


// Instanciar controlador de livros e editoras
const controleLivros = new ControleLivros();
const controleEditora = new ControleEditora();

// auxiliar LinhaLivro
function LinhaLivro(props) {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}<br></br><button class="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button></td>
      <td>{nomeEditora}</td>
      <td> {livro.autores.join(" , ")}</td>
      
    </tr>
  );
}

// LivroLista
export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  // excluir livro
  const excluir = (codigo) => {
    controleLivros.excluir(codigo);
    setCarregado(false);
  }

  // Buscar livros
  useEffect(() => {
    if (!carregado) {
      setLivros(controleLivros.obterLivros());
      setCarregado(true);
    }
  }, [carregado]);

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <table class="table">
        <thead>
          <tr class="thead-dark">
            <th scope="col">Título</th>
            <th scope="col">Editora</th> 
            <th scope="col">Autor(es)</th>
            
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              excluir={excluir}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}
