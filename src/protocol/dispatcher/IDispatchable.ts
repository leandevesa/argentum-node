export interface IDispatchable {
    dispatch(clientIndex: number, payload: Buffer);
}