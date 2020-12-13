import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

const DadosPessoais = ({ aoEnviar }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampo, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        id="nome"
        label="nome"
        value={nome}
        name="nome"
        onBlur={validarCampo}
        error={!erros.nome.valido}
        helperText={erros.nome.mensagem}
        onChange={(event) => setNome(event.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        name="sobrenome"
        onChange={(event) => setSobrenome(event.target.value)}
        variant="outlined"
        id="sobrenome"
        label="sobrenome"
        fullWidth
        margin="normal"
      />
      <TextField
        name="cpf"
        error={!erros.cpf.valido}
        helperText={erros.cpf.mensagem}
        onBlur={validarCampo}
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        variant="outlined"
        id="cpf"
        label="cpf"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        label="promoçoes"
        control={
          <Switch
            onChange={(event) => setPromocoes(event.target.checked)}
            name="promoçoes"
            checked={promocoes}
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="novidades"
        control={
          <Switch
            onChange={(event) => setNovidades(event.target.checked)}
            name="novidades"
            checked={novidades}
            color="primary"
          />
        }
      />
      <Button color="primary" variant="contained" type="submit">
        Proximo
      </Button>
    </form>
  );
};

export default DadosPessoais;
