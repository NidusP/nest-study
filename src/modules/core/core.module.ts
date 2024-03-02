import { DynamicModule, Global, Module } from '@nestjs/common';

import { ConfigService } from './services/config.service';
import { DynamicService } from './services/dynamic.service';

// 全局模块
@Global()
@Module({
    providers: [ConfigService],
    exports: [ConfigService],
})
export class CoreModule {
    static forRoot(options: { config: RecordAny }): DynamicModule {
        return {
            module: CoreModule,
            global: true,
            providers: [
                {
                    provide: DynamicService,
                    useFactory() {
                        return new DynamicService(options.config);
                    },
                },
            ],
            exports: [DynamicService],
        };
    }
}
