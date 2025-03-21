import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  create(createPostDto: CreatePostDto) {
    console.debug({ createPostDto });
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }
}
