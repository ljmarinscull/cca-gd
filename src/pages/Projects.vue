<template>
  <Layout>
    <div class="our-projects">
      <div class="our-projects-title">
        <h2>Our projects</h2>
      </div>
      <div class="our-projects-description">
        <p>Our learning style requires our bootcampers to work on various projects during their learninng process. Here are a few of those projects we're currently working on more to follow soon.</p>
      </div>
    </div>

    <section>
      <div class="projects-container">
        <div class="project">
          <div class="project-icon">
            <div class="project-icon-circle">
              <span uk-icon="icon: laptop; ratio: 2"></span>
            </div>
          </div>
          <h3>Bill Payment App​​</h3>
          <p>Online BillPay is a free and secure web base online bill payment platform service that allows customers to pay their monthly bills​.</p>
        </div>
        <div class="project">
          <div class="project-icon">
            <div class="project-icon-circle">
              <span uk-icon="icon: desktop; ratio: 2"></span>
            </div>
          </div>
          <h3>Burial App</h3>
          <p>An Application to help you connect with a funeral home and gives you ease of access service in your time of need.</p>
        </div>

        <div class="project">
          <div class="project-icon">
            <div class="project-icon-circle">
              <span uk-icon="icon: desktop; ratio: 2"></span>
            </div>
          </div>
          <h3>Farmers App​</h3>
          <p>At the fingertips of the farmers is the ability to connect with customer by posting of new produce for sale. They also have an opportunity for the farmer to connect directly with their Patrons.</p>
        </div>

        <div class="project">
          <div class="project-icon">
            <div class="project-icon-circle">
              <span uk-icon="icon: desktop; ratio: 2"></span>
            </div>
          </div>
          <h3>Content Coming Soon​</h3>
          <p>Content Coming Soon​.</p>
        </div>

        <div class="project">
          <div class="project-icon">
            <div class="project-icon-circle">
              <span uk-icon="icon: desktop; ratio: 2"></span>
            </div>
          </div>
          <h3>Content Coming Soon​</h3>
          <p>Content Coming Soon​.</p>
        </div>

        <div class="project">
          <div class="project-icon">
            <div class="project-icon-circle">
              <span uk-icon="icon: desktop; ratio: 2"></span>
            </div>
          </div>
          <h3>Content Coming Soon​</h3>
          <p>Content Coming Soon​.</p>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Projects",
  },
};
</script>

<style>
.our-projects {
  height: 256px;
  width: 100%;
  background-color: #cd8428;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.our-projects .our-projects-title h2 {
  font-size: 58px;
  text-align: center;
  color: #fff;
}

.our-projects .our-projects-description {
  text-align: center;
  display: flex;
  justify-content: center;
}

.our-projects .our-projects-description p {
  width: 75%;
  color: #fff;
  margin-bottom: 0;
}

.projects-container {
  border: 2px solid #cd8428;
  padding: 16px;
  display: grid;
  width: 90vw;
  margin: 42px auto;
  max-width: 1170px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
}

.project .project-icon-circle {
  border-radius: 50%;
  background-color: #cd8428;
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.project h3 {
  margin-top: 0;
  color: #cd8428;
  text-align: center;
}

.project img {
  display: inline-block;
}

.section-services h2 {
  color: #cd8428;
  text-align: center;
}

.project p {
  color: #cd8428;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .our-projects .our-projects-title h2 {
    font-size: 32px;
  }
}
</style>