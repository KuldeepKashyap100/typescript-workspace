import { RequestHandler } from "express";
import  "reflect-metadata";
import { MetadataKeys } from "../Metadatakeys";

interface RequestHandlerDescriptor extends PropertyDescriptor {
    value?: RequestHandler
}

function routeBinder(method: string) {
    return (path: string) => {
        return (target: any, key: string, desc: RequestHandlerDescriptor) => {
            Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
            Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);   
        }
    }
}


export const get = routeBinder("get");
export const put = routeBinder("put");
export const post = routeBinder("post");
export const del = routeBinder("delete");
export const patch = routeBinder("patch");