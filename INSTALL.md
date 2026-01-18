# 🚀 Quick Installation Guide

## Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/solana-rewards-bot.git
cd solana-rewards-bot
npm install
```

## Step 2: Get Required Information

### A) Get Helius API Key
1. Go to https://helius.dev
2. Sign up (free)
3. Create new project
4. Copy API key

### B) Get Your Private Key
**Phantom Wallet:**
1. Open Phantom
2. Settings → Security & Privacy
3. Export Private Key
4. Enter password
5. Copy the key (long string)

**Solflare:**
1. Open Solflare
2. Settings → Export Private Key
3. Copy the key

### C) Find Liquidity Pool Address
```bash
# Edit find-liquidity-pool.js first
node find-liquidity-pool.js
```

## Step 3: Configure Bot

Edit `ponzi-rewards-bot.js`:

```javascript
const CONFIG = {
    RPC_URL: 'https://mainnet.helius-rpc.com/?api-key=YOUR_HELIUS_KEY',
    TOKEN_ADDRESS: 'YOUR_TOKEN_ADDRESS',
    CREATOR_PRIVATE_KEY: 'YOUR_PRIVATE_KEY',
    EXCLUDED_ADDRESSES: [
        'YOUR_LIQUIDITY_POOL_ADDRESS',
    ],
};
```

## Step 4: Test Everything

```bash
# Test API
node test-api.js

# Test holder fetching (edit TOKEN_ADDRESS first)
node test-holders.js

# If all tests pass, start the bot!
node ponzi-rewards-bot.js
```

## Step 5: Run Bot

```bash
# Terminal 1
node ponzi-rewards-bot.js

# Terminal 2
node api-server.js

# Terminal 3 (optional, for web dashboard)
ngrok http 3000
```

## Step 6: Deploy Website (Optional)

1. Update `ponzi-token-beta.html`:
   - Set `API_URL` to your ngrok URL
   - Set `TOKEN_ADDRESS`

2. Go to https://app.netlify.com

3. Drag and drop the HTML file

4. Done! ✅

---

## ⚠️ Important

- Keep private key **SECRET**
- Don't commit configured files to Git
- Test with small amounts first
- Monitor console for errors

## 🆘 Need Help?

Check [README.md](README.md) for full documentation or [open an issue](https://github.com/yourusername/solana-rewards-bot/issues).
