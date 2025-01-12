import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'senha',
      database: 'nome_do_banco',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Cuidado com isso em produção
    }),
    UserModule,
  ],
})
export class AppModule {}
