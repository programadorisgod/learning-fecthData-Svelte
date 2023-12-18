<script >
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import {fecthData} from './utils/fecthData.js'
  import Card from './Card.svelte';
  import CardSlot from './CardSlot.svelte';
  import { onMount } from 'svelte';
   

  let response = []
 
  // @ts-ignore
  onMount(() => response = fecthData())

   function handleClick () {
     // @ts-ignore
     response = fecthData()
  }


</script>

<main>
 
  <button on:click={handleClick}>Fecth data</button>

   {#await response}
     <p>Loanding</p>
   {:then  users} 
   {#each users as user }
   <ul>
    <Card {...user}/>
    <!--
      Se pueden hacer de dos formas, con slot o pasando las props, la ventaja de slot es que puedes hacer un componente reutilizable
 <CardSlot>
        <header>
          <h1> id:{user.id} User:{user.name}</h1>
      </header>
      <main>
  
          <p>
              {user.username} live in {user.address.city} on the street {user.address.street} his suite is <strong>{user.address.suite}</strong>
          </p>
  
          <section>
               <article>
                  <h3>Personal Data</h3>
                  <small>
                      email: {user.email} 
                      phone Number: {user.phone}
                      website: {user.website}
                      company: {user.company. name}
                      catchPhrase:{user.company.catchPhrase}
                      zipcode: {user.address.zipcode}
                  </small>
               </article>
          </section>
              
      </main>
  
      <footer>
          lat {user.address.geo.lat} - lng {user.address.geo.lng}
      </CardSlot>
    -->
   </ul>
 {/each}
   {/await}
</main>
