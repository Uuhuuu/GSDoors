---
layout: "@/templates/BasePost.astro"
title: Single door
description: Click to see our single door
pubDate: 2025-11-13T00:00:00Z
imgSrc: "/assets/images/postiamge1.png"
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
    <img src="/assets/images/sd/sd1.jpg" alt="SD1" title="SD1"/>
    <figcaption>SD1</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sd2.jpg" alt="SD2" title="SD2"/>
    <figcaption>SD2</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sd3.jpg" alt="SD3" title="SD3"/>
    <figcaption>SD3</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sd4.jpg" alt="SD4" title="SD4"/>
    <figcaption>SD4</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sd5.jpg" alt="SD5" title="SD5"/>
    <figcaption>SD5</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sd6.jpg" alt="SD6" title="SD6"/>
    <figcaption>SD6</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sd7.jpg" alt="SD7" title="SD7"/>
    <figcaption>SD7</figcaption>
    <hr>
  </figure>

  <figure>
    <img src="/assets/images/sd/sdc1.jpg" alt="SDC1" title="SDC1"/>
    <figcaption>SDC1</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sdc2.jpg" alt="SDC2" title="SDC2"/>
    <figcaption>SDC2</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sdc3.jpg" alt="SDC3" title="SDC3"/>
    <figcaption>SDC3</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sdc4.jpg" alt="SDC4" title="SDC4"/>
    <figcaption>SDC4</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sdc5.jpg" alt="SDC5" title="SDC5"/>
    <figcaption>SDC5</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sdc6.jpg" alt="SDC6" title="SDC6"/>
    <figcaption>SDC6</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/sd/sdc7.jpg" alt="SDC7" title="SDC7"/>
    <figcaption>SDC7</figcaption>
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
