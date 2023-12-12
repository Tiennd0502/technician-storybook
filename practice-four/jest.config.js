export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.+\\.(png|jpg)$': 'identity-obj-proxy',
    '^@root(.*)$': '<rootDir>/src$1',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
