import Hapi from "hapi";
import setupEnv from "./config";
import setupUserRoutes from "./routes/user.routes";
import setupDefRoute from "./routes";
import { sequelize } from "./db/sqlite";
import setupGood from "./plugins/good";
import setupModels from "./model/setup";
import setupSwagger from "./plugins/swagger";

setupEnv();
const server = new Hapi.Server({ port: 3000, host: 'localhost' });

async function setupServer(server) {
  // setup routes
  setupDefRoute(server);
  setupUserRoutes(server);

  // setup db
  await sequelize.authenticate();
  await setupModels();

  // setup plugins
  await setupGood(server);
  await setupSwagger(server);
}

async function startServer(server) {
  await setupServer(server);
  await server.start();
  console.info(`Server started at ${server.info.uri}`);
}

try {
  startServer(server);
} catch (error) {
  console.error(error);
}
