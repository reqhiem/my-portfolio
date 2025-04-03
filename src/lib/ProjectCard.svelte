<script>
  import { base } from "$app/paths";

  export let title;
  export let description;
  export let technologies = [];
  export let image;
  export let github_link;
  export let preview_link;
  export let featured = false;
  export let completed = true;
  export let date;
</script>

<article class="project-card {featured ? 'featured' : ''}">
  {#if featured}
    <div class="featured-badge">Featured</div>
  {/if}

  {#if !completed}
    <div class="in-progress-badge">In Progress</div>
  {/if}

  <div class="image-container">
    <img src={image} alt="{title} screenshot" />
  </div>

  <div class="content">
    <h3 class="project-title">{title}</h3>
    <p class="project-description">{description}</p>

    <div class="tech-tags">
      {#each technologies as tech}
        <span class="tech-tag">{tech}</span>
      {/each}
    </div>

    <div class="project-meta">
      <span class="project-date"
        >Completed: {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
        })}</span
      >
    </div>

    <div class="project-links">
      <a
        href={github_link}
        target="_blank"
        rel="noopener noreferrer"
        class="github-link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          ></path>
        </svg>
        Code
      </a>

      <a
        href={preview_link}
        target="_blank"
        rel="noopener noreferrer"
        class="preview-link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
          ></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Live Demo
      </a>
    </div>
  </div>
</article>

<style>
  .project-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s,
      box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .featured {
    border: 2px solid var(--primary-color, #3b82f6);
  }

  .featured-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: var(--primary-color, #3b82f6);
    color: white;
    padding: 5px 10px;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
  }

  .in-progress-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: #f59e0b;
    color: white;
    padding: 5px 10px;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
  }

  .image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  .project-card:hover .image-container img {
    transform: scale(1.05);
  }

  .content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .project-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 0.75rem 0;
    color: #1f2937;
  }

  .project-description {
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    flex-grow: 1;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 1.25rem;
  }

  .tech-tag {
    background-color: #f3f4f6;
    color: #4b5563;
    padding: 5px 10px;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .project-meta {
    font-size: 0.9rem;
    color: #6b7280;
    margin-bottom: 1.25rem;
  }

  .project-links {
    display: flex;
    gap: 15px;
  }

  .github-link,
  .preview-link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    transition: all 0.2s;
  }

  .github-link {
    background-color: #24292e;
    color: white;
  }

  .preview-link {
    background-color: var(--primary-color, #3b82f6);
    color: white;
  }

  .github-link:hover,
  .preview-link:hover {
    opacity: 0.9;
    transform: scale(1.03);
  }

  @media (max-width: 640px) {
    .project-links {
      flex-direction: column;
    }

    .image-container {
      height: 180px;
    }
  }
</style>
