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

const Option = <T>(input: T) => ({
  chain: <D>(fn: (arg: NonNullable<T>) => D) =>
    input == null ? null : fn(input),
});

const calculate = (input?: number) => {
  return Option(input)
    .chain((data) => Option(calculationStep1(data)))
    ?.chain((data) => Option(calculationStep2(data)))
    ?.chain((data) => Option(calculationStep3(data)))
    ?.chain(calculationStep4);
};

export const optionStep1 = calculate;
