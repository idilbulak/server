// import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { SignInUserDto } from 'src/dtos/signin-user.dto';

// @Controller('auth')
// export class AuthController {
// 	constructor(private authService: AuthService) {}
	
// 	@HttpCode(HttpStatus.OK)
// 	@Post('login')
// 	async signIn(@Body() signInDto: SignInUserDto) {
// 		return this.authService.signIn(signInDto.username, signInDto.password);
//   }
// }

// @Post('login')
//   async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
//     const user = await this.userRepository.findOne({ where: { username: loginUserDto.username }});
//     if (!user) {
//       throw new BadRequestException('Invalid credentials');
//     }

//     const isPasswordMatching = await bcrypt.compare(loginUserDto.password, user.password);
//     if (!isPasswordMatching) {
//       throw new BadRequestException('Invalid credentials');
//     }

//     // At this point, the login was successful.
//     // You might want to return some user data,
//     // or perhaps a JWT for further authenticated requests.
//     return { message: 'Login successful' };
//   }
