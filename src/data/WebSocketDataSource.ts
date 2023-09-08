import WebSocketEvent from "./interfaces/events/WebSocketEvent";

export default class WebSocketDataSource {
  constructor(private readonly webSocket: WebSocket) {
  };

  send(events: WebSocketEvent | WebSocketEvent[]) {
    if(events instanceof WebSocketEvent)
      events = [ events ];

    const payload = JSON.stringify(events.map((event) => [ event.name, event.body ]));

    console.debug("Sending: ", payload);
    this.webSocket.send(payload);
  };
};
