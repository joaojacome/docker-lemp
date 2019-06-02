const which = require('which');
const { spawn } = require('child_process');

const task = ({projectName, uid, gid, basePath, parameters}) => {
    const joinedParameters = parameters.join(' ');
    const src = `${basePath}/www/${projectName}`;
    const docker = which.sync('docker');
    const command = `run -it --rm \
        -v ${src}:/usr/src/app \
        -v ${basePath}/tmp/.npm:/.npm \
        -w /usr/src/app \
        -u ${uid}:${gid}  \
        node:10.16.0 npm ${joinedParameters}`;

    spawn(docker, [command], { stdio: 'inherit', cwd: basePath,  shell: true});
}

module.exports = task;