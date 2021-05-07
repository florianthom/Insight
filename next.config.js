module.exports = {
    future: {
        webpack5: true,
    },
    reactStrictMode: true,
    images: { domains: ["lh3.googleusercontent.com"] },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};
