import React, { useState, useEffect } from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";
import DadosEntrega from "./DadosEntrega";
import { Typography, Step, Stepper, StepLabel } from "@material-ui/core";

const ETAPA_PARA_ENVIAR = 3;

const FormularioCadastro = ({ dadosFormulario }) => {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [todosDados, setTodosDados] = useState({});

  const proximo = () => {
    setEtapaAtual(etapaAtual + 1);
  };

  const recebeDados = (dados) => {
    setTodosDados({ ...todosDados, ...dados });
    proximo();
  };

  const formularios = [
    <DadosUsuario aoEnviar={recebeDados} />,
    <DadosPessoais aoEnviar={recebeDados} />,
    <DadosEntrega aoEnviar={recebeDados} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>,
  ];

  useEffect(() => {
    if (etapaAtual === ETAPA_PARA_ENVIAR) {
      dadosFormulario(todosDados);
    }
  }, [etapaAtual, formularios.length, todosDados, dadosFormulario]);

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
};

export default FormularioCadastro;
