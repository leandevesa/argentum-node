import { WebSocketServer } from './WebSocketServer';

class App {

    private wsServer: WebSocketServer;

	constructor() {
        this.wsServer = new WebSocketServer();
        this.wsServer.start();
    }
}

const app = new App();