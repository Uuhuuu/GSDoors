---
layout: "@/templates/BasePost.astro"
title: Garage door
description: Click to see our garage doors
pubDate: 2025-11-11T00:00:00Z
imgSrc: "/assets/images/garaged.jpg"
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
    /* added transitions for hover effects */
    transition: opacity 0.4s ease-in-out, visibility 0.4s ease-in-out,
                background-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease, color 0.18s ease;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
    #backToTop.show {
      opacity: 1;
      visibility: visible;
  }
  /* visible hover/focus styles */
  #backToTop:hover,
  #backToTop:focus-visible {
    background-color: #FF9900;
    color: #000000;
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 8px 20px rgba(0,0,0,0.25);
    outline: none;
  }
    .imagesclose {
    display: flex;
    gap: 1rem;
    justify-content: center;
    /* Constrain the gallery width and center it */
    max-width: 49%;
    margin-inline: auto;
    /* Always display images in a single row */
    flex-direction: row;
  }
    .text-center {
    text-align: center;
  }
    #hrspecial {
      margin: 1px;
    }
</style>
<div class="gallery">
  <figure>
    <img src="/assets/images/gd/gd1.jpg" alt="GD1" title="GD1" loading="lazy" decoding="async"/>
    <figcaption>GD1</figcaption>
    <hr>
  </figure>

  <div style="flex: 0 1 100%; display: flex; gap: 1rem; justify-content: center; align-items: flex-start; flex-wrap: nowrap;">
    <figure style="flex: 0 1 45%; min-width: 150px;">
      <img src="/assets/images/gd/gd2.jpg" alt="GD2" title="GD2" loading="lazy" decoding="async"/>
      <figcaption>GD2</figcaption>
    </figure>
    <figure style="flex: 0 1 46%; min-width: 150px;">
      <img src="/assets/images/gd/gd3.jpg" alt="GD2" title="GD2" loading="lazy" decoding="async"/>
      <figcaption>GD2</figcaption>
    </figure>
  </div>
<hr id="hrspecial">
  <div style="flex: 0 1 100%; display: flex; gap: 1rem; justify-content: center; align-items: flex-start; flex-wrap: nowrap;">
    <figure style="flex: 0 1 43%; min-width: 150px;">
      <img src="/assets/images/gd/gd4.jpg" alt="GD3" title="GD3" loading="lazy" decoding="async"/>
      <figcaption>GD3</figcaption>
    </figure>
    <figure style="flex: 0 1 47%; min-width: 150px;">
      <img src="/assets/images/gd/gd5.jpg" alt="GD3" title="GD3" loading="lazy" decoding="async"/>
      <figcaption>GD3</figcaption>
    </figure>
  </div>
<hr id="hrspecial">
  <figure>
    <img src="/assets/images/gd/gd6.jpg" alt="GD4" title="GD4" loading="lazy" decoding="async"/>
    <figcaption>GD4</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/gd/gd7.png" alt="GD5" title="GD5" loading="lazy" decoding="async"/>
    <figcaption>GD5</figcaption>
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
