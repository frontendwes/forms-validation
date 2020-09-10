const validaCpf = (cpf) => {
  return cpf.length !== 11
    ? { valido: false, mensagem: "CPF deve ter 11 digitos" }
    : { valido: true, mensagem: "" };
};

const validaSenha = (senha) => {
  return senha.length < 4 || senha.length > 72
    ? { valido: false, mensagem: "Campo deve ter entre 4  e 72 digitos" }
    : { valido: true, mensagem: "" };
};

export { validaCpf, validaSenha };
