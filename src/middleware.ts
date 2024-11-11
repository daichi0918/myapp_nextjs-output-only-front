import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  console.log('ミドルウェアsss');
  return NextResponse.next();
};

export const config = {
  matcher: ['/', '/task'],
};
