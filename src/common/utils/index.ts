import { Request } from 'express';

export const getReqMainInfo = (req: Request) => {
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
