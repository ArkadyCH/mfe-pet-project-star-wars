import { ProxyOptions } from "vite";
import { RemotesObject } from "@originjs/vite-plugin-federation";

type RemoteProxy = Record<string, ProxyOptions>;

const remoteReducer = (
  acc: RemotesObject,
  [key, val]: [string, string],
): RemotesObject => {
  acc[key] = `${val}/assets/${key}/remoteEntry.js`;
  return acc;
};

const proxyReducer = (
  acc: RemoteProxy,
  [key, val]: [string, string],
): RemoteProxy => {
  acc[`/assets/${key}`] = {
    target: val,
    secure: false,
  };
  return acc;
};

export const processRemotes = (remotes: Record<string, string>) => {
  return Object.entries(remotes).reduce(remoteReducer, {});
};

export const processProxies = (remotes: Record<string, string>) => {
  return Object.entries(remotes).reduce(proxyReducer, {});
};
