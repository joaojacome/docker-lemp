const which = require('which');
const { spawn } = require('child_process');

const task = ({uid, gid, basePath, parameters}) => {
    const docker = which.sync('docker-compose');
    let command = '';

    if (parameters[0] === 'up') {
        command = 'up -d';
    } else if (parameters[0] === 'build') {
        command = 'build';
    } else if (parameters[0] === 'down') {
        command = 'down';
    } else if (parameters[0] === 'restart') {
        command = 'restart';
    } else {
        process.exit();
    }

    spawn(docker, [command], { stdio: 'inherit', cwd: basePath,  shell: true, env: {
        UID: uid,
        GID: gid,
    }});
}

module.exports = task;