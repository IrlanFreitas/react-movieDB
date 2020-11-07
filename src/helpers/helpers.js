//* O Tempo que a api retorna precisa ser convertido em horas e minutos
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

//* Converte numero em real PT-BR baby
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  return formatter.format(money);
};
