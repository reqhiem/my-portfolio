<script>
  import Header from "../components/Header.svelte";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Joel Perca - Software Engineer</title>
  <link rel="stylesheet" href="{base}/css/home.css" />
</svelte:head>

<div id="content" class="content">
  <Header />
  <div class="hero">
    <div>
      <h1 class="hero-title">Joel Cristian Perca Quispe</h1>
      <p class="hero-description">
        Fullstack developer crafting innovative digital solutions. Breaking
        conventions with clean architecture and seamless experiences. Code that
        speaks, systems that scale.
      </p>

      {#await fetch("https://api.github.com/users/reqhiem")}
        <p>Loading...</p>
      {:then response}
        {#await response.json()}
          <p>Decoding...</p>
        {:then data}
          <section>
            <h2>My Github Stats</h2>
            <dl>
              <dt>Followers</dt>
              <dd>{data.followers}</dd>
              <dt>Following</dt>
              <dd>{data.following}</dd>
              <dt>Public Repos</dt>
              <dd>{data.public_repos}</dd>
            </dl>
          </section>
        {:catch error}
          <p class="error">Something went wrong: {error.message}</p>
        {/await}
      {:catch error}
        <p class="error">Something went wrong: {error.message}</p>
      {/await}

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
</div>
