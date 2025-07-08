// Cloudflare Pages function to handle static assets properly
export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Handle static assets with proper MIME types
  if (url.pathname.startsWith('/_next/static/')) {
    if (url.pathname.endsWith('.js')) {
      return new Response(await context.env.ASSETS.fetch(context.request), {
        headers: {
          'Content-Type': 'application/javascript',
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      });
    }
    if (url.pathname.endsWith('.css')) {
      return new Response(await context.env.ASSETS.fetch(context.request), {
        headers: {
          'Content-Type': 'text/css',
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      });
    }
  }
  
  // Handle app chunks specifically
  if (url.pathname.includes('/_next/static/chunks/app/')) {
    return new Response(await context.env.ASSETS.fetch(context.request), {
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  }
  
  // Default handling
  return context.env.ASSETS.fetch(context.request);
}
