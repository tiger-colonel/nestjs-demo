import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';

const configFileNameObj = {
  dev: 'dev',
  qa: 'qa',
  production: 'prod',
};

const env = process.env.NODE_ENV;

export default () => {
  return load(
    readFileSync(join(__dirname, `./${configFileNameObj[env]}.yml`), 'utf8'),
  ) as Record<string, any>;
};
