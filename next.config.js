module.exports = {
    swcMinify: true,
    future: {
        webpack5: true,
    },
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        // just for static site generation since otherwise next/image does not work
        loader: 'akamai',
        path: '',

        domains: [
            "drive.google.com",
            "lh1.googleusercontent.com",
            "lh2.googleusercontent.com",
            "lh3.googleusercontent.com",
            "lh4.googleusercontent.com",
            "lh5.googleusercontent.com",
            "lh6.googleusercontent.com",
        ],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    async redirects() {
        return []
    }
};
