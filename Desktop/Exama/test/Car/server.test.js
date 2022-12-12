const diff = require("./test")
describe('test diff', () => {
    test('test 4 - 2 = 2', () => {
        expect(diff(1, 2)).toBe(-1)

    });


});