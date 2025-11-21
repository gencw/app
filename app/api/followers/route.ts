import { generateMockFollows } from "@/mocks/follows";
import { NextRequest, NextResponse } from "next/server";

// GET 请求
export async function GET(req: NextRequest) {
  const follows = generateMockFollows(5);
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(follows);
}
