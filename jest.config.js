module.exports = {
    // moduleDirectories: ["node_modules", "./src"],
    roots: ["<rootDir>"],
    transform: {
        "^.+\\.tsx?$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/src/tests/jest/cssTransform.js",
    },
    moduleNameMapper: {
        "@/(.*)": "<rootDir>$1",
    },

    collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
    // setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],

    transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
    //additional prop from a github issue: https://github.com/zeit/next.js/issues/8663
    preset: "ts-jest",
    testEnvironment: "jsdom",
    globals: {
        // we must specify a custom tsconfig for tests because we need the typescript transform
        // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
        // can see this setting in tsconfig.spec.json -> "jsx": "react"
        "ts-jest": {
            tsConfig: "tsconfig.spec.json",
        },
    },
};
