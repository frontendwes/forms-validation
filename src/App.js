import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

function App() {
  const recebeDados = (dados) => {
    console.log(dados);
  };

  const validaCpf = (cpf) => {
    return cpf.length !== 11
      ? { valido: true, message: "CPF deve ter 11 digitos" }
      : { valido: false, message: "" };
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography align="center">FORMULARIO DE CADASTRO</Typography>
      <FormularioCadastro requisicao={recebeDados} validaCpf={validaCpf} />
    </Container>
  );
}

export default App;
