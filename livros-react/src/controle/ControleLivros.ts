import { Livro } from "../modelo/Livro";

const livros: Livro[] = [
  new Livro(1, 1, "Livro 1", "Resumo livro 1", ["Alexandre"]),
  new Livro(2, 2, "Livro 2", "Resumo livro 2", ["Roberto"]),
  new Livro(3, 3, "Livro 3", "Resumo livro 3", ["João"])
];

export class ControleLivros {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = livros.reduce((max, l) => Math.max(max, l.codigo), 0);
    livro.codigo = maxCodigo + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

