$NOW = Get-Date

npm run build
cd dist
git add . -f
git commit -m "dist from $NOW"
git push origin gh-pages --force
cd .. 
