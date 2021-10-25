import * as fs from "fs";
import { OutputTarget } from "../Summary";
export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const htmlReport = `
            <div>
                <h1>Report Analysis</h1>
                <div>${report}</div>
            </div>
        `;

        fs.writeFileSync("report.html", htmlReport);
    }
}