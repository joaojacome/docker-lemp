const which = require('which');
const { spawn } = require('child_process');

const task = ({projectName, basePath, parameters}) => {
    const docker = which.sync('docker');
    const joinedParameters = parameters.join(' ');
    const command = `exec -it docker-lemp_php \
        bash -c 'cd /var/www/html/${projectName}; php ${joinedParameters}'`;

    spawn(docker, [command], { stdio: 'inherit', cwd: basePath,  shell: true});
}

module.exports = task;