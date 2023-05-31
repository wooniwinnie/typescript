declare const fooBar: {
    foo: number;
    bar: string;
};
type FooBarObj = {
    foo: number;
    bar: string;
};
declare const fooBarObj: FooBarObj;
interface FooBarObj2 {
    foo: number;
    bar: string;
}
declare const fooBarObj2: FooBarObj2;
type PriceData = {
    [key: string]: number;
};
declare const data: PriceData;
type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;
};
declare const myObj: {
    foo: boolean;
    bar: boolean;
};
declare const myObj2: {
    foo: boolean;
    bar: boolean;
    baz: number;
};
declare const myObj3: {
    foo: boolean;
    bar: boolean;
    baz: string;
};
type MyObj2 = {
    readonly foo: number;
};
declare const obj6: MyObj2;
declare const num: number;
type T = typeof num;
declare const foo2: T;
//# sourceMappingURL=3.2%20ObjectType.d.ts.map