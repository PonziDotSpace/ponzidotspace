// Find liquidity pool address for your token
// Run this: node find-liquidity-pool.js

const TOKEN_ADDRESS = 'YOUR_TOKEN_ADDRESS_HERE'; // ← PUT YOUR TOKEN ADDRESS HERE

async function findLiquidityPool() {
    console.log('🔍 Finding liquidity pool for token:', TOKEN_ADDRESS);
    console.log('');
    
    if (TOKEN_ADDRESS === 'YOUR_TOKEN_ADDRESS_HERE') {
        console.log('❌ Please set TOKEN_ADDRESS in find-liquidity-pool.js first!');
        return;
    }
    
    try {
        // Check DexScreener for pool info
        console.log('📊 Checking DexScreener...');
        const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${TOKEN_ADDRESS}`);
        const data = await response.json();
        
        if (data.pairs && data.pairs.length > 0) {
            console.log('✅ Found', data.pairs.length, 'liquidity pools:\n');
            
            data.pairs.forEach((pair, index) => {
                console.log(`Pool ${index + 1}: ${pair.dexId.toUpperCase()}`);
                console.log(`  Pair Address: ${pair.pairAddress}`);
                console.log(`  Liquidity: $${parseInt(pair.liquidity.usd).toLocaleString()}`);
                console.log(`  Volume 24h: $${parseInt(pair.volume.h24).toLocaleString()}`);
                console.log('');
            });
            
            console.log('📋 Add these addresses to EXCLUDED_ADDRESSES in ponzi-rewards-bot.js:');
            console.log('');
            console.log('EXCLUDED_ADDRESSES: [');
            data.pairs.forEach((pair, index) => {
                const comma = index < data.pairs.length - 1 ? ',' : '';
                console.log(`    '${pair.pairAddress}', // ${pair.dexId.toUpperCase()} pool${comma}`);
            });
            console.log('],');
            
        } else {
            console.log('⚠️  No liquidity pools found on DexScreener');
            console.log('');
            console.log('This could mean:');
            console.log('1. Token not yet listed on any DEX');
            console.log('2. Wrong token address');
            console.log('3. Very new token (give it some time)');
        }
        
    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

findLiquidityPool();
