declare module 'sort-by' {
    export function sortBy<T>(...args: (keyof T)[]): (...args: any[])=> number;
}

