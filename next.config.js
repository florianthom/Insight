const webpack = require("webpack");

const { parsed: myEnv } = require("dotenv").config({
    path: ".env.dotenv",
});

console.log("here");
console.log(myEnv);

module.exports = {
    future: {
        webpack5: true,
    },
    reactStrictMode: true,
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
        return config;
    },
};
