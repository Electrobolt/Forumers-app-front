// import dotenv from 'dotenv';
// dotenv.config({ path: './.env' });

// import * as routine from './routine.js'

// import tls from 'tls'

// var client = new tls.TLSSocket;

// export function set(cert){
//     certificate = cert;

//     // connect the client
//     tls.connect(Number(process.env.PORT), process.env.HOST,options,()=>{

//     })
// }

// client.on('', () => {

// });

import { connect } from 'socket.io-client';
const socket = connect(process.env.HOST, {
    rejectUnauthorized: false
});

import httpProxy from 'http-proxy'

var proxyForwarder = httpProxy.createProxyServer({});

var routes = {};

socket.on('message', function(data) {
    switch (data.event) {
        case 'tunnel.ok':
            routine.saveTunnel(data.url, data.endpoint);
            routes[data.endpoint] = data.url;
            break;
        
        case 'redirection':
            proxyForwarder.web(data.req, data.res, { target: routes[data.url] });
            console.log('Request', req.method, req.url);
            break;

        case 'auth.ok':

            break;
        default:
           // 
            break;
    }
});

export function authenticate(authtoken){
    socket.emit('send', { token: authtoken, action: 'auth' });
}

export function setTunnel(endpoint){
    socket.emit('send', { local: endpoint, action: 'tunnel' });
}