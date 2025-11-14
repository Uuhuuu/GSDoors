---
layout: "@/templates/BasePost.astro"
title: Windows
description: Click to see our windows
pubDate: 2025-11-11T00:00:00Z
imgSrc: "/assets/images/window.jpg"
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
  #backToTop:hover,
  #backToTop:focus-visible {
   background-color: #FF9900;
   color: #000000;
   transform: translateY(-3px) scale(1.03);
   box-shadow: 0 8px 20px rgba(0,0,0,0.25);
   outline: none;
  }
   .imagesclose {
   display: flex;ń
   gap: 1rem;
   justify-content: center;
   max-width: 49%;
   margin-inline: auto;
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
    <img src="/assets/images/w/w1.jpg" alt="W1" title="W1" loading="lazy" decoding="async"/>
    <figcaption>Double Glass</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/w/w2.jpg" alt="W2" title="W2" loading="lazy" decoding="async"/>
    <figcaption>Triple Glass</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/w/w3.jpg" alt="W3" title="W3" loading="lazy" decoding="async"/>
    <figcaption>W3</figcaption>
    <hr>
  </figure>
  <figure>
    <img src="/assets/images/w/w4.jpg" alt="W4" title="W4" loading="lazy" decoding="async"/>
    <!-- <figcaption>W4</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w5.jpg" alt="W5" title="W5" loading="lazy" decoding="async"/>
    <!-- <figcaption>W5</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w6.jpg" alt="W6" title="W6" loading="lazy" decoding="async"/>
    <!-- <figcaption>W6</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w7.jpg" alt="W7" title="W7" loading="lazy" decoding="async"/>
    <!-- <figcaption>W7</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w8.jpg" alt="W8" title="W8" loading="lazy" decoding="async"/>
    <!-- <figcaption>W8</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w9.jpg" alt="W9" title="W9" loading="lazy" decoding="async"/>
    <!-- <figcaption>W9</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w10.jpg" alt="W10" title="W10" loading="lazy" decoding="async"/>
    <!-- <figcaption>W10</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w11.jpg" alt="W11" title="W11" loading="lazy" decoding="async"/>
    <!-- <figcaption>W11</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w12.jpg" alt="W12" title="W12" loading="lazy" decoding="async"/>
    <!-- <figcaption>W12</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w13.jpg" alt="W13" title="W13" loading="lazy" decoding="async"/>
    <!-- <figcaption>W13</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w14.jpg" alt="W14" title="W14" loading="lazy" decoding="async"/>
    <!-- <figcaption>W14</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w15.jpg" alt="W15" title="W15" loading="lazy" decoding="async"/>
    <!-- <figcaption>W15</figcaption> 
    <hr> -->
  </figure>
  <figure>
    <img src="/assets/images/w/w16.jpg" alt="W16" title="W16" loading="lazy" decoding="async"/>
    <!-- <figcaption>W16</figcaption> 
    <hr> -->
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
