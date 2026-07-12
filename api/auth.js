module.exports = (req, res) => {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const redirectUri = `https://${req.headers.host}/api/callback`;
  const authorizeUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`;

  res.statusCode = 302;
  res.setHeader('Location', authorizeUrl);
  res.end();
};
