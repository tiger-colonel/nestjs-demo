"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReqMainInfo = void 0;
const getReqMainInfo = (req) => {
    const { method, url, headers, query, params, body, connection } = req;
    const xRealIp = headers['X-Real-IP'];
    const xForwardedFor = headers['X-Forwarded-For'];
    const { ip: cIp } = req;
    const { remoteAddress } = connection || {};
    const ip = xRealIp || xForwardedFor || cIp || remoteAddress;
    return {
        method,
        url,
        headers,
        query,
        params,
        body,
        ip,
        host: headers.host,
    };
};
exports.getReqMainInfo = getReqMainInfo;
//# sourceMappingURL=index.js.map