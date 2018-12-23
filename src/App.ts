import { WebSocketServer } from './WebSocketServer';
import { BalanceLoader } from './global/balance/BalanceLoader';

class App {

    private wsServer: WebSocketServer;

	constructor() {
        this.initApp();
        this.wsServer = new WebSocketServer();
        this.wsServer.start();
    }

    private initApp() {
        BalanceLoader.load();
    }
}

const app = new App();