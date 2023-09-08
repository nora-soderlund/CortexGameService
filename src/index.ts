import upgradeEndpointHandler from "./adapters/UpgradeEndpoint";

export default {
  async fetch(request: Request, env: Env, context: ExecutionContext) {
    try {
      if(request.headers.has("Upgrade"))
        return upgradeEndpointHandler(request, env, context);

      return new Response(undefined, { status: 404, statusText: "Resource Not Found" });
    }
    catch(error) {
      console.error(error);

      return new Response(undefined, { status: 500, statusText: "Internal Server Error" });
    }
  }
};
