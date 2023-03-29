const listaDeUsuarios: { nome: string; idade: number; status: boolean }[] = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

const filtrarUsuarios = (
  lista: { nome: string; idade: number; status: boolean }[],
  nome: string
): { nome: string; idade: number; status: boolean }[] => {
  const usuariosFiltrados = lista.filter((usuario) =>
    usuario.nome.toLowerCase().includes(nome.toLowerCase())
  );

  return usuariosFiltrados;
};

console.log(filtrarUsuarios(listaDeUsuarios, "jo"));
