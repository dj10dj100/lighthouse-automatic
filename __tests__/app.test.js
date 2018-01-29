const start = require('../src/app').start;

describe('Application ', () => {
    it('Starts', () => {
        expect(start).toBeDefined();
    });
});
