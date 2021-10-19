import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numberCollection = new NumbersCollection([4, 2, 7, 10, 1]);
numberCollection.sort();
console.log(numberCollection.collection);

const charCollection = new CharactersCollection("Xaawzb");
charCollection.sort();
console.log(charCollection.collection);


const linkedList = new LinkedList();
linkedList.add(4).add(2).add(7).add(10).add(1);
linkedList.sort();
linkedList.print();