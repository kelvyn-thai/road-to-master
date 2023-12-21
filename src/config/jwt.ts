import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secrectKey: process.env.SECRET_KEY,
}));
