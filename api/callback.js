module.exports = async (req, res) => {
  const code = req.query && req.query.code;
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;

  if (!code) {
    res.statusCode = 400;
    res.end("Missing code");
    return;
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenData = await tokenRes.json();

  if (tokenData.error) {
    res.statusCode = 400;
    res.end(`OAuth error: ${tokenData.error_description || tokenData.error}`);
    return;
  }

  const token = tokenData.access_token;
  const message = `authorization:github:success:${JSON.stringify({ token, provider: "github" })}`;

  const html = `
<!DOCTYPE html>
<html>
<body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      ${JSON.stringify(message)},
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
</body>
</html>`;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(html);
};
