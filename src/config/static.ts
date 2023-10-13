import { join } from "node:path";

export const staticConfig = {
    root: join(__dirname, "../..", "static"),
    prefix: "/assets/",
    index: false,
    list: false,
    serveDotFiles: false
};
