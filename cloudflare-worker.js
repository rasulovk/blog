export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/db/.env") {
      const attackerIp = request.headers.get("cf-connecting-ip");

      if (attackerIp && env.CF_API_TOKEN && env.ZONE_ID) {
        const rulesetUrl = `https://api.cloudflare.com/client/v4/zones/${env.ZONE_ID}/rulesets/phases/http_request_firewall_custom/entrypoint`;

        try {
          const getResp = await fetch(rulesetUrl, {
            method: "GET",
            headers: { "Authorization": `Bearer ${env.CF_API_TOKEN}` },
          });
          const getData = await getResp.json();

          let existingRules = [];
          if (getData.result && getData.result.rules) {
            existingRules = getData.result.rules;
          }

          const alreadyBlocked = existingRules.some(
            (r) => r.expression && r.expression.includes(attackerIp)
          );

          if (!alreadyBlocked) {
            existingRules.push({
              description: "Block_ips",
              expression: `(ip.src eq ${attackerIp})`,
              action: "block",
              enabled: true,
            });

            await fetch(rulesetUrl, {
              method: "PUT",
              headers: {
                "Authorization": `Bearer ${env.CF_API_TOKEN}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ rules: existingRules }),
            });

            console.log(`Blocked IP: ${attackerIp}`);

            // Telegram notification
            if (env.TG_BOT_TOKEN && env.TG_CHAT_ID) {
              const tgUrl = `https://api.telegram.org/bot${env.TG_BOT_TOKEN}/sendMessage`;
              await fetch(tgUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  chat_id: env.TG_CHAT_ID,
                  text: `🚨 <b>IP Blocked</b>\n\n📍 IP: <code>${attackerIp}</code>\n🔗 Path: /db/.env\n⏰ Time: ${new Date().toISOString()}`,
                  parse_mode: "HTML",
                }),
              });
            }
          }
        } catch (err) {
          console.error("Block failed:", err);
        }
      }

      const pixel = Uint8Array.from(atob("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"), c => c.charCodeAt(0));
      return new Response(pixel, { headers: { "Content-Type": "image/gif" } });
    }

    return fetch(request);
  },
};