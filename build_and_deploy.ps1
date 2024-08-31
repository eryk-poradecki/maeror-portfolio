$NOW = Get-Date

npm run build
git add dist -f
git commit -m "dist from $NOW"
git subtree push --prefix dist origin gh-pages
