import { HttpException, HttpStatus } from '@nestjs/common';
import { BUSINESS_ERROR_CODES } from './business.error.codes';

type BusinessError = {
  code: number;
  message: string;
};

export class BusinessException extends HttpException {
  constructor(error: BusinessError | string) {
    if (typeof error === 'string') {
      error = {
        code: BUSINESS_ERROR_CODES.COMMON,
        message: error,
      };
    }
    super(error, HttpStatus.OK);
  }
  static throwForbidden() {
    throw new BusinessException({
      code: BUSINESS_ERROR_CODES.PERMISSION_DISABLED,
      message: '您没有权限~',
    });
  }
}
