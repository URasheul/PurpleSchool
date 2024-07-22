"use strict";
class Item {
    constructor(id, date, title) {
        this.id = id;
        this.date = date;
        this.title = title;
    }
}
class IdItemIterator {
    constructor(dataList, reversed = false) {
        this.dataList = dataList;
        this.reversed = reversed;
        this.index = 0;
        this.dataList.sortById(reversed);
    }
    current() {
        return this.dataList.getItems()[this.index];
    }
    next() {
        this.index = this.index + 1;
        return this.dataList.getItems()[this.index];
    }
    prev() {
        this.index = this.index - 1;
        return this.dataList.getItems()[this.index];
    }
    position() {
        return this.index;
    }
}
class DateItemIterator {
    constructor(dataList, reversed = false) {
        this.dataList = dataList;
        this.reversed = reversed;
        this.index = 0;
        this.dataList.sortByDate(reversed);
    }
    current() {
        return this.dataList.getItems()[this.index];
    }
    next() {
        this.index = this.index + 1;
        return this.dataList.getItems()[this.index];
    }
    prev() {
        this.index = this.index - 1;
        return this.dataList.getItems()[this.index];
    }
    position() {
        return this.index;
    }
}
class DataList {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    deleteItemById(id) {
        this.items = this.items.filter(i => i.id !== id);
    }
    getItems() {
        return this.items;
    }
    count() {
        return this.items.length;
    }
    getIdItemIterator(rev = false) {
        if (rev) {
            return new IdItemIterator(this, true);
        }
        return new IdItemIterator(this);
    }
    getDateItemIterator(rev = false) {
        if (rev) {
            return new DateItemIterator(this, true);
        }
        return new DateItemIterator(this);
    }
    sortById(reverse = false) {
        if (reverse) {
            this.items.sort((a, b) => b.id - a.id);
        }
        else {
            this.items.sort((a, b) => a.id - b.id);
        }
    }
    sortByDate(reverse = false) {
        if (reverse) {
            this.items.sort((a, b) => {
                const reverseDateStringA = a.date.split(/\D+/g).reverse().join(',');
                const reverseDateStringB = b.date.split(/\D+/g).reverse().join(',');
                return new Date(reverseDateStringB).getTime() - new Date(reverseDateStringA).getTime();
            });
        }
        else {
            this.items.sort((a, b) => {
                const reverseDateStringA = a.date.split(/\D+/g).reverse().join(',');
                const reverseDateStringB = b.date.split(/\D+/g).reverse().join(',');
                return new Date(reverseDateStringA).getTime() - new Date(reverseDateStringB).getTime();
            });
        }
    }
}
const item1 = new Item(3, '22/07/2024', 'first');
const item2 = new Item(12, '19/07/2024', 'second');
const item3 = new Item(7, '22-05-2000', 'third');
const item4 = new Item(1, '22-08-2024', 'fourth');
const item5 = new Item(7, '22-05-2022', 'fifth');
const list = new DataList();
list.addItem(item1);
list.addItem(item2);
list.addItem(item3);
list.addItem(item4);
list.addItem(item5);
const iterator1 = list.getIdItemIterator();
console.log(iterator1.current());
console.log(iterator1.position());
console.log(iterator1.next());
console.log(iterator1.current());
console.log(iterator1.position());
