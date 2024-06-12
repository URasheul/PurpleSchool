
import { Md5 } from "ts-md5";

interface IData {
    key: string;
    value: string;
}

interface IBucket{ 
    [hash: string]: Data | Data[];    
}


class Data implements IData {
    constructor(
        public key: string, 
        public value: string){}
}

function isDataArray(value: IData | IData[]): value is IData[]{
    return Array.isArray(value);
}


class MapFunction {

    private buckets: IBucket[] = [];
    
    private hashFunc(key: string): string{
        return Md5.hashStr(key);
    }

    private findBucket(hash: string): IBucket | undefined {
        const requiredBucket = this.buckets.find(bucket => bucket[hash]);        
        
        if(!requiredBucket){
            return undefined           
        }
        return requiredBucket
    }

    private createDataObject(key: unknown, value: unknown): Data{
        let convertedKey = this.unknownToString(key);
        let convertedValue = this.unknownToString(value);        
        return new Data(convertedKey, convertedValue)
    }

    private unknownToString(value: unknown): string{
        if(Array.isArray(value)){
            return value.toString()
        }
        switch(typeof value){
            case 'string':
                return value;
            case 'number':
            case 'boolean':
            case 'symbol':
            case 'bigint':
            case 'function':
                return value.toString();
            case 'object':
                return JSON.stringify(value);
            default :
                throw new Error('Не удалось преобразовать значение ключа');                
        }

        
    }

    set(key: unknown, value: unknown): void{
        try {
            const inputData = this.createDataObject(key, value);
            const hash = this.hashFunc(inputData.key);       
            const bucketByHash = this.findBucket(hash);    
            
            if(!this.buckets.length || !bucketByHash){
                this.buckets.push({[hash]: inputData})
                
                } else {
                    let element = bucketByHash[hash];
                    if (isDataArray(element)){  
    
                        const elementByKey = element.find(element => element.key === inputData.key); 
                        
                        if(elementByKey){
                            elementByKey.value = inputData.value;
                        } else{                        
                           element.push(inputData);
                        }
    
                    } else {
    
                        if(element.key !== inputData.key){
                            element = [element].concat(inputData);
                        } else {
                            element.value = inputData.value;                   
                        }
                                          
                    }  
                } 
        } catch (error) {
            console.log(error);            
        }
        
    }
    


    get(key: unknown): string {
        const convertedToStringKey = this.unknownToString(key);
        const hash = this.hashFunc(convertedToStringKey);
        const requiredBucket = (this.findBucket(hash));
                
        if(requiredBucket){
            const requiredElement = requiredBucket[hash]
            if(isDataArray(requiredElement)){
                return requiredElement.find(element => element.key === convertedToStringKey)?.value ?? `Элемент с ключом ${key} не найден`
            } else {
                return requiredElement.value ?? `Элемент с ключом ${key} не найден`
            }   
        }

        return `Элемент с ключом ${key} не найден`
    }

    delete(key: unknown): string{
        const convertedKey = this.unknownToString(key)
        const hash = this.hashFunc(convertedKey);
        const nesessaryBucket = this.findBucket(hash);
        if(!nesessaryBucket){
            return `Элемент с ключом ${key} не найден`
        } else {                
            let requiredElement = nesessaryBucket[hash];        
            if(isDataArray(requiredElement)){
                requiredElement = requiredElement.filter(element => element.key !== key);
                return `Элемент с ключом ${key} успешно удален`
                
            } else {
                this.buckets = this.buckets.filter(bucket => !bucket[hash]);
                return `Элемент с ключом ${key} успешно удален`
            }
        
        }

    }

    clear(): void {                
        this.buckets = [];        
    }    
    
}















