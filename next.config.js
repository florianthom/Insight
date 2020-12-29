console.log(process.env.ENVIRONMENT);

module.exports = {
    publicRuntimeConfig: {
        NODE_ENV: process.env.ENVIRONMENT,
        PORT: process.env.PORT,
    },
};
