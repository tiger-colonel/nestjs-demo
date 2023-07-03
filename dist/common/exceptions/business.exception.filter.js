"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessException = void 0;
const common_1 = require("@nestjs/common");
const business_error_codes_1 = require("./business.error.codes");
class BusinessException extends common_1.HttpException {
    constructor(error) {
        if (typeof error === 'string') {
            error = {
                code: business_error_codes_1.BUSINESS_ERROR_CODES.COMMON,
                message: error,
            };
        }
        super(error, common_1.HttpStatus.OK);
    }
    static throwForbidden() {
        throw new BusinessException({
            code: business_error_codes_1.BUSINESS_ERROR_CODES.PERMISSION_DISABLED,
            message: '您没有权限~',
        });
    }
}
exports.BusinessException = BusinessException;
//# sourceMappingURL=business.exception.filter.js.map