<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  function isActive(path) {
    const currentPath = $page.url.pathname;
    const basePath = base || "";

    if (path === "/") {
      return currentPath === basePath + "/" || currentPath === basePath;
    }

    return (
      currentPath === basePath + path ||
      currentPath.startsWith(basePath + path + "/")
    );
  }

  let localStorage = globalThis?.localStorage ?? {};
  let colorScheme = localStorage.colorScheme ?? "light dark";
  let root = globalThis?.document?.documentElement;

  $: {
    root?.style.setProperty("color-scheme", colorScheme);
    if (colorScheme === "dark") {
      root?.setAttribute("data-theme", "dark");
    } else if (colorScheme === "light") {
      root?.setAttribute("data-theme", "light");
    } else {
      // Para "light dark" (automático), quita cualquier tema forzado
      root?.removeAttribute("data-theme");
    }

    // Guarda en localStorage
    localStorage.colorScheme = colorScheme;
  }
</script>

<div class="header-container">
  <nav class="header">
    <a href="{base}/" class:active={isActive("/")}>Home</a>
    <a href="{base}/projects" class:active={isActive("/projects")}>Projects</a>
    <a href="{base}/meta" class:active={isActive("/meta")}>Meta</a>
    <a href="{base}/contact" class:active={isActive("/contact")}>Contact me</a>
  </nav>
  <div class="header">
    <a href="https://github.com/reqhiem" target="_blank" class="github-link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 50 50"
      >
        <path
          d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"
        ></path>
      </svg>
      GitHub</a
    >

    <div class="theme-selector">
      <label class="color-scheme">
        Theme:
        <select bind:value={colorScheme}>
          <option value="light dark"> Automatic </option>
          <option value="light"> Light </option>
          <option value="dark"> Dark </option>
        </select>
      </label>
    </div>
  </div>
</div>

<style>
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .github-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
  }

  .active {
    border-bottom: 4px solid var(--primary-color);
    font-weight: bold;
  }

  .theme-selector label {
    color: var(--text-color);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
  }

  .theme-selector select {
    border: 2px solid var(--border-color);
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 14px;
    color: var(--text-color);
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234a6fa5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    padding-right: 30px;
    flex-grow: 1;
    transition: border-color 0.3s;
  }

  .theme-selector select:hover,
  .theme-selector select:focus {
    border-color: var(--primary-color);
    outline: none;
  }

  .theme-selector select:focus {
    box-shadow: 0 0 0 3px rgba(74, 111, 165, 0.2);
  }
</style>
