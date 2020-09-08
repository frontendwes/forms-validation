import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const DadosPessoais = ({ requisicao, validaCpf }) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [errors, setErros] = useState({
    cpf: {
      valido: false,
      message: "",
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        requisicao(nome);
      }}
    >
      <TextField
        id="nome"
        label="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
        variant="outlined"
        id="sobrenome"
        label="sobrenome"
        fullWidth
        margin="normal"
      />
      <TextField
        error={errors.cpf.valido}
        helperText={errors.cpf.message}
        onBlur={(event) => {
          const ehValido = validaCpf(cpf);
          setErros({ cpf: ehValido });
        }}
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
        Confirmar
      </Button>
    </form>
  );
};

export default DadosPessoais;
