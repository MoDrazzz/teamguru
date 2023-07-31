import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // make /login default route, delete when landing page is ready
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // if user is signed in and the current path is /login redirect the user to /shell/dashboard
  if (user && req.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/shell/dashboard', req.url))
  }

  // if user is signed in and the current path is /shell redirect the user to /shell/dashboard
  if (user && req.nextUrl.pathname === '/shell') {
    return NextResponse.redirect(new URL('/shell/dashboard', req.url))
  }

  // if user is not signed in and the current path starts with /shell redirect the user to /login
  if (!user && req.nextUrl.pathname.startsWith('/shell')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/', '/login', '/shell/:path*'],
}
