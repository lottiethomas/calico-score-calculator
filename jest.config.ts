export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
    moduleNameMapper: {
        "~/(.*)": "<rootDir>/app/$1",
    },
    transform: {
        ".+\\.(jpg|jpeg|png)$": "<rootDir>/tests/returnFileNameTransformer.js",
    }
};