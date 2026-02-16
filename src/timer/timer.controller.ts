import {
  Controller,
  Get,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
  Put, Post, Param, Delete
} from '@nestjs/common';
import { TimerService } from './timer.service';
import {Auth} from "../auth/decorators/auth.decorator";
import {TimerRoundDto, TimerSessionDto} from "./timer.dto";
import {CurrentUser} from "../auth/decorators/user.decorator";


@Controller('user/timer')
export class TimerController {
  constructor(private readonly timerService: TimerService) {}

  @Get('today')
  @Auth()
  async getTodaySession(@CurrentUser('id') userId: string) {
    return this.timerService.getTodaySession(userId)
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async create(@CurrentUser('id') userId: string) {
    return this.timerService.create(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('/round/:id')
  @Auth()
  async updateRound(@Param('id') id: string, @Body() dto: TimerRoundDto) {
    return this.timerService.updateRound(dto, id)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(@Body() dto: TimerSessionDto, @CurrentUser('id') userId: string, @Param('id') id: string, ) {
    return this.timerService.update(dto, id, userId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async deleteSession(@CurrentUser('id') userId: string, @Param('id') id: string, ) {
    return this.timerService.deleteSession(id, userId)
  }



}
