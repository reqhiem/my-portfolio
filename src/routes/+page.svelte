<script>
  import { base } from "$app/paths";
  import { onMount } from "svelte";

  let githubData = null;
  let loading = true;
  let error = null;

  onMount(async () => {
    try {
      const response = await fetch("https://api.github.com/users/reqhiem");
      githubData = await response.json();
    } catch (err) {
      error = err;
    }
    loading = false;
  });
</script>

<svelte:head>
  <title>Joel Perca - Software Engineer</title>
  <link rel="stylesheet" href="{base}/css/home.css" />
</svelte:head>

<div class="hero">
  <div>
    <h1 class="hero-title">Joel Cristian Perca Quispe</h1>
    <p class="hero-description">
      Fullstack developer crafting innovative digital solutions. Breaking
      conventions with clean architecture and seamless experiences. Code that
      speaks, systems that scale.
    </p>

    {#if loading}
      <p>Loading...</p>
    {:else if error}
      <p class="error">Something went wrong: {error.message}</p>
    {:else}
      <section>
        <h2>My GitHub Stats</h2>
        <dl>
          <dt>Followers</dt>
          <dd>{githubData.followers}</dd>
          <dt>Following</dt>
          <dd>{githubData.following}</dd>
          <dt>Public Repositories</dt>
          <dd>{githubData.public_repos}</dd>
        </dl>
      </section>
    {/if}

    <div class="hero-buttons">
      <button class="hero-button">Download Resume</button>
      <a href="{base}/contact" class="hero-button">Contact</a>
    </div>
  </div>

  <img
    src="{base}/images/deadpool-metarupx.gif"
    alt="Happy Deadpool"
    width="128"
  />
</div>

<style>
  dl {
    display: grid;
    grid-template-columns: auto;
  }
  dt {
    grid-row: 1;
    font-family: inherit;
    font-weight: bold;
    text-transform: uppercase;
  }
  dd {
    font-family: inherit;
    font-weight: bold;
  }
</style>
