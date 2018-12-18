import * as Http from 'http';
import * as WebSocket from 'websocket';
import { Message } from './protocol/Message';
import { Game } from './global/game/Game';

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

        const connection: WebSocket.connection = request.accept(WebSocketServer.PROTOCOL,
                                                                request.origin);
        const clientIndex: number | null = Game.addClientAndGetIndex(connection);
    
        if (clientIndex) {
            console.log('\x1b[33m%s\x1b[0m', `New connection: ${clientIndex}`); 
        
            connection.on('message', (message) => {
                Message.handle(clientIndex, message);
            });
        
            connection.on('close', (connection) => {
                console.log('connection lost');
                Game.removeClient(clientIndex);
            });
        } else {
            // TODO : Server lleno -> ver de cerrar request
        }
    }
}