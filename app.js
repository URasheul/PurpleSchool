"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_md5_1 = require("ts-md5");
class Bucket {
    constructor(hash, data) {
        this.hash = hash;
        this.data = data;
    }
}
class Data {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
function isArray(value) {
    return Array.isArray(value);
}
class MapFunction {
    constructor() {
        this.buckets = [];
    }
    hashFunc(key) {
        return ts_md5_1.Md5.hashStr(key);
    }
    findBucket(hash) {
        const requiredBucket = this.buckets.find(bucket => bucket.hash === hash);
        if (!requiredBucket) {
            return undefined;
        }
        return requiredBucket;
    }
    set(value) {
        const hash = this.hashFunc(value.key);
        const bucketByHash = this.findBucket(hash);
        if (!this.buckets.length) {
            this.buckets.push(new Bucket(hash, value));
        }
        else {
            if (!bucketByHash) {
                this.buckets.push(new Bucket(hash, value));
            }
            else {
                if (isArray(bucketByHash.data)) {
                    const element = bucketByHash.data.find(element => element.key === value.key);
                    if (element) {
                        element.value = value.value;
                    }
                    else {
                        bucketByHash.data.push(value);
                    }
                }
                else {
                    const dataValue = bucketByHash.data;
                    if (dataValue.key !== value.key) {
                        bucketByHash.data = [dataValue].concat(value);
                    }
                    else {
                        dataValue.value = value.value;
                    }
                }
            }
        }
    }
    get(key) {
        var _a;
        const hash = this.hashFunc(key);
        const requiredBucket = (this.findBucket(hash));
        if (requiredBucket) {
            if (isArray(requiredBucket.data)) {
                return (_a = requiredBucket.data.find(element => element.key === key)) === null || _a === void 0 ? void 0 : _a.value;
            }
            else {
                return requiredBucket.data.value;
            }
        }
    }
    delete(key) {
        const hash = this.hashFunc(key);
        const nesessaryBucket = this.findBucket(hash);
        if (!nesessaryBucket) {
            return `Элемент с ключом ${key} не найден`;
        }
        else if (isArray(nesessaryBucket.data)) {
            nesessaryBucket.data = nesessaryBucket.data.filter(element => element.key !== key);
            return `Элемент с ключом ${key} успешно удален`;
        }
        else {
            this.buckets = this.buckets.filter(bucket => bucket.hash !== hash);
            return `Элемент с ключом ${key} успешно удален`;
        }
    }
    clear() {
        console.log(this.buckets);
    }
}
const map = new MapFunction();
map.set({ key: 'Alex', value: 'Hello Alex' });
map.set({ key: 'Alex', value: 'Hello Alex dublicate' });
map.set({ key: 'Alex1', value: 'Hello , i am dublicate' });
map.set({ key: 'Ben', value: 'Hello , i am dublicate' });
console.log(map.delete('Alex1'));
map.clear();
