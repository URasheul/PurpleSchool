"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_md5_1 = require("ts-md5");
class Data {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
function isDataArray(value) {
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
        const requiredBucket = this.buckets.find(bucket => bucket[hash]);
        if (!requiredBucket) {
            return undefined;
        }
        return requiredBucket;
    }
    createDataObject(key, value) {
        let convertedKey = this.unknownToString(key);
        let convertedValue = this.unknownToString(value);
        return new Data(convertedKey, convertedValue);
    }
    unknownToString(value) {
        if (Array.isArray(value)) {
            return value.toString();
        }
        switch (typeof value) {
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
            default:
                throw new Error('Не удалось преобразовать значение ключа');
        }
    }
    set(key, value) {
        try {
            const inputData = this.createDataObject(key, value);
            const hash = this.hashFunc(inputData.key);
            const bucketByHash = this.findBucket(hash);
            if (!this.buckets.length || !bucketByHash) {
                this.buckets.push({ [hash]: inputData });
            }
            else {
                let element = bucketByHash[hash];
                if (isDataArray(element)) {
                    const elementByKey = element.find(element => element.key === inputData.key);
                    if (elementByKey) {
                        elementByKey.value = inputData.value;
                    }
                    else {
                        element.push(inputData);
                    }
                }
                else {
                    if (element.key !== inputData.key) {
                        element = [element].concat(inputData);
                    }
                    else {
                        element.value = inputData.value;
                    }
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    get(key) {
        var _a, _b, _c;
        const convertedToStringKey = this.unknownToString(key);
        const hash = this.hashFunc(convertedToStringKey);
        const requiredBucket = (this.findBucket(hash));
        if (requiredBucket) {
            const requiredElement = requiredBucket[hash];
            if (isDataArray(requiredElement)) {
                return (_b = (_a = requiredElement.find(element => element.key === convertedToStringKey)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : `Элемент с ключом ${key} не найден`;
            }
            else {
                return (_c = requiredElement.value) !== null && _c !== void 0 ? _c : `Элемент с ключом ${key} не найден`;
            }
        }
        return `Элемент с ключом ${key} не найден`;
    }
    delete(key) {
        const convertedKey = this.unknownToString(key);
        const hash = this.hashFunc(convertedKey);
        const nesessaryBucket = this.findBucket(hash);
        if (!nesessaryBucket) {
            return `Элемент с ключом ${key} не найден`;
        }
        else {
            let requiredElement = nesessaryBucket[hash];
            if (isDataArray(requiredElement)) {
                requiredElement = requiredElement.filter(element => element.key !== key);
                return `Элемент с ключом ${key} успешно удален`;
            }
            else {
                this.buckets = this.buckets.filter(bucket => !bucket[hash]);
                return `Элемент с ключом ${key} успешно удален`;
            }
        }
    }
    clear() {
        this.buckets = [];
    }
}
