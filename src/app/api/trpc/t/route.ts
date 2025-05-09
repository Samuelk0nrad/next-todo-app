import { NextResponse } from "next/server";

export async function GET() {
  const sampleData = { message: "Hello, this is a sample GET response!" };
  return NextResponse.json(sampleData);
}
