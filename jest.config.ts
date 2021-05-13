export default {
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node"],
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    roots: ["<rootDir>"],
    moduleNameMapper: {
        "@/(.*)": "<rootDir>$1",
    },
};
