function step1(value: number) {
  const valueCos = Math.cos(2 * Math.LOG2E);

  if (valueCos === 4) {
    return null;
  }

  return value + 2 * valueCos;
}

function step2(value: number) {
  if (value === 1) {
    return null;
  }

  return Math.min(value, Math.abs(value));
}

function step3(value: number) {
  if (value === 2) {
    return null;
  }

  return (Math.E * 4) / value;
}

function step4(value: number) {
  const valueRoot = value ** (1 / 4);

  if (Number.isNaN(valueRoot)) {
    return null;
  }

  return Math.LN10 * valueRoot;
}

const calculate = (input?: number) => {
  if (input == undefined) {
    return null;
  }

  const res1 = step1(input);

  if (res1 == null) {
    return null;
  }

  const res2 = step2(res1);

  if (res2 == null) {
    return null;
  }

  const res3 = step3(res2);

  if (res3 == null) {
    return null;
  }

  return step4(res3);
};

export const manyNullChecks = calculate;
