const criarTabuada = (listaDeNumeros: number[]): string => {
  let resultado: string = "";

  listaDeNumeros.forEach((numero) => {
    for (let i = 1; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i} \n`;

      if (i === 10) {
        resultado += "----------------- \n";
      }
    }
  });

  return resultado;
};

console.log(criarTabuada([7, 8, 9]));
