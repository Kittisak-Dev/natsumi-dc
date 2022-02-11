echo "[LOG] Executing bash script"

source .github

git add "."
git config --local user.name "$name"
git config --local user.email "$mail"

echo "[LOG] Committing"

read -p "commit message: " msgInput

git commit --author="$name <$mail>" -m "$msgInput"
git push -u origin "main"

echo "[LOG] Successfully committed and pushed"