import express from "express";

export interface HttpServer {
  register: (method: string, url: string, callback: Function) => void;
  listen: (port: number) => void;
}
