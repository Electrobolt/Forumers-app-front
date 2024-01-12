const ADD_TOKEN = 0;
const SET_TUNNEL = 1;

const ERR = -1;

export function verify(line) {

    switch (true) {
        case line.trim().startsWith("config add-authtoken"):
            return ADD_TOKEN;

        case line.trim().startsWith("http"):
            return SET_TUNNEL;


        case /kick;.+;.+;/.test(line.trim()):
            return KICK;

    }
}


export {ADD_TOKEN, SET_TUNNEL};