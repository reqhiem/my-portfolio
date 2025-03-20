<script>
  import Header from "../components/header.svelte";
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="{base}/css/home.css">
</svelte:head>

<div id="content" class="content">
  <Header />
  <div class="hero">
    <div>
      <h1 class="hero-title">Joel Cristian Perca Quispe</h1>
      <p class="hero-description">
        Fullstack developer crafting innovative digital solutions. Breaking
        conventions with clean architecture and seamless experiences. Code
        that speaks, systems that scale.
      </p>
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