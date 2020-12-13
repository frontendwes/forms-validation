import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validaCpf, validaSenha } from "./models/cadastro";
import ValidacoesCadastro from "./context/ValidacoesCadastro";
function App() {
  const recebeDados = (dados) => {
    console.log(dados);
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography align="center">FORMULARIO DE CADASTRO</Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validaCpf, senha: validaSenha, nome: validaSenha }}
      >
        <FormularioCadastro dadosFormulario={recebeDados} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

export default App;
