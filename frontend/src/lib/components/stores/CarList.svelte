<script>
    import { onMount } from 'svelte';
    import { fetchData } from '../utils/api.js';
    let cars = [];
  
    onMount(async () => {
      cars = await fetchData('/api/cars');
    });
  </script>
  
  <ul>
    {#each cars as car}
      <li>{car.name} - {car.price}</li>
    {/each}
  </ul>
  