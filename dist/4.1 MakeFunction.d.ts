declare function range(min: number, max: number): number[];
declare function sum(min: number, max: number): number;
declare function helloWorldNTimes(n: number): void;
declare function helloWorldNTimes2(n: number): void;
type Human = {
    height: number;
    weight: number;
};
declare const calcBMI: ({ height, weight }: Human) => number;
declare const jiwoon: Human;
declare const calcBMI2: ({ height, weight }: Human) => number;
declare const calcBMI3: ({ weight, height }: Human) => void;
type Human2 = {
    height: number;
    weight: number;
};
type ReturnObj = {
    bmi: number;
};
declare const calcBMIObject: ({ height, weight }: Human2) => ReturnObj;
declare const obj: {
    double(num: number): number;
    double2: (num: number) => number;
};
declare const sum2: (...args: number[]) => number;
declare const sum3: (base: number, ...args: number[]) => number;
declare const sum4: (...args: number[]) => number;
declare const nums: number[];
declare const sum5: (a: number, b: number, c: number) => number;
declare const nums2: [number, number, number];
declare const toLowerOrUpper: (str: string, upper?: boolean) => string;
type User = {
    name: string;
    age: number;
};
declare const getName: (u: User) => string;
declare const users: User[];
declare const names: string[];
declare const ages: number[];
//# sourceMappingURL=4.1%20MakeFunction.d.ts.map