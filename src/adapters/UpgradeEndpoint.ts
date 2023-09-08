import webSocketHandler from "./WebSocketHandler";

export default async function upgradeEndpointHandler(request: Request, env: Env, context: ExecutionContext) {
  const webSocketPair = new WebSocketPair();

  const server = webSocketPair[0];
  const client = webSocketPair[1];

  webSocketHandler(server);

  return new Response(undefined, {
    status: 101,
    webSocket: client
  });
};
