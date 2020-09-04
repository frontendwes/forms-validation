import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const FormularioCadastro = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome, cpf);
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        variant="outlined"
        id="nome"
        label="nome"
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
        control={<Switch name="promoçoes" defaultChecked color="primary" />}
      />

      <FormControlLabel
        label="novidades"
        control={<Switch name="novidades" defaultChecked color="primary" />}
      />
      <Button color="primary" variant="contained" type="submit">
        Confirmar
      </Button>
    </form>
  );
};

export default FormularioCadastro;
