import { PrismaClient } from '@prisma/client';

const DB = new PrismaClient();

export { DB };