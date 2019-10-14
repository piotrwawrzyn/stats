import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  constructor(public fileName: string) {}

  print(report: string): void {
    const htmlCode = `
      <div>
        <h1>Analisys Output</h1>
        <div>${report}</div>
      </div>`;

    fs.writeFileSync(this.fileName, htmlCode);
  }
}
