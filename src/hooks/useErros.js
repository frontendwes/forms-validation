import { useState } from "react";

const useErros = (validacoes) => {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erros, setErros] = useState(estadoInicial);

  const validarCampo = (event) => {
    const { name, value } = event.target;
    const novoEstado = { ...erros, [name]: validacoes[name](value) };
    setErros(novoEstado);
  };

  const possoEnviar = () => {
    // for (let campo in erros) {
    //   return erros[campo].valido ? true : false;
    // }
    console.log("erros", erros);
    const resultado = Object.values(erros).every(({ valido }) => {
      return valido;
    });
    console.log("resultado", resultado);
    return resultado;
  };

  return [erros, validarCampo, possoEnviar];
};

const criarEstadoInicial = (validacoes) => {
  // const estadoInicial = {};
  // for (let campo in validacoes) {
  //   estadoInicial[campo] = { valido: true, mensagem: "" };
  // }

  // console.log(estadoInicial);

  // return estadoInicial;

  const estadoInicial = Object.keys(validacoes).reduce(
    (estadoInicial, campos) => {
      return {
        ...estadoInicial,
        [campos]: { valido: true, message: "" },
      };
    },
    {}
  );
  console.log(estadoInicial);
  return estadoInicial;
};
export default useErros;
