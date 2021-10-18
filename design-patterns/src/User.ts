import faker from "faker";
import { Mappale } from "./CustomMap";

export class User implements Mappale {
    name: string;
    location: {
        longitude: number;
        latitude: number;
    }
    color: string = "red";
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            longitude: parseFloat(faker.address.longitude()),
            latitude: parseFloat(faker.address.latitude())
        }
    }
    markerContent(): string {
        return `<h1>${this.name}</h1>`;
    } 
}