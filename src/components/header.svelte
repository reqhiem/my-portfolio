<script>
  import { page } from "$app/stores";
  import { base } from '$app/paths';
</script>

<nav class="header">
  <a href="{base}/" class:active={$page.url.pathname === "/"}>Home</a>
  <a href="{base}/projects" class:active={$page.url.pathname === "/projects"}
    >Projects</a
  >
  <a href="{base}/contact" class:active={$page.url.pathname === "/contact"}>Contact me</a
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
