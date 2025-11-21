import { faker } from "@faker-js/faker";

export interface User {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  checked: boolean;
}

// 生成 N 条假用户数据
export function generateMockFollows(count = 5): User[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(), // 自动生成头像 URL
    bio: faker.lorem.sentence(),
    checked: faker.datatype.boolean(),
  }));
}
