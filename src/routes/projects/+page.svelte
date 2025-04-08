<script>
  import * as d3 from "d3";
  import ProjectCard from "$lib/ProjectCard.svelte";
  import projects from "../../lib/projects";
  import Pie from "$lib/Pie.svelte";

  let selectedCategory = "all";
  let filteredProjects = [];
  let selectedYearIndex = -1;

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "featured", name: "Featured" },
    { id: "completed", name: "Completed" },
    { id: "in-progress", name: "In Progress" },
  ];

  let pieData;
  let query = "";
  let selectedYear;

  $: {
    pieData = {};

    filteredProjects =
      selectedCategory === "all"
        ? projects.filter(
            (project) =>
              query === "" ||
              project.title.toLowerCase().includes(query.toLowerCase()) ||
              project.description.toLowerCase().includes(query.toLowerCase()) ||
              project.technologies.some((tech) =>
                tech.toLowerCase().includes(query.toLowerCase())
              )
          )
        : projects.filter((project) => {
            const matchesCategory =
              (selectedCategory === "featured" && project.featured) ||
              (selectedCategory === "completed" && project.completed) ||
              (selectedCategory === "in-progress" && !project.completed);

            const matchesSearch =
              query === "" ||
              project.title.toLowerCase().includes(query.toLowerCase()) ||
              project.description.toLowerCase().includes(query.toLowerCase()) ||
              project.technologies.some((tech) =>
                tech.toLowerCase().includes(query.toLowerCase())
              );

            return matchesCategory && matchesSearch;
          });

    let rolledData = d3.rollups(
      filteredProjects,
      (v) => v.length,
      (d) => d.year
    );
    pieData = rolledData.map(([year, count]) => {
      return { value: count, label: year };
    });
  }
</script>

<svelte:head>
  <title>Projects - Joel Perca</title>
</svelte:head>

<section class="projects-container">
  <div class="projects-header">
    <h1>
      My Projects <span class="project-count">{filteredProjects.length}</span>
    </h1>
    <p>
      Here's a collection of my recent projects. Each one represents my passion
      for creating well-designed and functional applications.
    </p>

    <div class="filter-container">
      {#each categories as category}
        <button
          class="filter-button {selectedCategory === category.id
            ? 'active'
            : ''}"
          on:click={() => (selectedCategory = category.id)}
        >
          {category.name}
        </button>
      {/each}
    </div>
    <input
      type="search"
      bind:value={query}
      aria-label="Search projects"
      placeholder="Search projects..."
      class="search-input"
    />
  </div>

  {#if filteredProjects.length > 0}
    <div>
      <Pie data={pieData} bind:selectedIndex={selectedYearIndex} />
    </div>
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
    color: var(--secondary-color);
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
  }

  .project-count {
    font-size: 1.2rem;
    font-weight: 200;
    color: white;
    background-color: var(--primary-color);
    padding: 4px 12px;
    border-radius: 20px;
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

  .search-input {
    width: 100%;
    padding: 12px 20px;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    background-color: #f5f5f5;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    outline: none;
  }
</style>
