import { Injectable } from '@nestjs/common';

// src/modules/example/services/second.service.ts
@Injectable()
export class SecondService {
    useClass() {
        return '';
    }

    useFactory() {
        return '构造器提供者1';
    }

    useAsync() {
        return '异步提供者';
    }
}
