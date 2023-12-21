import { registerAs } from '@nestjs/config';

export default registerAs('configuration', () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
}));
