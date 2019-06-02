const which = require('which');
const { spawn } = require('child_process');

const task = ({projectName, uid, gid, basePath, parameters}) => {
    const joinedParameters = parameters.join(' ');
    const src = `${basePath}/www/${projectName}`;
    const docker = which.sync('docker');
    const command = `run -it --rm \
        -v ${src}:/app \
        -u ${uid}:${gid}  \
        composer ${joinedParameters}`;

    spawn(docker, [command], { stdio: 'inherit', cwd: basePath,  shell: true});
}

module.exports = task;