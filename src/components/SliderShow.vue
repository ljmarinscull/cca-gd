<template>
  <section class="section-slider">
    <div
      class="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slideshow="autoplay: true; ratio: false"
    >
      <ul class="uk-slideshow-items slider-container">
        <li>
          <g-image src="~/assets/images/slider-1.webp" alt uk-cover />
          <div
            class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom"
          >
            <h2>Come check out the game we made at our summer camp</h2>
          </div>
        </li>
        <li>
          <g-image src="~/assets/images/slider-2.webp" alt uk-cover />
        </li>
        <li>
          <g-image src="~/assets/images/slider-3.webp" alt uk-cover />
        </li>
      </ul>

      <g-link
        class="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slideshow-item="previous"
      />
      <g-link
        class="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slideshow-item="next"
      />
    </div>
  </section>
</template>

<style>
.section-slider {
  height: 50vh;
}

.slider-container {
  height: 50vh;
}

.uk-overlay {
  padding: 8px;
}

.uk-cover {
  background-position: center;
  object-fit: contain;
}

@media only screen and (min-width: 768px) {
  .section-slider {
    height: 90vh;
  }

  .slider-container {
    height: 90vh;
  }
  .uk-overlay {
    padding: 30px;
  }
}
</style>