describe('Package.json / Configuration', () => {
    it('Loads package.json', () => {
        const config = require('../src/configs');
        expect(config).toBeDefined();
        expect(config).toHaveProperty('urls');
    });
});
