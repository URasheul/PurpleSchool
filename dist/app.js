"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class RequestProduct {
    getProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const resp = yield fetch(`https://dummyjson.com/products/${id}`);
            const product = yield resp.json();
            console.log(product);
            return product;
        });
    }
}
class RequestProductProxy {
    constructor(api) {
        this.api = api;
    }
    getProduct(id) {
        try {
            if (id <= 10) {
                return this.api.getProduct(id);
            }
            throw new Error('товар не доступен');
        }
        catch (error) {
            console.log(error);
        }
    }
}
const userRequest = new RequestProductProxy(new RequestProduct());
userRequest.getProduct(11);
userRequest.getProduct(2);
