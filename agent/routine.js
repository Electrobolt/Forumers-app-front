import * as config from './config.js'
import * as tunnel from './tunnel.js'
import * as proxy from './proxy.js'

const padding = 20;
const status = 'Session Status'.padEnd(padding) + 'Online';
const version = 'Version'.padEnd(padding) + '0.0.1';
const forwarding = 'Forwarding'.padEnd(padding); 

export function authenticate(token){
    config.setAuthToken(token);

    tunnel.authenticate(token);

    return true;
}

export function setTunnel(endpoint){
    tunnel.setTunnel(endpoint);
}

export function saveTunnel(local, remote){
    proxy.setRoute(local, remote);
    presentation(local, remote);
}

export function presentation(local, remote){
    forwarding = forwarding + remote + ' -> ' + local;
    console.log(status);
    console.log(version);
    console.log(forwarding);
}