// Example configuration file
// Copy this to config.js and fill in your values

module.exports = {
    // Your Helius RPC API key (get from helius.dev)
    HELIUS_API_KEY: 'your-helius-api-key-here',
    
    // Your Solana token address
    TOKEN_ADDRESS: 'your-token-address-here',
    
    // Your wallet private key (base58 format)
    // KEEP THIS SECRET! Never commit this file to git!
    CREATOR_PRIVATE_KEY: 'your-private-key-here',
    
    // Addresses to exclude from rewards (liquidity pools, etc)
    EXCLUDED_ADDRESSES: [
        'liquidity-pool-address-here',
        // Add more addresses as needed
    ],
    
    // Minimum tokens required to receive rewards
    MIN_TOKENS_FOR_REWARDS: 1_000_000, // 1 million tokens
    
    // How often to check holders (milliseconds)
    CHECK_INTERVAL: 30000, // 30 seconds
    
    // How often to distribute rewards (milliseconds)
    DISTRIBUTION_INTERVAL: 300000, // 5 minutes
};
