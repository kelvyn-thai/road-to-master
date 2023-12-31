import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  },
}));
