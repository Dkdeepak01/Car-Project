<script>
    import { auth, logout } from '../stores/auth.js';
  
    let $auth;
    auth.subscribe(value => $auth = value);
  </script>
  
  <nav>
    {#if $auth.isAuthenticated}
      <button on:click={logout}>Logout</button>
    {:else}
      <a href="/login">Login</a>
    {/if}
  </nav>
  