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

const calculate = (input?: number): number | null => {
  const res1 = Option(input).chain(calculationStep1);
  const res2 = Option(res1).chain(calculationStep2);
  const res3 = Option(res2).chain(calculationStep3);
  const res4 = Option(res3).chain(calculationStep4);

  return res4;
};

export const simpleMonad = calculate;
