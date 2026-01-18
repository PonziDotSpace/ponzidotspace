// Simple API server to serve data to your Netlify site
// Run this alongside the rewards bot

const http = require('http');
const fs = require('fs').promises;

const PORT = 3000;
const DATA_FILE = './rewards-data.json';

// Enable CORS for all origins (including Netlify and ngrok)
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, ngrok-skip-browser-warning',
    'Content-Type': 'application/json'
};

async function getData() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return {
            totalDistributed: 0,
            history: [],
            lastUpdate: null
        };
    }
}

const server = http.createServer(async (req, res) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(200, headers);
        res.end();
        return;
    }
    
    // Handle GET requests
    if (req.method === 'GET' && req.url === '/api/rewards') {
        try {
            const data = await getData();
            res.writeHead(200, headers);
            res.end(JSON.stringify(data));
        } catch (error) {
            res.writeHead(500, headers);
            res.end(JSON.stringify({ error: 'Internal server error' }));
        }
    } else {
        res.writeHead(404, headers);
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`📡 API Server running on http://localhost:${PORT}`);
    console.log(`🌐 Endpoint: http://localhost:${PORT}/api/rewards`);
    console.log(`\n⚠️  To make this accessible from Netlify, you need to:`);
    console.log(`   1. Use ngrok: ngrok http ${PORT}`);
    console.log(`   2. Or deploy to a cloud service (Heroku, Railway, etc.)`);
    console.log(`   3. Update the API_URL in your HTML file\n`);
});
