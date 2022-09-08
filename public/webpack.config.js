module.exports = {
    resolve:{
        fallback: { process: require.resolve("querystring-es3") },
    },
}