export const getContacts = state => state.contacts.item;
export const getIsLoading = state => state.contacts.isLoading;
export const getFilter = state => state.filter;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserEmail = state => state.auth.user.email;
export const getIsLoadingAuth = state => state.auth.isLoading;
export const getErrorAuth = state => state.auth.error;
