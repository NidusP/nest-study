import { Repository } from 'typeorm';

import { CustomRepository } from '@/modules/ database/decorators/repository.decorator';

import { PostEntity } from '../entities/post.entity';
// import { PostEntity } from '../types';

@CustomRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {
    buildBaseQB() {
        return this.createQueryBuilder('post');
    }
}
