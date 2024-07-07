
enum Methods {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
}

interface IOptions {
    method?: Methods;
    headers?: Record<string, string>
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

    setHeaders(header: Record<string, string>) {        
        this.options.headers = {...this.options.headers, ...header};       
    }

    setBody(body: string) {
        this.options.body = body;
        return this;
    }
    
    async exec() {
        const resp = await fetch(this.url, this.options);
        const data = await resp.json()
        console.log(data);        
        return data;
    }


}

let resp = new ResponseBuilder();
resp.setMethod(Methods.GET);
resp.setURL('https://jsonplaceholder.typicode.com/posts/1');
resp.setHeaders({'content-type' : 'text/html'})
resp.setHeaders({'connection' : 'close'})
resp.exec()
