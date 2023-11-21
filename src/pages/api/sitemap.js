export default function handler(req, res) {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
      
      // Instructing the Vercel edge to cache the file
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      
      // generate sitemap here
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      
      <url>
        <loc>https://www.somhako.com/en</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      <url>
        <loc>https://www.somhako.com/ja</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      
      <url>
        <loc>https://www.somhako.com/en/about</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      <url>
        <loc>https://www.somhako.com/ja/about</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      
      <url>
        <loc>https://www.somhako.com/en/blogs</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      <url>
        <loc>https://www.somhako.com/ja/blogs</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      
      <url>
        <loc>https://www.somhako.com/en/novus</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      <url>
        <loc>https://www.somhako.com/ja/novus</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      
      <url>
        <loc>https://www.somhako.com/en/pricing</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      <url>
        <loc>https://www.somhako.com/ja/pricing</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      
      <url>
        <loc>https://www.somhako.com/en/privacy-policy</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      <url>
        <loc>https://www.somhako.com/ja/privacy-policy</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      
      <url>
        <loc>https://www.somhako.com/en/t&c</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      <url>
        <loc>https://www.somhako.com/ja/t&c</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      
      <url>
        <loc>https://www.somhako.com/en/user-agreement</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      <url>
        <loc>https://www.somhako.com/ja/user-agreement</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      
      <url>
        <loc>https://www.somhako.com/en/values</loc>
        <lastmod>2023-11-17</lastmod>
      </url>
      <url>
        <loc>https://www.somhako.com/ja/values</loc>
        <lastmod>2023-11-17</lastmod>
      </url>

      </urlset>`
  
    res.end(xml)
  }