"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const base_exception_filter_1 = require("./common/exceptions/base.exception.filter");
const http_exception_filter_1 = require("./common/exceptions/http.exception.filter");
const transform_interceptor_1 = require("./common/interceptor/transform.interceptor");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    app.useGlobalFilters(new base_exception_filter_1.AllExceptionsFilter(), new http_exception_filter_1.HttpExceptionsFilter());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map