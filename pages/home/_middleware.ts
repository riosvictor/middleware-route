/* eslint-disable @next/next/no-server-import-in-page */
import { NextRequest, NextResponse } from "next/server"

const authParams = ['auth']

export function middleware(req: NextRequest) {
  const url = req.nextUrl

  url.searchParams.forEach((_, key) => {
    if (authParams.includes(key)) {
      return NextResponse.next()
    }
  })

  // return new Response('Auth required', {
  //   status: 401,
  // })

  return NextResponse.redirect('/')

  // source: https://github.com/vercel/examples/tree/main/edge-functions
}