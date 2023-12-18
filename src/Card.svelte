<script>

  export let id;
  export let name;
  export let username;
  export let email;
  export let address;
  export let phone;
  export let website;
  export let company;

</script>


<div class="card">
    <header>
        <h1> id:{id} User:{name}</h1>
    </header>
    <main>

        <p>
            {username} live in {address.city} on the street {address.street} his suite is <strong>{address.suite}</strong>
        </p>

        <section>
             <article>
                <h3>Personal Data</h3>
                <small>
                    email: {email} 
                    phone Number: {phone}
                    website: {website}
                    company: {company. name}
                    catchPhrase:{company.catchPhrase}
                    zipcode: {address.zipcode}
                </small>
             </article>
        </section>
            
    </main>

    <footer>
        lat {address.geo.lat} - lng {address.geo.lng}
    </footer>
    
</div>

<style>
     .card{
        border-radius: 10px;
        border: 1px solid #fff;
        width: 300px;
        height: 500px;
        overflow: hidden;
        box-shadow: 0 0 10px ;
     }
</style>