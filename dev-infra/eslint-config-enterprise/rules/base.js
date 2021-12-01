/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['*.ts', '*.js'],
            rules: {
                'no-case-declarations': 'error'
            }
        }
    ]
};
