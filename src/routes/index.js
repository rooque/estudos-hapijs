const defaultRouterConfig = {
  handler: function(request, h) {
    return { "ver" : process.env.APP_VER };
  },
  description: 'Return API version',
  tags: ['api']
}

export default server => {
  server.route({
    method: "GET",
    path: "/",
    config: defaultRouterConfig
  });
};
