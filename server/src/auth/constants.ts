import 'dotenv/config';
console.log('SECRET is => ', process.env.SECRET);
export const jwtConstants = {
  secret: 'process.env.SECRET',
};
