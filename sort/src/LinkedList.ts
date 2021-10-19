import { Sorter } from "./Sorter";

class Node {
    next: Node | null = null;
    constructor(public data: number) {}
}

interface List {
    print() : void;
    at(idx: number) : Node | null;
    add(data: number): LinkedList;
    length: number;
    compare(leftIdx: number, rightIdx: number): boolean;
    swap(leftIdx: number, rightIdx: number): void; 
}

export class LinkedList extends Sorter implements List {
    head: Node | null = null;

    get length(): number {
        let node = this.head, count = 0;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }

    print(): void {
        let node: Node | null = this.head;
        while(node) {
            console.log(node.data);
            node = node.next;
        }
    }

    add(data: number): LinkedList {
        const newNode = new Node(data);
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        let node: Node | null = this.head;
        while(node.next) {
            node = node.next;
        }
        node.next = newNode;
        return this;
    }

    at(idx: number): Node {
        let count = 0, node: Node | null = this.head;
        while(node) {
            if(count === idx) return node;
            count++;
            node = node.next;
        }
        throw new Error("Index out of bounds")
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.at(leftIdx).data > this.at(rightIdx).data;
    }

    swap(leftIdx: number, rightIdx: number): void {
        [this.at(leftIdx).data, this.at(rightIdx).data] = [this.at(rightIdx).data, this.at(leftIdx).data];
    }
}