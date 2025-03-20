<script>
  import { page } from "$app/stores";
  import { base } from '$app/paths';
  
  function isActive(path) {
    const currentPath = $page.url.pathname;
    const basePath = base || '';
    
    if (path === '/') {
      return currentPath === basePath + '/' || currentPath === basePath;
    }
    
    return currentPath === basePath + path || currentPath.startsWith(basePath + path + '/');
  }
</script>

<nav class="header">
  <a href="{base}/" class:active={isActive('/')}>Home</a>
  <a href="{base}/projects" class:active={isActive('/projects')}>Projects</a>
  <a href="{base}/contact" class:active={isActive('/contact')}>Contact me</a>
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