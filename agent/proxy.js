import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

var routes_file_path = path.join(path.dirname(import.meta.url.replace(/^file:\/\/\//,'')), "./config/config.yaml");

export function setRoute(local, remote){
    const routes = yaml.load(fs.readFileSync(routes_file_path, 'utf8'));
    routes[local]= remote
    const updated = yaml.dump(routes);

    fs.writeFileSync(routes_file_path, updated, 'utf8');
}

export function getRoutes(){
    const routes = yaml.load(fs.readFileSync(routes_file_path, 'utf8'));

    return routes;
}