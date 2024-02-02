import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToMany, PrimaryColumn, Relation } from 'typeorm';

import { PostEntity } from './post.entity';

// src/modules/content/entities/tag.entity.ts
@Exclude()
@Entity('content_tags')
export class TagEntity {
    @PrimaryColumn({ type: 'varchar', generated: 'uuid', length: 36 })
    id: string;

    @Column({ comment: '标签名称' })
    name: string;

    @Column({ comment: '标签描述', nullable: true })
    description?: string;

    // 文章与标签 多对多
    @ManyToMany(() => PostEntity, (post) => post.tags)
    posts: Relation<PostEntity[]>;
}
