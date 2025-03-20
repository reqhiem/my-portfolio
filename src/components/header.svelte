<script>
  import { page } from "$app/stores";
</script>

<nav class="header">
  <a href="/" class:active={$page.url.pathname === "/"}>Home</a>
  <a href="/projects" class:active={$page.url.pathname === "/projects"}
    >Projects</a
  >
  <a href="/contact" class:active={$page.url.pathname === "/contact"}>Contact</a
  >
</nav>

<style>
  .header {
    display: flex;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
  }

  .active {
    border-bottom: 4px solid var(--primary-color);
    font-weight: bold;
  }
</style>
