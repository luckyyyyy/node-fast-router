/**
 * This file is part of the node-fast-router
 * @author William Chan <root@williamchan.me>
 */
import http from 'node:http';

export interface ResponseHeaders {
  key: string;
  value: string;
}

export interface Request {
  url: URL;
  method: string;
  headers: http.IncomingHttpHeaders;
  req: http.IncomingMessage;
  route: RouteResult;
  params: Record<string, string>;
  // payload: Record<string, unknown> | string | Buffer;
  form?: Record<string, any>;
  body?: unknown;
  rawBody: Buffer;
}

// 理论上需要抽象一层 算了 暂时懒人
export interface ResponseData {
  body: string | Buffer | object;
  headers?: ResponseHeaders[];
  timeout?: number;
  statusCode?: number;
  contentType?: string;
}
export interface PathTokens {
  [0]: number;
  [1]: string;
}

export interface RouteConfig {
  method: string;
  path: string;
  vhost?: string;
  id: string;
  handler: (request: Request, res: http.ServerResponse) => Promise<ResponseData>;
}

export interface A extends RouteConfig {
  method: string;
  path: string;
  vhost?: string;
  id: string;
  handler: (request: Request, res: http.ServerResponse) => Promise<ResponseData>;
}

export interface Route extends RouteConfig {
  tokens: PathTokens[];
}

export interface RouteResult {
  method: string;
  route: Route;
  path: string;
  params?: Record<string, string>;
}
