🎯 Solana Token Rewards Distribution System
Automated system for distributing creator fees to token holders proportionally based on their holdings.

License Node Solana

✨ Features
🔄 Automatic Distribution - Distributes rewards every 5 minutes
📊 Live Monitoring - Real-time web dashboard with countdown
💰 Proportional Rewards - Based on % of tokens held
🚫 Smart Filtering - Excludes liquidity pools and specified addresses
📈 Transaction History - Tracks all distributions
⚡ Helius Integration - Fast and reliable blockchain data
🌐 Web Dashboard - Beautiful cyberpunk-themed interface
📋 Prerequisites
Node.js 16+ (Download)
Solana wallet with creator fees
Helius RPC API key (Get free key)
Token address on Solana
🚀 Quick Start
1. Installation
git clone https://github.com/yourusername/solana-rewards-bot.git
cd solana-rewards-bot
npm install
2. Configuration
Find Your Token's Liquidity Pool
# Edit find-liquidity-pool.js and add your TOKEN_ADDRESS
node find-liquidity-pool.js
Configure the Bot
Open ponzi-rewards-bot.js and update:

const CONFIG = {
    RPC_URL: 'https://mainnet.helius-rpc.com/?api-key=YOUR_KEY',
    TOKEN_ADDRESS: 'YOUR_TOKEN_ADDRESS',
    CREATOR_PRIVATE_KEY: 'YOUR_WALLET_PRIVATE_KEY',
    EXCLUDED_ADDRESSES: [
        'LIQUIDITY_POOL_ADDRESS', // From find-liquidity-pool.js
    ],
};
Getting Your Private Key:

Phantom: Settings → Security & Privacy → Export Private Key
Solflare: Settings → Export Private Key
3. Run the Bot
# Terminal 1: Start the bot
node ponzi-rewards-bot.js

# Terminal 2: Start API server
node api-server.js

# Terminal 3: Expose API (optional, for web dashboard)
ngrok http 3000
4. Deploy Web Dashboard
Update ponzi-token-beta.html:
const API_URL = 'https://your-ngrok-url.ngrok-free.app/api/rewards';
const TOKEN_ADDRESS = 'YOUR_TOKEN_ADDRESS';
Deploy to Netlify:
Drag and drop HTML file to Netlify
Done! ✅
📊 How It Works
Distribution Logic
Bot checks holders every 30 seconds
Distributes rewards every 5 minutes
Only holders with >1M tokens qualify
Rewards are proportional to holdings:
10% of supply = 10% of rewards
5% of supply = 5% of rewards
Example
You have 1 SOL in creator fees:

Holder	Tokens	% of Supply	Reward
Alice	5M	25%	0.25 SOL
Bob	3M	15%	0.15 SOL
Carol	2M	10%	0.10 SOL
🗂️ Project Structure
├── ponzi-rewards-bot.js      # Main distribution bot
├── api-server.js              # API server for dashboard
├── ponzi-token-beta.html      # Web dashboard
├── package.json               # Dependencies
├── find-liquidity-pool.js     # Helper: Find LP address
├── test-api.js                # Helper: Test API
├── test-holders.js            # Helper: Test holder fetching
├── .gitignore                 # Git ignore rules
└── README.md                  # Documentation
🔧 Configuration Options
Adjust Distribution Frequency
DISTRIBUTION_INTERVAL: 300000, // 5 minutes (in milliseconds)
Change Minimum Token Requirement
MIN_TOKENS_FOR_REWARDS: 1_000_000, // 1M tokens
Exclude Additional Addresses
EXCLUDED_ADDRESSES: [
    'LIQUIDITY_POOL_ADDRESS',
    'YOUR_CREATOR_WALLET',  // Optional: exclude yourself
    'BURN_ADDRESS',         // Optional: exclude burn address
],
📁 Generated Files
rewards-data.json
{
  "totalDistributed": 15.5432,
  "lastDistributionTime": "2025-01-18T10:35:00Z",
  "nextDistributionTime": "2025-01-18T10:40:00Z",
  "currentHolders": [...],
  "history": [...]
}
🧪 Testing
Test API Connection
node test-api.js
Test Holder Fetching
# First edit test-holders.js with your TOKEN_ADDRESS
node test-holders.js
🛡️ Security
⚠️ CRITICAL
NEVER commit your private key to Git
NEVER share your configured bot file
NEVER upload configured files to public servers
Best Practices
Use .gitignore to protect sensitive data
Use a dedicated wallet for distributions
Keep only necessary funds in distribution wallet
Regularly backup rewards-data.json
Monitor bot console for errors
Verify transactions on Solscan
🌐 Web Dashboard Features
🟢 Live Status Indicator - Shows if bot is online
⏱️ Countdown Timer - Time until next distribution
💰 Total Rewards Paid - Automatically tracked
👥 Holder List - All eligible holders
📜 Distribution History - Last 100 distributions
📊 Token Stats - Price, market cap, volume
🚀 Deployment Options
Option 1: Local Computer (Free)
Keep computer running 24/7
All 3 terminals must stay open
Option 2: VPS (Recommended)
Deploy to Contabo, DigitalOcean, etc. (~$5/month)
Bot runs 24/7 automatically
More reliable than local computer
Option 3: Cloud Function
Deploy to AWS Lambda, Google Cloud Functions
Most reliable but more complex setup
🐛 Troubleshooting
Bot shows "0 eligible holders"
Solution: Check your TOKEN_ADDRESS is correct

node test-holders.js
"API not available" on website
Solutions:

Check bot is running: node ponzi-rewards-bot.js
Check API is running: node api-server.js
Check ngrok is running: ngrok http 3000
Verify API_URL in HTML matches ngrok URL
"Cannot find module"
Solution: Install dependencies

npm install
Bot crashes or errors
Solution: Check console output and:

Verify Helius API key is valid
Verify private key format is correct (base58)
Ensure wallet has SOL for transaction fees
Check token address is correct

🙏 Credits
Built with:

@solana/web3.js
Helius RPC
DexScreener API
