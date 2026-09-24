/**
 * Cloudflare Worker - Canary Auto-Block
 * 
 * SETUP:
 * 1. Go to Cloudflare Dashboard > Workers & Pages > Create Worker
 * 2. Paste this code
 * 3. Add secrets: CF_API_TOKEN, ZONE_ID
 * 4. Set route: cybercode.az/db/*
 * 
 * FLOW:
 * 1. Bot hits /admin/ → Canarytoken fires → email alert
 * 2. Form POST to /db/.env → Worker intercepts → blocks IP → returns 1x1 pixel
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Intercept trap requests
    if (url.pathname === "/db/.env") {
      const attackerIp = request.headers.get("cf-connecting-ip");

      if (attackerIp && env.CF_API_TOKEN && env.ZONE_ID) {
        const cfApiUrl = `https://api.cloudflare.com/client/v4/zones/${env.ZONE_ID}/firewall/access_rules/rules`;

        try {
          await fetch(cfApiUrl, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${env.CF_API_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              mode: "block",
              configuration: {
                target: "ip",
                value: attackerIp,
              },
              notes: "Automated Ban",
            }),
          });
        } catch (err) {
          console.error("Block failed:", err);
        }
      }

      // Return 1x1 transparent pixel GIF
      const pixel = Uint8Array.from(
        atob("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
        (c) => c.charCodeAt(0)
      );
      return new Response(pixel, {
        headers: { "Content-Type": "image/gif" },
      });
    }

    return fetch(request);
  },
};
