import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const FormularioCadastro = () => {
  return (
    <form>
      <TextField
        variant="outlined"
        id="nome"
        label="nome"
        fullWidth
        margin="normal"
      />
      <TextField
        variant="outlined"
        id="sobrenome"
        label="sobrenome"
        fullWidth
        margin="normal"
      />
      <TextField
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
