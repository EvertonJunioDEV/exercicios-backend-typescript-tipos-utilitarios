type Item = {
  nome: string;
  descricao: string;
  valor: number;
};

type Cartao = {
  numero: number;
  validade: string;
  nome: string;
  cvv: number;
};

type Endereco = {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
};

type Carrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  tipoTransacao: Uppercase<"credito" | "Debito">;
  cartao: Cartao;
  endereco: Endereco;
};

const Venda = (compra: Carrinho) => {};

const comprei = Venda({
  item: {
    descricao: "tecnologia",
    nome: "iphone",
    valor: 25000,
  },
  qtd: 2,
  cartao: {
    cvv: 123,
    nome: "eveee",
    numero: 123,
    validade: "02/02/2003",
  },
  desconto: 200,
  endereco: {
    bairro: "avcd",
    cep: "avcd",
    cidade: "avcd",
    estado: "avcd",
    rua: "avcd",
  },
  frete: 25,
  tipoTransacao: "CREDITO",
});
