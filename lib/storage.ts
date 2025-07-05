// Get user information from local storage
export const getUser = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

// Set user information in local storage
export const setUser = (user: any) => {
  if (typeof window !== "undefined") {
    console.log(user);

    localStorage.setItem("user", JSON.stringify(user));
  }
};