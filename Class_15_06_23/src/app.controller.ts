import { Controller, Get,Post,Body,UsePipes,Req,Res,ValidationPipe,Param} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';
import { NewDto } from './dto/newDto.dto';
import * as session from 'express-session';
import {Request,Response} from 'express';


let User=[];
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  getUsers() {
    return User;
  }


  @Post('add')
  addUser(@Body() create:CreateDto ){
    User.push(create);
    return 'user added';
  }
  @Get('user/:name')
  getuser(@Param('name')name:string)
  {
    return User.find((User)=>User.name===name);
  }
 @Post('valid')
 @UsePipes(new ValidationPipe)
  validUser(@Body() newDto:NewDto ){
    User.push(newDto);
    return 'user added';
  }
  @Post('login')
  login(@Req() req: Request & { session: any }) {
  req.session.username = 'abd';
  return req.session.username;
}
@Get('profile')
  profile(@Req() req: Request & { session: any })  {
    console.log(req.session.username);
  }
@Post('logout')
  logout(@Req() req: Request & { session: any }) {
  req.session.destroy();
  return 'The session is RIP';
}

}
