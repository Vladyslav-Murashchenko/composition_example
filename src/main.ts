import { manyNullChecks } from "./manyNullChecks";
import { simpleComposition } from "./simpleComposition";
import { throwErrors } from "./throwErrors";
import { option } from "./option";
import { simpleMonad } from "./simpleMonad";
import { HOF } from "./HOF";
import { anotherFlowWithOption } from "./anotherFlowWithOption";

import "./style.css";

const inputs = [10, 20, 30, 5, -4, -8, 0];
const fnByFileName = {
  anotherFlowWithOption,
  HOF,
  manyNullChecks,
  option,
  simpleComposition,
  simpleMonad,
  throwErrors,
};
const fileNameFnPairs = Object.entries(fnByFileName);

const tableData = inputs.flatMap((input) =>
  fileNameFnPairs.map(([fileName, fn]) => [input, fileName, fn(input)] as const)
);

const concat = (a: string, b: string) => a + b;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>"calculate" function was called from different files</h2>
  <table>
    <tr>
      <th>Input</th>
      <th>File name</th>
      <th>Output</th>
    </tr>
    ${tableData
      .map(([input, fileName, output]) =>
        "".concat(
          `<tr>`,
          `<td>${input}</td>`,
          `<td>${fileName}</td>`,
          `<td>${output}</td>`,
          `</tr>`
        )
      )
      .reduce(concat)}
  </table>
`;
