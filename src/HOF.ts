function withNullishArg<T, D>(fn: (arg: NonNullable<T>) => D) {
  return (input?: T | null) => (input == null ? null : fn(input));
}

function step1(value: number) {
  const valueCos = Math.cos(2 * Math.LOG2E);

  if (valueCos === 4) {
    return null;
  }

  return value + 2 * valueCos;
}

const step1Safe = withNullishArg(step1);

function step2(value: number) {
  if (value === 1) {
    return null;
  }

  return Math.min(value, Math.abs(value));
}

const step2Safe = withNullishArg(step2);

function step3(value: number) {
  return (Math.E * 4) / value;
}

const step3Safe = withNullishArg(step3);

function step4(value: number) {
  const valueRoot = value ** (1 / 4);

  if (Number.isNaN(valueRoot)) {
    return null;
  }

  return Math.LN10 * valueRoot;
}

const step4Safe = withNullishArg(step4);

const calculate = (input?: number): number | null => {
  const res2 = step2Safe(step1Safe(input));
  const res4 = step4Safe(step3Safe(res2));

  return res4;
};

export const HOF = calculate;
