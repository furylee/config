export function getAmountWithUnit(money) {
  if (+money > 10000) {
    return `${money.toString().slice(0, -4)} 万`;
  }

  return money;
}

export function getRateType(type) {
  let desc = '日利率';
  if (type && (type.toString() === '1')) {
    desc = '月利率';
  }
  return desc;
}
