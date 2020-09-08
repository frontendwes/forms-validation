import React, { useState } from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";

const FormularioCadastro = ({ requisicao, validaCpf }) => {
  return (
    <>
      <DadosPessoais requisicao={requisicao} validaCpf={validaCpf} />
      <DadosUsuario />
    </>
  );
};

export default FormularioCadastro;
