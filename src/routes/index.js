export default server => {
  server.route({
    method: "GET",
    path: "/",
    handler: function(request, h) {
      return { "ver" : process.env.APP_VER };
    }
  });
};
