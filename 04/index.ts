const item: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
} = {
  produto: "CPU Dual Core 3.0GHZ",
  lote: 321,
  ano: 2022,
  qtd: 5,
};

const gerarEtiqueta = (item: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  const etiqueta: string[] = [];
  for (let unidade = 1; unidade < item.qtd; unidade++) {
    etiqueta.push(
      `${item.lote}-${item.ano}-${unidade.toString().padStart(3, "0")}`
    );
  }
  return etiqueta;
};

console.log(gerarEtiqueta(item));
