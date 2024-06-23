import { writable } from "svelte/store";

export const auth = writable({
  isAuthenticated: false,
  user: null,
  token: null,
});

export function login(token, user) {
  auth.set({ isAuthenticated: true, user, token });
  localStorage.setItem("token", token);
}

export function logout() {
  auth.set({ isAuthenticated: false, user: null, token: null });
  localStorage.removeItem("token");
}
