import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'wenlong.teo',
      password: '12345678',
    },
    {
      userId: 2,
      username: 'leongchien.koh',
      password: '12345678',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username == username);
  }
}
