import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthorModule } from 'src/author/author.module';

@Module({
  providers: [AuthService],
  imports: [AuthorModule],
})
export class AuthModule {}
