// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
// import * as bcrypt from 'bcrypt';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthService {
// 	constructor(
// 		private usersService: UsersService,
// 		private jwtService: JwtService
// 		) {}

//   	async signIn(username: string, pass: string): Promise<any> {
// 		const user = await this.usersService.findOne(username);
// 		if (!user || !(await bcrypt.compare(pass, user.password))) {
// 			throw new UnauthorizedException('Invalid credentials');
// 		}
// 		const payload = { id: user.id, username: user.username };
// 		return {
// 			access_token: await this.jwtService.signAsync(payload),
// 		};
//   }
// }
