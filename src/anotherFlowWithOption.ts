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

function calculationStep3(value: number, value2: number) {
  if (value === 2) {
    return null;
  }

  return (Math.E * 4 + value2) / value;
}

function calculationStep4(value: number) {
  const valueRoot = value ** (1 / 4);

  if (Number.isNaN(valueRoot)) {
    return null;
  }

  return Math.LN10 * valueRoot;
}

interface OptionInstance<T> {
  chain: <D>(fn: (arg: NonNullable<T>) => D) => D | null;
  map: <D>(fn: (arg: NonNullable<T>) => D) => OptionInstance<D | null>;
}

const Option = <T>(value: T): OptionInstance<T> => ({
  chain: (fn) => (value == null ? null : fn(value)),
  map: (fn) => {
    const nextValue = Option(value).chain(fn);
    return Option(nextValue);
  },
});

const calculate = (input?: number): number | null => {
  const res1 = Option(input).chain(calculationStep1);
  const res2 = Option(input).chain(calculationStep2);

  if (res1 == null || res2 == null) {
    return null;
  }

  return Option(calculationStep3(res1, res2)).chain(calculationStep4);
};

export const anotherFlowWithOption = calculate;
