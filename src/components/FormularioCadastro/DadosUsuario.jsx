import React from "react";
import { TextField, Button } from "@material-ui/core";

const DadosUsuario = () => {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button color="primary" variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
};

export default DadosUsuario;
