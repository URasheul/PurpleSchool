"use strict";
var Methods;
(function (Methods) {
    Methods["GET"] = "GET";
    Methods["POST"] = "POST";
    Methods["PATCH"] = "PATCH";
    Methods["PUT"] = "PUT";
})(Methods || (Methods = {}));
class ResponseBuilder {
    constructor() {
        this.options = {};
    }
    setURL(url) {
        this.url = url;
        return this;
    }
    setMethod(method) {
        this.options.method = method;
        return this;
    }
    setHeaders(header) {
        this.options.headers = { ...this.options.headers, ...header };
    }
    setBody(body) {
        this.options.body = body;
        return this;
    }
    async exec() {
        const resp = await fetch(this.url, this.options);
        const data = await resp.json();
        console.log(data);
        return data;
    }
}
let resp = new ResponseBuilder();
resp.setMethod(Methods.GET);
resp.setURL('https://jsonplaceholder.typicode.com/posts/1');
resp.setHeaders({ 'content-type': 'text/html' });
resp.setHeaders({ 'connection': 'close' });
resp.exec();
