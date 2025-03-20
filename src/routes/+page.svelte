<script>
  import Header from "../components/header.svelte";
</script>

<svelte:head>
  <title>Home</title>
  <link rel="stylesheet" href="/css/home.css">
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
        <a href="/contact" class="hero-button">Contact</a>
      </div>
    </div>

    <img
      src="/images/deadpool-metarupx.gif"
      alt="Happy Deadpool"
      width="128"
    />
  </div>
</div>