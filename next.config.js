module.exports = {
    swcMinify: true,
    future: {
        webpack5: true,
    },
    reactStrictMode: true,
    images: {
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
        return [
            {
                source: "/home",
                destination: "/",
                permanent: false,
            },
            {
                source: "/mail",
                destination: "/email",
                permanent: false,
            },
            {
                source: "/qrcode",
                destination: "/qr",
                permanent: false,
            },
            {
                source: "/qr-code",
                destination: "/qr",
                permanent: false,
            },
            {
                source: "/qr-codes",
                destination: "/qr",
                permanent: false,
            },
            {
                source: "/quickresponse",
                destination: "/qr",
                permanent: false,
            },
            {
                source: "/quickresponsecode",
                destination: "/qr",
                permanent: false,
            },
            {
                source: "/quickresponse-code",
                destination: "/qr",
                permanent: false,
            },
            {
                source: "/skills",
                destination: "/#skills",
                permanent: false,
            },
            {
                source: "/league",
                destination: "/lol",
                permanent: false,
            },
            {
                source: "/leagueoflegends",
                destination: "/lol",
                permanent: false,
            },
            {
                source: "/music",
                destination: "/spotify",
                permanent: false,
            },
            {
                source: "/amazon",
                destination: "/wishlist",
                permanent: false,
            },
            {
                source: "/wunschliste",
                destination: "/wishlist",
                permanent: false,
            },
        ];
    },
};
