interface IItem {
    id: number;
    date: string;
    title: string;
}

class Item implements IItem {   
    constructor(public id: number, public date: string, public title: string){}
}


interface IIterator<T> {
    current() : T | undefined;
    next() : T | undefined;
    prev() : T | undefined;
    position() : number;
}

class IdItemIterator implements IIterator<IItem>{

    constructor(public dataList: DataList, public reversed: boolean = false){
        this.dataList.sortById(reversed);
    }

    public index: number = 0;

    current(): IItem | undefined {
        return this.dataList.getItems()[this.index];
    }
    next(): IItem | undefined {
        this.index = this.index + 1
        return this.dataList.getItems()[this.index];        
    }
    prev(): IItem | undefined {
        this.index = this.index - 1
        return this.dataList.getItems()[this.index];    
    }
    position(): number {
        return this.index
    }    
}




class DateItemIterator implements IIterator<IItem>{

    constructor(public dataList: DataList, public reversed: boolean = false){
        this.dataList.sortByDate(reversed);
    }

    public index: number = 0;

    current(): IItem | undefined {
        return this.dataList.getItems()[this.index];
    }
    next(): IItem | undefined {
        this.index = this.index + 1
        return this.dataList.getItems()[this.index];        
    }
    prev(): IItem | undefined {
        this.index = this.index - 1
        return this.dataList.getItems()[this.index];    
    }
    position(): number {
        return this.index
    }    
}



class DataList {
    private items: IItem[] = [];
    
    public addItem(item: IItem){
        this.items.push(item);
    }

    public deleteItemById(id: number){
        this.items = this.items.filter(i => i.id !== id);
    }

    public getItems(){
        return this.items
    }

    public count(){
        return this.items.length
    }

    public getIdItemIterator(rev: boolean = false): IIterator<IItem> {
        if(rev){
            return new IdItemIterator(this, true);
        }
        return new IdItemIterator(this);
    }

    public getDateItemIterator(rev: boolean = false): IIterator<IItem> {
        if(rev){
            return new DateItemIterator(this, true);
        }
        return new DateItemIterator(this);
    }

    public sortById(reverse: boolean = false) {
        if(reverse){
            this.items.sort((a, b) => b.id - a.id);
        } else {
            this.items.sort((a, b) => a.id - b.id)
        }
    }

    public sortByDate(reverse: boolean = false) {
        if(reverse){
            this.items.sort((a, b) =>{
                const reverseDateStringA = a.date.split(/\D+/g).reverse().join(',');
                const reverseDateStringB = b.date.split(/\D+/g).reverse().join(',');
                return new Date(reverseDateStringB).getTime() - new Date(reverseDateStringA).getTime()
            });            
        } else {
            this.items.sort((a, b) =>{
                const reverseDateStringA = a.date.split(/\D+/g).reverse().join(',');
                const reverseDateStringB = b.date.split(/\D+/g).reverse().join(',');
                return new Date(reverseDateStringA).getTime() - new Date(reverseDateStringB).getTime()
            });   
        }
    }
}





const item1 = new Item(3, '22/07/2024', 'first')
const item2 = new Item(12, '19/07/2024', 'second')
const item3 = new Item(7, '22-05-2000', 'third')
const item4 = new Item(1, '22-08-2024', 'fourth')
const item5 = new Item(7, '22-05-2022', 'fifth')


const list = new DataList();
list.addItem(item1);
list.addItem(item2);
list.addItem(item3);
list.addItem(item4);
list.addItem(item5);
const iterator1 = list.getIdItemIterator()
console.log(iterator1.current());
console.log(iterator1.position());
console.log(iterator1.next());
console.log(iterator1.current());
console.log(iterator1.position());






