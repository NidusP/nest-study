import { Injectable, Scope } from '@nestjs/common';

// Scope
@Injectable({ scope: Scope.TRANSIENT })
export class SeventhService {
    protected demo = 0;

    async add() {
        this.demo++;
    }

    async find() {
        return this.demo;
    }
}
