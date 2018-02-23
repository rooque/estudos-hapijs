const options = {
  ops: {
      interval: 1000
  },
  reporters: {
      console: [{
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{ log: '*', response: '*' }]
      }, {
          module: 'good-console'
      }, 'stdout']
  }
};

export default async server => {
  await server.register({
    plugin: require("good"),
    options
  });
};
