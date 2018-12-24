import { WebSocketServer } from './WebSocketServer';
import { BalanceLoader } from './global/balance/BalanceLoader';
import { ObjectsLoader } from './global/objects/ObjectsLoader';

class App {

    private wsServer: WebSocketServer;

	constructor() {
        this.initApp();
        this.wsServer = new WebSocketServer();
        this.wsServer.start();
    }

    private initApp() {
        BalanceLoader.load();
        ObjectsLoader.load();
    }
}

const app = new App();