import WebSocketEvent from "../WebSocketEvent";

export default class PingResponseEvent extends WebSocketEvent {
  constructor(private readonly timestamp: number) {
    super("PingResponse", { timestamp });
  }
};
