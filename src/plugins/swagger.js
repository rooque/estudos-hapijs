import HapiSwagger from "hapi-swagger";
import Vision from "vision";
import Inert from "inert";
import { configFile } from '../config';

const swaggerOptions = {
    info: {
        title: 'API Documentation',
        version: configFile.ver ,
    },
    documentationPath: "/docs"
};

export default async server => {
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);
};