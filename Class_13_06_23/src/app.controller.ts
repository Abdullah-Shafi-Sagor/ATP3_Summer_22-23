import { Controller, Get,Post,Body,Param} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';

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


}
