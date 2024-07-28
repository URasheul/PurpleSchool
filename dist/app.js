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
        if (!this.options.headers) {
            this.options.headers = header;
            return this;
        }
        header.forEach((value, key) => {
            this.options.headers.append(key, value); //Почему то в этой строчки ругается , что св-во .headers может быть undef(поэтому добавил "!"), но по сути мы ведь сверху через if() проверяем существование этого св-ва.
        });
        return this;
    }
    setBody(body) {
        if (typeof body == 'string') {
            this.options.body = body;
            return this;
        }
        this.options.body = JSON.stringify(body);
        return this;
    }
    async exec() {
        const resp = await fetch(this.url, this.options);
        const data = await resp.json();
        console.log(data);
        return data;
    }
    getOpt() {
        console.log(this.options.method);
        console.log(this.options.headers);
    }
}
let resp = new ResponseBuilder();
resp.setMethod(Methods.GET)
    .setURL('https://jsonplaceholder.typicode.com/posts/1')
    .setHeaders(new Headers({ 'content-type': 'text/html' }))
    .setHeaders(new Headers({ 'connection': 'close' }))
    .setHeaders(new Headers({ 'connection': '1111' }))
    .getOpt();
