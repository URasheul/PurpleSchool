interface IRequestProductAPI {
    getProduct(id: number): IProduct | undefined
}


interface IProduct {
    [key: string] : any;    
}

class RequestProduct implements IRequestProductAPI {
    async getProduct(id: number): Promise<IProduct | undefined> {
        const resp = await fetch(`https://dummyjson.com/products/${id}`);
        const product = await resp.json();
        console.log(product);        
        return product;
    }
}



class RequestProductProxy implements IRequestProductAPI {
    
    constructor(private api: RequestProduct){}

    getProduct(id: number): IProduct | undefined {
        try {
            if(id <= 10) {
                return this.api.getProduct(id)
            }
            throw new Error('товар не доступен')   
        } catch(error) {
            console.log(error);            
        }
    }    
}


const userRequest = new RequestProductProxy(new RequestProduct())
userRequest.getProduct(11);
userRequest.getProduct(2);
