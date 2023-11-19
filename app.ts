import express from 'express';
import http from 'http';
import socket from './server';

const PORT = 3002;

const app = express();
const server = http.createServer(app);

socket(server);
server.listen(PORT, () => console.log(`app listening on port ${PORT}!`));