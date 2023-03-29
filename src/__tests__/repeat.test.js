import {repeatWord} from "../repeat";

describe("repeat word with number", () => {
it("repeat word 5 times", () => {
expect(repeatWord('go', 5)).toBe('go1 go2 go3 go4 go5 ');
})
it("repeat word with zero", () => {
expect(repeatWord('go', 0)).toBe('вы не можете ввести 0');
})
it("repeat word with invalid number", () => {
expect(repeatWord('go', 15)).toBe('число вне диапазона');
})
})