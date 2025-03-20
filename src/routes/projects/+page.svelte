<script>
  import Header from "../../components/Header.svelte";
  import { base } from '$app/paths';
  import ProjectCard from "../../components/ProjectCard.svelte";
  import projects from '../../lib/projects';
  
  let selectedCategory = 'all';
  
  $: filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => {
        if (selectedCategory === 'featured') return project.featured;
        if (selectedCategory === 'completed') return project.completed;
        if (selectedCategory === 'in-progress') return !project.completed;
        return true;
      });
      
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'featured', name: 'Featured' },
    { id: 'completed', name: 'Completed' },
    { id: 'in-progress', name: 'In Progress' }
  ];
</script>

<svelte:head>
  <title>Projects - Joel Perca</title>
</svelte:head>

<div id="content" class="content">
  <Header />
  <section class="projects-container">
    <div class="projects-header">
      <h1>My Projects</h1>
      <p>Here's a collection of my recent projects. Each one represents my passion for creating well-designed and functional applications.</p>
      
      <div class="filter-container">
        {#each categories as category}
          <button 
            class="filter-button {selectedCategory === category.id ? 'active' : ''}"
            on:click={() => selectedCategory = category.id}
          >
            {category.name}
          </button>
        {/each}
      </div>
    </div>
    
    {#if filteredProjects.length > 0}
      <div class="projects-grid">
        {#each filteredProjects as project (project.id)}
          <ProjectCard 
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            github_link={project.github_link}
            preview_link={project.preview_link}
            featured={project.featured}
            completed={project.completed}
            date={project.date}
          />
        {/each}
      </div>
    {:else}
      <div class="no-projects">
        <p>No projects found in this category. Check back soon!</p>
      </div>
    {/if}
  </section>
</div>



<style>
  .projects-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .projects-header {
    text-align: center;
    margin-bottom: 50px;
  }

  .projects-header h1 {
    font-size: 2.5rem;
    margin-bottom: 16px;
    color: #1f2937;
  }

  .projects-header p {
    font-size: 1.1rem;
    color: #4b5563;
    max-width: 700px;
    margin: 0 auto 30px;
    line-height: 1.6;
  }

  .filter-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 30px;
  }

  .filter-button {
    background-color: transparent;
    border: 1px solid #e5e7eb;
    border-radius: 30px;
    padding: 8px 18px;
    font-size: 0.95rem;
    color: #4b5563;
    cursor: pointer;
    transition: all 0.2s;
  }

  .filter-button:hover {
    border-color: var(--primary-color, #3b82f6);
    color: var(--primary-color, #3b82f6);
  }

  .filter-button.active {
    background-color: var(--primary-color, #3b82f6);
    border-color: var(--primary-color, #3b82f6);
    color: white;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
  }

  .no-projects {
    text-align: center;
    padding: 50px 0;
    color: #6b7280;
    background-color: #f9fafb;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    .projects-header h1 {
      font-size: 2rem;
    }
    
    .projects-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
  }

  @media (max-width: 480px) {
    .projects-container {
      padding: 30px 15px;
    }
    
    .filter-container {
      flex-direction: column;
      align-items: center;
    }
    
    .filter-button {
      width: 100%;
      max-width: 250px;
    }
  }
</style>