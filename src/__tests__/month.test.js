import {getMonth} from "../month";

describe('accept a number - returns the month', () => {
it("accept one retutn the january", () => {
expect(getMonth(1)).toBe('январь');
})
it("accept zero, retutn an error", () => {
expect(getMonth(13)).toBe('error, but you are still nice');
})
it("accept string", () => {
expect(getMonth('month')).toBe('it is not a number');
})
})