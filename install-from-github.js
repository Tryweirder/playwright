/**
 * Copyright 2017 Google Inc. All rights reserved.
 * Modifications copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This file is only run when someone installs via the github repo

const {execSync} = require('child_process');

console.log(`Rebuilding installer...`);
try {
  execSync('npm run tsc-installer');
} catch (e) {
}

console.log(`Downloading browsers...`);
const { installBrowsersWithProgressBar } = require('./lib/install/installer');
installBrowsersWithProgressBar().catch(e =>  {
  console.error(`Failed to install browsers, caused by\n${e.stack}`);
  process.exit(1);
});

console.log(`Done. Use "npm run watch" to compile.`);
