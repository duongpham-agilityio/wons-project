const BASE_URL = process.env.BASE_URL;
const PRODUCT_URL = process.env.DATA_PRODUCT;
const OVERVIEW_URL = process.env.DATA_OVERVIEW;
const ACCOUNT_URL = process.env.ACCOUNT_URL;
const AUTH = process.env.AUTH_SECRET;
const ROUTERS = {
  HOME: '/',
  INBOX: 'inbox',
  WALLET: 'wallet',
  NEWS_FEED: 'newsFeed',
  ANALYTICS: 'analytics',
  MARKET: 'market',
  ARCHIVE: 'archive',
  PROFILE: 'profile',
  SETTINGS: 'settings',
  SEARCH: 'search',
  DETAIL: 'detail',
  ADD_PRODUCT: 'add',
  EDIT_PRODUCT: 'edit',
  EMPTY: '',
  LOGIN: 'login',
  SIGN_UP: 'signUp',
};

export { ROUTERS, BASE_URL, PRODUCT_URL, OVERVIEW_URL, ACCOUNT_URL, AUTH };
