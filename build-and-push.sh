#!/bin/bash

set -e

# Helper for styled output
print_step() {
  echo ""
  echo "🔹 $1"
  echo "----------------------------------------"
}

print_done() {
  echo "✅ $1"
}

print_warn() {
  echo "⚠️ $1"
}

# Step 1: Build the project
print_step "Starting build process..."
npm run build
print_done "Build completed."

# Step 2: Save current branch
CURRENT_BRANCH=$(git branch --show-current)

# Step 3: Check if deployed exists
print_step "Checking if 'gh-pages' branch exists..."
if ! git ls-remote --exit-code --heads origin gh-pages > /dev/null; then
  print_warn "'gh-pages' branch does not exist. Creating..."
  git checkout --orphan gh-pages
  git reset --hard
  git commit --allow-empty -m "Init gh-pages"
  git push origin gh-pages
  git checkout "$CURRENT_BRANCH"
  print_done "'gh-pages' branch created."
else
  print_done "'gh-pages' branch already exists."
fi

# Step 4: Prepare worktree
print_step "Preparing worktree for deployment..."
rm -rf deployed-temp
git worktree prune
git worktree add deployed-temp gh-pages
print_done "Worktree ready."

# Step 5: Copy build output
print_step "Copying build output to worktree..."
rm -rf deployed-temp/*
cp -r dist/* deployed-temp/
print_done "Files copied."

# Step 6: Squash & push
print_step "Committing and squashing to 'gh-pages'..."
cd deployed-temp
git reset --soft $(git rev-list --max-parents=0 HEAD)
git add .
git commit -m "Deploy to GitHub Pages"
git push --force origin gh-pages

cd ..
print_done "Deployed and squashed successfully."

# Step 7: Cleanup
print_step "Cleaning up..."
git worktree remove deployed-temp
rm -rf dist
print_done "Deployment completed successfully! 🎉"