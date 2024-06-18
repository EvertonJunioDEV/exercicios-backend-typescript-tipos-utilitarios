type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  dataNacimento?: string;
};

const cadastrarUsuário = (info: Usuario): Usuario => {
  return info;
};
type ExcluindoRg = Omit<Usuario, "rg">;
const novoCadastro = (cadastro: Required<ExcluindoRg>) => {};

const cadastrando = novoCadastro({
  nome: "321",
  email: "123",
  cpf: "123",
  dataNacimento: "123",
});
