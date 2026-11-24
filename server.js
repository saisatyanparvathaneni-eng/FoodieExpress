const http = require('http');
const fs = require('fs');
const path = require('path');
const port = Number(process.env.PORT || 3000);
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml'};
const server = http.createServer((req,res)=>{
  const requestPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const safePath = requestPath === '/' ? '/index.html' : requestPath;
  const resolvedPath = requestPath === '/manus-routes.json' ? path.join(root,'public','manus-routes.json') : path.join(root,safePath);
  const filePath = resolvedPath;
  if(!filePath.startsWith(root)){ res.writeHead(403); res.end('Forbidden'); return; }
  fs.readFile(filePath,(error,data)=>{
    if(error){
      if(error.code === 'ENOENT' && !path.extname(safePath)){ fs.readFile(path.join(root,'index.html'),(fallbackError,fallback)=>{ if(fallbackError){res.writeHead(500);res.end('Server error');}else{res.writeHead(200,{'Content-Type':types['.html']});res.end(fallback);} }); return; }
      res.writeHead(error.code === 'ENOENT' ? 404 : 500); res.end(error.code === 'ENOENT' ? 'Not found' : 'Server error'); return;
    }
    const ext=path.extname(filePath).toLowerCase(); res.writeHead(200,{'Content-Type':types[ext] || 'application/octet-stream','Cache-Control':ext==='.html'||ext==='.json'?'no-cache':'public, max-age=3600'}); res.end(data);
  });
});
server.listen(port,'0.0.0.0',()=>console.log(`FoodieExpress preview listening on ${port}`));
