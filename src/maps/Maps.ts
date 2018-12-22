export module Maps {

    // TODO: Nunca inicializado
    // TODO: No se agregan users x mapa
    
    const playersIdByMap: Array<Array<number>> = new Array();

    export function getClientsIdInMap(mapId: number): Array<number> {
        return playersIdByMap[mapId];
    }
}