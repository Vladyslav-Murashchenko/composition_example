function step1(value: number) {
  return value + 2 * Math.cos(2 * Math.LOG2E);
}

function step2(value: number) {
  return Math.min(value, Math.abs(value));
}

function step3(value: number) {
  return (Math.E * 4) / value;
}

function step4(value: number) {
  return Math.LN10 * value ** (1 / 4);
}

const calculate = (input: number) => {
  const res2 = step2(step1(input));
  const res4 = step4(step3(res2));

  return res4;
};

export const simpleComposition = calculate;
