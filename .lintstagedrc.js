const lintStagedConfig = {
	'**/*.(ts)': () => 'yarn tsc',
	'**/*.(ts|vue|js)': (filenames) => [
		`yarn eslint ${filenames.join(' ')} --fix`,
	],
}

export default lintStagedConfig