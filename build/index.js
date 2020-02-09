"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var CharacterCollection_1 = require("./CharacterCollection");
var LinkedList_1 = require("./LinkedList");
// Number sort
var arr = [50, 10, -1, 0, 5];
var numberCollection = new NumberCollection_1.NumberCollection(arr);
numberCollection.sort();
console.log(numberCollection.data);
// Character sort
var str = "HelloWorld";
var characterCollection = new CharacterCollection_1.CharacterCollection(str);
characterCollection.sort();
console.log(characterCollection.data);
// LinkedList sort
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(10);
linkedList.add(-3);
linkedList.add(-1);
linkedList.add(9);
linkedList.add(31);
linkedList.sort();
linkedList.print();
