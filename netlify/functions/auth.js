exports.handler = async (event) => {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const siteUrl = `https://${event.headers.host}`;
  const redirectUri = `${siteUrl}/.netlify/functions/callback`;
  const authorizeUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`;

  return {
    statusCode: 302,
    headers: { Location: authorizeUrl },
  };
};
