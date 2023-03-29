function calculationStep1(value: number) {
  const valueCos = Math.cos(2 * Math.LOG2E);

  if (valueCos === 4) {
    return null;
  }

  return value + 2 * valueCos;
}

function calculationStep2(value: number) {
  if (value === 1) {
    return null;
  }

  return Math.min(value, Math.abs(value));
}

function calculationStep3(value: number) {
  if (value === 2) {
    return null;
  }

  return (Math.E * 4) / value;
}

function calculationStep4(value: number) {
  const valueRoot = value ** (1 / 4);

  if (Number.isNaN(valueRoot)) {
    return null;
  }

  return Math.LN10 * valueRoot;
}

const Option = <T>(value: T) => ({
  chain: <D>(fn: (arg: NonNullable<T>) => D) =>
    value == null ? null : fn(value),
  map: <D>(fn: (arg: NonNullable<T>) => D) => {
    const nextValue = Option(value).chain(fn);
    return Option(nextValue);
  },
});

const calculate = (input?: number) => {
  return Option(input)
    .map(calculationStep1)
    .map(calculationStep2)
    .map(calculationStep3)
    .chain(calculationStep4);
};

export const option = calculate;
