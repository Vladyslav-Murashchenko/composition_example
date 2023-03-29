function step1(value?: number) {
  if (value == null) {
    throw new Error();
  }

  const valueCos = Math.cos(2 * Math.LOG2E);

  if (valueCos === 4) {
    throw new Error();
  }

  return value + 2 * valueCos;
}

function step2(value: number) {
  if (value === 1) {
    throw new Error();
  }

  return Math.min(value, Math.abs(value));
}

function step3(value: number) {
  if (value === 2) {
    throw new Error();
  }

  return (Math.E * 4) / value;
}

function step4(value: number) {
  const valueRoot = value ** (1 / 4);

  if (Number.isNaN(valueRoot)) {
    throw new Error();
  }

  return Math.LN10 * valueRoot;
}

const calculate = (input?: number) => {
  try {
    const res2 = step2(step1(input));
    const res4 = step4(step3(res2));

    return res4;
  } catch {
    return null;
  }
};

export const throwErrors = calculate;
