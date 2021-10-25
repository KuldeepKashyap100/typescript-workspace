import "reflect-metadata";

import { RequestHandler } from "express";
import { MetadataKeys } from "../Metadatakeys";

export const use = (middleware: RequestHandler) => {
    return (target: any, key: string, desc: PropertyDescriptor) => {
        const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target, key) || [];
        Reflect.defineMetadata(MetadataKeys.MIDDLEWARE, [...middlewares, middleware], target, key);
    }
}