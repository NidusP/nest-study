import { Injectable } from '@nestjs/common';

// src/modules/example/services/first.service.ts
@Injectable()
export class FirstService {
    useValue() {
        return '';
    }

    useId() {
        return '字符串提供者';
    }

    useAlias() {
        return '别名提供者';
    }
}
