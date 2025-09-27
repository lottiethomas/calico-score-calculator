export default {
    process(src, filename) {
        return {
            code: 'module.exports = ' + JSON.stringify(filename) + ';'
        };
    },
};