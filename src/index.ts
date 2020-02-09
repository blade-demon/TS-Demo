import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from './LinkedList';

// Number sort
const arr = [50, 10, -1, 0, 5];
const numberCollection = new NumberCollection(arr);
numberCollection.sort();
console.log(numberCollection.data);

// Character sort
const str = "HelloWorld";
const characterCollection = new CharacterCollection(str);
characterCollection.sort();
console.log(characterCollection.data);

// LinkedList sort
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(-3);
linkedList.add(-1);
linkedList.add(9);
linkedList.add(31);
linkedList.sort();
linkedList.print();
