<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Contact me - Joel Perca</title>
  <link rel="stylesheet" href="{base}/css/contact.css" />
</svelte:head>

<div class="contact-container">
  <h1>Get in touch</h1>
  <p class="contact-intro">
    Have a project in mind? Let's bring it to life together.
  </p>

  <form
    class="contact-form"
    action="https://formspree.io/your-email@example.com"
    method="POST"
  >
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>

    <div class="form-group">
      <label for="subject">Subject</label>
      <input type="text" id="subject" name="subject" required />
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="5" required></textarea>
    </div>

    <button type="submit" class="submit-btn">Send Message</button>
  </form>

  <div class="contact-info">
    <div class="info-item">
      <span class="info-label">Email</span>
      <a href="mailto:joelperca.vc@gmail.com">joelperca.vc@gmail.com</a>
    </div>
    <div class="info-item">
      <span class="info-label">LinkedIn</span>
      <a href="https://linkedin.com/in/joelperca" target="_blank"
        >linkedin.com/in/joelperca</a
      >
    </div>
    <div class="info-item">
      <span class="info-label">GitHub</span>
      <a href="https://github.com/reqhiem" target="_blank">github.com/reqhiem</a
      >
    </div>
  </div>
</div>
