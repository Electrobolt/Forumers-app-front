import io from 'socket.io-client'

const url = "http://localhost:9092";
const socket = io(url);
export default socket;
