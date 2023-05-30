import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

function LivroForm() {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();

  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate();

  const tratarCombo = (event) => {
    const { value } = event.target;
    setCodEditora(Number(value));
  }

  const incluir = (event) => {
    event.preventDefault();

    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora
    };

    controleLivro.incluir(livro);
    navigate('/');
  }

  return (
    <main>
      <h1>Formulário de Inclusão de Livro</h1>
      <form onSubmit={incluir}>
        <div class="form-group">
          <label For="titulo">Título:</label>
          <input type="text" class="form-control" id="titulo" value={titulo} onChange={event => setTitulo(event.target.value)} />
        </div>
        <div class="form-group">
          <label For="resumo">Resumo:</label>
          <textarea id="resumo" class="form-control"value={resumo} onChange={event => setResumo(event.target.value)} />
        </div>
        <div class="form-group">
          <label For="autores">Autores:</label>
          <textarea id="autores" class="form-control"value={autores} onChange={event => setAutores(event.target.value)} />
        </div>
        <div class="form-group">
          <label For="editora">Editora:</label>
          <select class="form-control" id="editora" value={codEditora} onChange={tratarCombo}>
            {opcoes.map(opcao => (
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Incluir</button>
      </form>
    </main>
  );
}

export default LivroForm;

