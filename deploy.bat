call npm run build
call cd docs/.vuepress/dist
call git init
call git add -A
call git commit -m 'deploy'
call git push -f git@github.com:dylandaviddavies/outcome-tests-docs.git master:gh-pages