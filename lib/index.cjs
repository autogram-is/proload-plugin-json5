module.exports = {
    name: '@proload/plugin-json5',
    extensions: ['json5'],
    async register(fileName) {
        if (/\.json5?$/.test(fileName)) {
            const { register } = require('json5/lib/register')
            register();
        }
    }
}
