// ✅ NO PARAMS HERE
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const res = await fetch(`http://157.230.240.97:9999/api/v1/categories`);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to proxy API', error: (error as Error).message },
      { status: 500 }
    );
  }
}
