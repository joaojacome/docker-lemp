#!/usr/bin/env node

const uid = process.getuid();
const gid = process.getgid();

const tasks = [
  'composer', 'docker', 'php', 'node', 'npm', 'mysql'
];

const currentFolder = __dirname;
const basePath = process.env.DIR;
console.log(basePath);

if (!process.argv[2]) {
  console.log('No task specified');
  process.exit(0);
}
let projectName = '';
let parameters = [];
if (-1 === tasks.indexOf(process.argv[2])) {
  if (-1 === tasks.indexOf(process.argv[3])) {
    console.log('Invalid task');
    process.exit(0);
  } else {
    projectName = process.argv[2];
    console.log('project name', projectName );
    task = process.argv[3];
    parameters = process.argv.slice(4,process.argv.length);
  }

} else {
  task = process.argv[2];
  parameters = process.argv.slice(3,process.argv.length);
}

require(currentFolder + '/' + task + '/index.js')({projectName, uid, gid, basePath, parameters});
