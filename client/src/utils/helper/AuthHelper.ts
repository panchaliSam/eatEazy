export const getAuthHeaders = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("No access token found.");
  }
  return {
    Authorization: `Bearer ${accessToken}`,
  };
};
