module.exports = {
    presets: [
        '@babel/preset-env', // Transpile modern JS to older versions
        '@babel/preset-react' // Support React JSX syntax
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import' // Support dynamic imports
    ]
};