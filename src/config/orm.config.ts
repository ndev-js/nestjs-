import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Profile } from 'src/auth/profile.entity';
import { User } from 'src/auth/user.entity';
export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: process.env.DB_HOST,
    // host: 'localhost',
    // port: Number(process.env.DB_PORT || 3307),
    port: Number(3307),
    username: process.env.DB_USER,
    // username: 'root',
    password: process.env.DB_PASSWORD,
    // password: 'airvon',
    // database: process.env.DB_NAME || 'nest',
    database: 'nest',
    entities: [User, Profile],
    synchronize: true,
  }),
);
