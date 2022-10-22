export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserEmail = state => state.auth.user.name;
export const getIsLoadingAuth = state => state.auth.isLoading;
export const getErrorAuth = state => state.auth.error;
export const getIsCurrentUserFetching = state =>
  state.auth.isCurrentUserFetching;
