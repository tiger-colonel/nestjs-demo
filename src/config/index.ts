import { readFileSync } from 'fs';
import { load } from 'js-yaml';
import { join } from 'path';

const configFileNameObj = {
  dev: 'dev',
  production: 'prod',
};

const env = process.env.NODE_ENV;

export default () => {
  const config = load(
    readFileSync(join(__dirname, `./${configFileNameObj[env]}.yml`), 'utf8'),
  ) as Record<string, any>;

  const mysqlOptions = {
    ...config.mysql,
    retryAttempts: 3,
    keepConnectionAlive: true,
  };

  if (env === 'dev') {
    return {
      mysql: {
        ...mysqlOptions,
        autoLoadEntities: true,
      },
    };
  } else {
    return {
      mysql: {
        ...mysqlOptions,
        host: process.env.MYSQL_HOST,
        password: process.env.MYSQL_PASSWORD,
      },
    };
  }
};
