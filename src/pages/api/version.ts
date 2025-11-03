// src/pages/api/version.ts
import type { APIRoute } from 'astro';

const GITHUB_TOKEN = import.meta.env.TOKEN; 
const OWNER = 'jfrome1'
const REPO = 'ntw2029'

const headers = {
    'Cache-Control': 'no-store, must-revalidate',
    'Content-Type': 'application/json',
};

export const GET: APIRoute = async () => {
    try {
        const url = `https://api.github.com/repos/${OWNER}/${REPO}/commits/main`; // Adjust 'main' to your branch name

        const response = await fetch(url, {
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
            },
        });

        if (!response.ok) {
            return new Response(JSON.stringify({ version: 'error-' + Date.now() }), { status: 500, headers });
        }

        const commit = await response.json();
        const latestSha = commit.sha.substring(0, 10); // Use a shorter, 10-char SHA

        return new Response(
            JSON.stringify({ version: latestSha }),
            { status: 200, headers }
        );

    } catch (error) {
        console.error('GitHub API Error:', error);
        return new Response(JSON.stringify({ version: 'error-' + Date.now() }), { status: 500, headers });
    }
};