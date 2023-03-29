const soletrador = (palavra: string): string => {
  const letras = palavra.split("").join("-");
  return letras;
};

console.log(soletrador("Mirian"));
