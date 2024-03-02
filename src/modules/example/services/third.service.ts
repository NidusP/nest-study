import { Injectable } from '@nestjs/common';

// src/modules/example/services/third.service.ts
@Injectable()
export class ThirdService {
    useClass() {
        return '';
    }

    useFactory() {
        return '构造器提供者2';
    }
}
