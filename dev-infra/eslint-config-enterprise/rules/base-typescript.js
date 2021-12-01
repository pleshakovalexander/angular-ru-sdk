/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                createDefaultProgram: true,
                project: './tsconfig*.json',
                sourceType: 'module',
                errorOnUnknownASTType: true,
                errorOnTypeScriptSyntacticAndSemanticIssues: true,
                warnOnUnsupportedTypeScriptVersion: false
            },
            plugins: ['@typescript-eslint'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended'
            ]
        }
    ]
};
