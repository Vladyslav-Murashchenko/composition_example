import { manyNullChecks } from "./manyNullChecks";
import { simpleComposition } from "./simpleComposition";
import { throwErrors } from "./throwErrors";
import { option } from "./option";
import { optionStep1 } from "./optionStep1";

import "./style.css";

const inputs = [10, 20, 30, 5, -4, -8, 0];
const fnByFileName = {
  simpleComposition,
  manyNullChecks,
  throwErrors,
  optionStep1,
  option,
};

const concat = (a: string, b: string) => a + b;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>"program" function was called from different files</h2>
  <table>
    <tr>
      <th>Input</th>
      <th>File name</th>
      <th>Output</th>
    </tr>
    ${inputs
      .map((input) =>
        Object.entries(fnByFileName)
          .map(([fileName, fn]) =>
            "".concat(
              `<tr>`,
              `<td>${input}</td>`,
              `<td>${fileName}</td>`,
              `<td>${fn(input)}</td>`,
              `</tr>`
            )
          )
          .reduce(concat)
      )
      .reduce(concat)}
  </table>
`;
