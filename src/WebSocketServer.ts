import * as Http from 'http';
import * as WebSocket from 'websocket';
import { Message } from './packets/Message';

export class WebSocketServer {

    private static PORT: number = 7665;
    private static PROTOCOL: string = "binary";
    private clients: Array<any> = new Array();
    
    public start() {
        const httpServer: Http.Server = Http.createServer(this.handleHTTPRequest);

        httpServer.listen(WebSocketServer.PORT, function() {
            console.log('\x1b[42m', `Server is listening on port ${ WebSocketServer.PORT }`);
        });

        const wsServer = new WebSocket.server({
            httpServer: httpServer
        });

        wsServer.on('request', (request) => {
            this.handleNewConnection(request);
        });

		console.log("Server starting..");
    }

    private handleHTTPRequest(request: Http.IncomingMessage, 
                              response: Http.ServerResponse) {

		response.writeHead(200);
		response.end(`Active connections: ${this.clients.length}`);
    }
    
    private handleNewConnection(request: WebSocket.request) {
        const messageHandler = new Message();
        const connection = request.accept(WebSocketServer.PROTOCOL, request.origin);
        const index = this.clients.push(connection) - 1;
        const user = this.clients[index];
    
        console.log('\x1b[33m%s\x1b[0m', `New connection: ${index}`); 
    
        connection.on('message', (message) => {
            messageHandler.handle(user, message);
        });
    
        connection.on('close', (connection) => {
            console.log('connection lost');
            this.clients.splice(index, 1);
        });
    }
}
