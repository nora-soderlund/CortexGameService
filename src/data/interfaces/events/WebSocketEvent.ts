export default class WebSocketEvent {
  constructor(public readonly name: string, public readonly body: Record<string, unknown>) {

  };
};
