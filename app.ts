
import { Md5 } from "ts-md5";

interface IData {
    key: string;
    value: string;
}

interface IBucket{ 
    hash: string;
    data: IData | IData[]
    
}

class Bucket implements IBucket {    
    constructor(
        public hash: string, 
        public data: IData | IData[]){}
}

class Data implements IData {
    constructor(
        public key: string, 
        public value: string){}
}

function isArray(value: IData | IData[]): value is IData[]{
    return Array.isArray(value);
}


class MapFunction {

    private buckets: Bucket[] = [];
    
    private hashFunc(key: string): string{
        return Md5.hashStr(key);
    }

    private findBucket(hash: string): Bucket | undefined {
        const requiredBucket = this.buckets.find(bucket => bucket.hash === hash);
        if(!requiredBucket){
            return undefined           
        }
        return requiredBucket
    }

    set(value: Data): void{
        const hash = this.hashFunc(value.key);       
        const bucketByHash = this.findBucket(hash);

        if(!this.buckets.length){
            this.buckets.push(new Bucket(hash, value))

        } else {            
            if(!bucketByHash){
                this.buckets.push(new Bucket(hash, value))  

            } else {
                if (isArray(bucketByHash.data)){  
                    
                    const element = bucketByHash.data.find(element => element.key === value.key);
                    
                    if(element){
                        element.value = value.value;
                    } else{
                        
                        bucketByHash.data.push(value);
                    }

                } else {

                    const dataValue = bucketByHash.data; 
                    if(dataValue.key !== value.key){
                        bucketByHash.data = [dataValue].concat(value);
                    } else {
                        dataValue.value = value.value;                   
                    }
                                      
                }  
            }
        }
    }

    get(key: string): string | undefined{
        const hash = this.hashFunc(key);
        const requiredBucket = (this.findBucket(hash));
                
        if(requiredBucket){
            if(isArray(requiredBucket.data)){
                return requiredBucket.data.find(element => element.key === key)!.value;
            } else {
                return requiredBucket.data.value;
            }   
        }
    }

    delete(key: string): string{
        const hash = this.hashFunc(key);
        const nesessaryBucket = this.findBucket(hash);
        if(!nesessaryBucket){
            return `Элемент с ключом ${key} не найден`
        } else if(isArray(nesessaryBucket.data)){
            nesessaryBucket.data = nesessaryBucket.data.filter(element => element.key !== key);
                return `Элемент с ключом ${key} успешно удален`
                
            } else {
                this.buckets = this.buckets.filter(bucket => bucket.hash !== hash);
                return `Элемент с ключом ${key} успешно удален`
            }
        
        

    }

    clear(): void {
        this.buckets = [];
        
    }
    
}

const map = new MapFunction();
map.set({key : 'Alex', value : 'Hello Alex'});
map.set({key : 'Alex', value : 'Hello Alex dublicate'});

map.set({key : 'Alex1', value : 'Hello , i am dublicate'});
map.set({key : 'Ben', value : 'Hello , i am dublicate'});



console.log(map.delete('Alex1'))

map.clear()







