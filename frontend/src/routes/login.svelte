<script>
    import { auth, login } from '../stores/auth.js';
  
    let username = '';
    let password = '';
  
    async function handleLogin() {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const data = await res.json();
      if (res.ok) {
        login(data.token, data.user);
        window.location.href = '/dashboard';
      } else {
        alert('Login failed');
      }
    }
  </script>
  
  <form on:submit|preventDefault={handleLogin}>
    <input type="text" bind:value={username} placeholder="Username" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
  