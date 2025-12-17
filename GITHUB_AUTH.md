# GitHub Authentication Setup

GitHub no longer supports password authentication. You need to use one of these methods:

## Option 1: Personal Access Token (Easiest)

### Step 1: Create a Personal Access Token

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Direct link: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name like "Portfolio Web"
4. Select scopes: Check `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Use the Token

When pushing, use the token as your password:

```bash
git push -u origin main
```

When prompted:
- Username: `stevxnnn`
- Password: `paste_your_token_here` (the token you just created)

### Step 3: Store Credentials (Optional)

To avoid entering the token every time:

```bash
git config --global credential.helper store
```

Then push once with the token, and Git will remember it.

## Option 2: SSH Keys (More Secure)

### Step 1: Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "stevenliew929@gmail.com"
```

Press Enter to accept default location. Optionally set a passphrase.

### Step 2: Add SSH Key to GitHub

1. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   Copy the entire output.

2. Go to GitHub → Settings → SSH and GPG keys
   - Direct link: https://github.com/settings/keys
3. Click "New SSH key"
4. Paste your public key
5. Click "Add SSH key"

### Step 3: Update Remote URL

```bash
git remote set-url origin git@github.com:stevxnnn/portfolio-web.git
```

Then push:
```bash
git push -u origin main
```

## Option 3: GitHub CLI (gh)

```bash
# Install GitHub CLI
brew install gh

# Authenticate
gh auth login

# Then push normally
git push -u origin main
```

## Quick Fix for Current Issue

If you just want to push now, use Option 1 (Personal Access Token) - it's the fastest!

