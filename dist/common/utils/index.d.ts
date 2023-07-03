/// <reference types="node" />
/// <reference types="qs" />
import { Request } from 'express';
export declare const getReqMainInfo: (req: Request) => {
    method: string;
    url: string;
    headers: import("http").IncomingHttpHeaders;
    query: import("qs").ParsedQs;
    params: import("express-serve-static-core").ParamsDictionary;
    body: any;
    ip: string | string[];
    host: string;
};
