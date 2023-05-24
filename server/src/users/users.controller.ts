import { Controller, Get, Post, Body, Param, Delete, Put, Options } from '@nestjs/common';
import { UsersService } from './users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  
  @Options()
  handleOptions() {
    return 'OPTIONS request handled';
  }

  //get all users
  @Get()
  async findAll(): Promise<User[]> {
    return await this.usersService.findall();
  }

  //get one user
  @Get(':username')
  async findOne(@Param('username') username: string): Promise<User> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new Error('User not found');
    } else {
      return user;
    }
  }

  async findExisting(query: Partial<User>): Promise<User> {
    return await this.userRepository.findOne({ where: query });
  }

  //create user
  @Post()
  async create(@Body() user: User): Promise<User> {
    
    const existingUser = await this.findExisting({ username: user.username });
    console.log(user.username);
    if (existingUser) {
      throw new Error('User with the same name already exists');
    }

    return await this.usersService.create(user);
  }

  //update user
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.usersService.update(id, user);
  }

  //delete user
  // @Delete(':id')
  // async delete(@Param('id') id: number): Promise<void> {
  //   //handle the error if user not found
  //   const user = await this.usersService.findOne(id);
  //   if (!user) {
  //     throw new Error('User not found');
  //   }
  //   return this.usersService.delete(id);
  // }
}



