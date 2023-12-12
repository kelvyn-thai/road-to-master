import { Controller, Get, Param } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action will return post has id = ${id}`;
  }

  @Get()
  findAll(): string {
    return 'This actions will return all posts';
  }
}
