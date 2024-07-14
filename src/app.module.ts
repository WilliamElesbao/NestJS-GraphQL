import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './graphql/models/User';
import { UserSetting } from './graphql/models/UserSetting';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: '10.50.20.91',
    //   port: 1433,
    //   username: 'portal',
    //   password: 'fkj#5htmsa2018',
    //   database: 'TM-CIOS-HMG',
    //   entities: [],
    //   synchronize: true,
    //   options: {
    //     encrypt: true,
    //     trustServerCertificate: true,
    //   },
    // }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql.db',
      entities: [User, UserSetting],
      synchronize: true,
      // logging: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
