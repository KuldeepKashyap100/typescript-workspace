import faker from "faker";
import { Mappale } from "./CustomMap";

export class Company implements Mappale {
    companyName: string;
    catchPhrase: string;
    location: {
        longitude: number,
        latitude: number;
    }
    color: string = "black";
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            longitude: parseFloat(faker.address.longitude()),
            latitude: parseFloat(faker.address.longitude())
        }
    }
    markerContent(): string {
        return `
            <div>
                <h1>${this.companyName}</h1>
                <h3>${this.catchPhrase}</h3>
            </div>
        `;
    }
}