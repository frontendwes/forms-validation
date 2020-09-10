import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampo, possoEnviar] = useErros(validacoes);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampo}
        id="senha"
        label="senha"
        name="senha"
        error={!erros.senha.valido}
        helperText={erros.senha.mensagem}
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        required
      />
      <Button color="primary" variant="contained" type="submit">
        Proximo
      </Button>
    </form>
  );
};

export default DadosUsuario;
