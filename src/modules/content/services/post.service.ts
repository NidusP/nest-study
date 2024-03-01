import { Injectable, NotFoundException } from '@nestjs/common';

import { isNil } from 'lodash';

import { CreatePostDto } from '../dtos/create-post.dto';
import { UpdatePostDto } from '../dtos/update-post.dto';
import { PostEntity } from '../types';

@Injectable()
export class PostService {
    protected posts: PostEntity[] = [
        { title: '第一篇文章标题', body: '第一篇文章内容' },
        { title: '第二篇文章标题', body: '第二篇文章内容' },
        { title: '第三篇文章标题', body: '第三篇文章内容' },
        { title: '第四篇文章标题', body: '第四篇文章内容' },
        { title: '第五篇文章标题', body: '第五篇文章内容' },
        { title: '第六篇文章标题', body: '第六篇文章内容' },
    ].map((v, id) => ({ ...v, id }));

    async findAll() {
        return this.posts;
    }

    async findOne(id: number) {
        const p = this.posts.find((item) => item.id === id);
        if (isNil(p)) throw new NotFoundException(`the post with id ${id} not exits!`);
        return p;
    }

    async create(data: CreatePostDto) {
        const p: PostEntity = {
            id: Math.max(...this.posts.map((item) => item.id + 1)),
            ...data,
        };
        this.posts.push(p);
        return p;
    }

    async update(data: UpdatePostDto) {
        const p = await this.findOne(data.id);
        const rp = { ...p, ...data };
        this.posts = this.posts.map((item) => (item.id === data.id ? rp : item));
        return rp;
    }

    async delete(id: number) {
        const p = await this.findOne(id);
        this.posts = this.posts.filter((item) => item.id === id);
        return p;
    }
}
