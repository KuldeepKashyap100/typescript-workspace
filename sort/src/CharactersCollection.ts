import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
    constructor(public collection: string) {
        super();
    }

    get length(): number {
        return this.collection.length;
    }
    compare(leftIdx: number, rightIdx: number): boolean {
        return this.collection[leftIdx].toLowerCase() > this.collection[rightIdx].toLowerCase();
    }

    swap(leftIdx: number, rightIdx: number): void {
        const charList = this.collection.split("");
        [charList[leftIdx], charList[rightIdx]] = [charList[rightIdx], charList[leftIdx]];
        this.collection = charList.join("");
    }
}