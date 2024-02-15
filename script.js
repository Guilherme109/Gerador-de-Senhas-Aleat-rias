const gerarSenha = () => {
    // Define os caracteres possíveis
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-+";
  
    // Pega as opções do usuário
    const tamanho = document.getElementById("tamanho").value;
    const maiusculas = document.getElementById("maiusculas").checked;
    const minusculas = document.getElementById("minusculas").checked;
    const numeros = document.getElementById("numeros").checked;
    const especiais = document.getElementById("especiais").checked;
  
    // Filtra os caracteres
    let caracteresFiltrados = "";
    if (maiusculas) caracteresFiltrados += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (minusculas) caracteresFiltrados += "abcdefghijklmnopqrstuvwxyz";
    if (numeros) caracteresFiltrados += "0123456789";
    if (especiais) caracteresFiltrados += "!@#$%^&*()-+";
  
    // Gera a senha aleatória
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresFiltrados.length);
      senha += caracteresFiltrados[indiceAleatorio];
    }
  
    return senha;
  };
  
  const mostrarSenha = () => {
    const senha = gerarSenha();
    document.getElementById("senha").textContent = senha;
  };
  
  document.addEventListener("submit", (event) => {
    event.preventDefault();
    mostrarSenha();
  });
  
  mostrarSenha();
  