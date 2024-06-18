type Conn = {
  username: string;
  password: string;
  host: string;
  port: string;
  dbname: string;
};

type Conect = {
  driver: string;
  url: string;
};

const conexao = (dados: Conn): Readonly<Conect> => {
  const { username, password, host, port, dbname } = dados;
  return {
    driver: "postgres",
    url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`,
  };
};

const conect = conexao({
  dbname: "eeee",
  host: "postgres",
  password: "12345",
  port: "12345",
  username: "evero",
});
