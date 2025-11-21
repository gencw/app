import { faker } from "@faker-js/faker";

export interface User {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  checked: boolean;
}

export function generateMockFollows(count = 5): User[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    bio: faker.lorem.sentence(),
    checked: faker.datatype.boolean(),
  }));
}
