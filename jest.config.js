// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,
        '^.+\\/(.*svg)(\\?url)$': `<rootDir>/__mocks__/fileMock.js`,
        '^.+\\/(.*png)(\\?url)$': `<rootDir>/__mocks__/fileMock.js`,
    },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
