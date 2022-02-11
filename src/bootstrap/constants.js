export const CONSTANTS = {
  STRAVA_AUTH_LINK: `http://www.strava.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_STRAVA_REDIRECT}&approval_prompt=auto&scope=activity:read_all,activity:write,profile:read_all`,
  STRAVA_ORANGE: '#fc5200',
};
