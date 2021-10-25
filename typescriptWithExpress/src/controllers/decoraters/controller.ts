import express, { Request, Response, NextFunction, RequestHandler} from "express";
import { AppRouter } from "../../AppRouter";
import { RequestMethods } from "../../RequestMethods";
import { MetadataKeys } from "../Metadatakeys";

const bodyValidators = (keys: string[]): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction) => {
        if(!req.body) return res.status(422).send("Invalid request");
        for(let key of keys)
            if(!req.body[key]) return res.status(422).send("Invalid request");

        next();
    }

}

export const controller = (routePrefix: string) => {
    return (target: Function) => {
        for(const key in target.prototype) {
            const router = AppRouter.getInstance();
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys.PATH, target.prototype, key);
            const method: RequestMethods = Reflect.getMetadata(MetadataKeys.METHOD, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) || [];

            const validator = bodyValidators(requiredBodyProps);
            if(path)
                router[method](routePrefix + path, ...middlewares, validator, routeHandler);
        };
    };
}