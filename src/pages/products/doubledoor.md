---
layout: "@/templates/BasePost.astro"
title: Double door
description: Click to see our double doors
pubDate: 2025-11-12T00:00:00Z
imgSrc: "/assets/images/doubled.webp"
imgAlt: ""
---

<div class="text-center">

## Available products:

</div>

<style>
   .gallery {
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  } 
   .gallery figure {
    margin: 0;
    text-align: center;
    flex: 0 1 22%;
    min-width: 150px;
  } 
  .gallery img {
    width: 100%;
    height: auto;
    object-fit: contain;
    padding-bottom: 0.5rem;
    padding-top: 2rem;
    border-radius: 1rem;
  }
  .gallery figcaption {
    margin-top: 0.5rem;
    font-weight: 600;
    font-size: 1.2rem;
    padding-bottom: 0.8rem;
  }
  .gallery hr {
    padding-bottom: 1.2rem;
    border-top: solid;
  }
    #backToTop {
    position: fixed;
    bottom: 1rem;
    right: 1.5rem;
    padding: 0.1rem 1.2rem;
    background-color: rgb(0 0 0 / 70%);
    color: #fffefe;
    border-radius: 1.5rem;
    text-decoration: none;
    font-weight: bold;
    z-index: 1000;
    font-size: xx-large;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out;
  }
  #backToTop.show {
    opacity: 1;
    visibility: visible;
  }
</style>

<div class="gallery">
  <figure>
    <img src="/assets/images/dd/dd1.jpg" alt="DD1" title="DD1"/>
    <figcaption>DD1</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/dd/dd2.jpg" alt="DD2" title="DD2"/>
    <figcaption>DD2</figcaption>
        <hr>
  </figure>
  <figure>
    <img src="/assets/images/dd/dd3.jpg" alt="DD3" title="DD3"/>
    <figcaption>DD3</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/dd/dd4.png" alt="DD4" title="DD4"/>
    <figcaption>DD4</figcaption>
  <hr>
  </figure>

<a id="backToTop" href="#top" >↑ </a>

  <script>
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>
</div>

### <a href="/contact/" style="color: #FF9900; font-weight: bold;">Contact</a> us with specific code product
