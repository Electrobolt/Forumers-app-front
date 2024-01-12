import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

var config_file_path = path.join(path.dirname(import.meta.url.replace(/^file:\/\/\//,'')), "./config/config.yaml");

export function setAuthToken(authToken){
    const token = yaml.dump({authtoken : authToken});

    fs.writeFileSync(config_file_path, token, 'utf8');
}

export function getAuthToken(){
    const config = yaml.load(fs.readFileSync(config_file_path, 'utf8'));

    return config.authtoken;
}

export function isAuthenticated(){
    return getAuthToken() == undefined;
}