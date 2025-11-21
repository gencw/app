import { faker } from "@faker-js/faker";

export interface User {
  id: number;
  name: string;
  avatar: string;
}

// 生成 N 条假用户数据
export function generateMockFollows(count = 5): User[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(), // 自动生成头像 URL
  }));
}
