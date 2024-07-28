
enum Methods {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
}

interface IOptions {
    method?: Methods;
    headers?: Headers;
    body?: string;
}

class ResponseBuilder {

    private url: string;
    private options: IOptions = {};    

    setURL(url: string) {
        this.url = url;
        return this;
    }

    setMethod(method: Methods) {
        this.options.method = method;
        return this
    }

    setHeaders(header: Headers) { 

        if(!this.options.headers){
            this.options.headers = header;  
            return this;       
        }         
        
            header.forEach((value, key) => {
                this.options.headers!.append(key, value);//Почему то в этой строчки ругается , что св-во .headers может быть undef(поэтому добавил "!"), но по сути мы ведь сверху через if() проверяем существование этого св-ва.
            });   
            return this;    
        
    
    }

    setBody(body: Record<string, any> ): ResponseBuilder;
    setBody(body: string ): ResponseBuilder;
    setBody(body: string | Record<string, any>): ResponseBuilder {

        if(typeof body == 'string'){
            this.options.body = body;
            return this;
        }
        this.options.body = JSON.stringify(body);
        return this
    }
    
    async exec() {
        const resp = await fetch(this.url, this.options);
        const data = await resp.json()
        console.log(data);        
        return data;
    }

    getOpt():void {
        console.log(this.options.method);        
        console.log(this.options.headers);        
    }


}

let resp = new ResponseBuilder()
resp.setMethod(Methods.GET)
    .setURL('https://jsonplaceholder.typicode.com/posts/1')
    .setHeaders(new Headers({'content-type' : 'text/html'}))
    .setHeaders(new Headers({'connection' : 'close'}))  
    .getOpt()
   

   
    