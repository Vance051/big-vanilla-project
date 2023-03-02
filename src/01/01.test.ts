import {mul, sum} from "./01";

let a: number;
let b: number;
let c: number;
beforeEach(() => {
    //data
    a = 1;
    b = 2;
    c = 3;
})
test('sum should be correct', () => {
        //action
        const result1 = sum(a, b);
        const result2 = sum(b, c);
        const result3 = sum(a, c);
        //expect result
        expect(result1).toBe(3)
        expect(result2).toBe(5)
        expect(result3).toBe(4)

    }
)

test('multiply should be correct', () => {
        //action
        const result1 = mul(a, b);
        const result2 = mul(b, c);
        const result3 = mul(a, c);
        //expect result
        expect(result1).toBe(2)
        expect(result2).toBe(6)
        expect(result3).toBe(3)

    }
)

