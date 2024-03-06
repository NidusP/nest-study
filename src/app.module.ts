import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { database } from './config';
import { DatabaseModule } from './modules/ database/database.module';
import { ContentModule } from './modules/content/content.module';
import { CoreModule } from './modules/core/core.module';

@Module({
    imports: [ContentModule, CoreModule.forRoot(), DatabaseModule.forRoot(database)],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
