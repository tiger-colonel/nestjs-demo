"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const js_yaml_1 = require("js-yaml");
const path_1 = require("path");
const configFileNameObj = {
    dev: 'dev',
    qa: 'qa',
    production: 'prod',
};
const env = process.env.NODE_ENV;
exports.default = () => {
    return (0, js_yaml_1.load)((0, fs_1.readFileSync)((0, path_1.join)(__dirname, `./${configFileNameObj[env]}.yml`), 'utf8'));
};
//# sourceMappingURL=index.js.map