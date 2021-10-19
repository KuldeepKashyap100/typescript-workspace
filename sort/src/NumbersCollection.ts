import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
    constructor(public collection: number[]) {
        super();
    }

    get length(): number { 
        return this.collection.length;
    }
    compare(leftIdx: number, rightIdx: number): boolean {
        return this.collection[leftIdx] > this.collection[rightIdx];
    }

    swap(leftIdx: number, rightIdx: number): void {
        [this.collection[leftIdx], this.collection[rightIdx]] = [this.collection[rightIdx], this.collection[leftIdx]];
    }
}