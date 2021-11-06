const getLoggedIn = (state) => state.auth.isLoggedIn;
const getUserName = (state) => state.auth.user.name;
const getToken = (state) => state.auth.token;
const getError = (state) => state.auth.error;
const getLoading = (state) => state.auth.loading;

const authSelectors = {
  getLoggedIn,
  getUserName,
  getToken,
  getError,
  getLoading,
};

export default authSelectors;
