#!/usr/bin/env node
import {runTests} from '@vscode/test-electron'

await runTests({
  extensionDevelopmentPath: new URL('.', import.meta.url).pathname,
  extensionTestsPath: new URL('index.test.js', import.meta.url).pathname
})