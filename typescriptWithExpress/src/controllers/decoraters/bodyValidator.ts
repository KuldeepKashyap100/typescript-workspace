import "reflect-metadata";
import {MetadataKeys} from "../Metadatakeys";

export const bodyValidator = (...keys: string[]) => {
    return (target: any, key: string, desc: PropertyDescriptor) => {
        Reflect.defineMetadata(MetadataKeys.VALIDATOR, keys, target, key);
    }
}