<template>
  <Layout>
    <header>
      <div class="our-projects">
        <div class="our-projects-title">
          <h2>Our projects</h2>
        </div>
        <div class="our-projects-description">
          <p>Our learning style requires our bootcampers to work on various projects during their learninng process. Here are a few of those projects we're currently working on more to follow soon.</p>
        </div>
      </div>
    </header>

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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

.home-links a {
  margin-right: 1rem;
}

/*Service*/
.service-container {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
}

.section-services {
  padding: 36px 16px;
}

.service {
  width: 100%;
  padding: 16px;
}

.service .service-icon-circle {
  border-radius: 50%;
  background-color: #6e2b62;
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.service h3 {
  margin-top: 0;
  color: #cd8428;
  text-align: center;
}

.service img {
  display: inline-block;
}

.section-services h2 {
  color: #6e2b62;
  text-align: center;
}

.service p {
  color: #6e2b62;
}

/*Team*/
.section-team {
  text-align: center;
  margin: auto;
  padding: 16px 16px;
}

.section-team h2 {
  color: #6e2b62;
  margin-bottom: 42px;
}

.team-members-container {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
}

.team-member {
  width: 100%;
  padding: 8px;
  margin-bottom: 32px;
}

.team-member-icon {
  display: flex;
  justify-content: center;
}

.team-member .team-member-icon-circle {
  width: 180px;
  height: 180px;
  background-color: #31a9fb;
  display: flex;
  justify-content: center;
  align-items: center;
}

.team-member-title {
  color: #6e2b62;
}

.team-member-subtitle {
  color: #cd8428;
}

.team-member img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 5px solid #6e2b62;
  margin-bottom: 16px;
}

.team-member h4,
.team-member h6 {
  margin: 0;
}

/*Divider*/
.divider {
  min-height: 240px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/assets/images/coding-divider.jpeg");
  background-size: cover;
  background-color: #6e2b62;
  mix-blend-mode: multiply;
  transform-origin: center center;
}

.divider div {
  color: #fff;
  font-weight: bold;
  font-size: 36px;
}

/*Patners*/
.section-partners {
  height: 100vh;
  text-align: center;
  margin: auto;
  padding: 32px 16px;
}

.section-partners-container {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
}

.partner p {
  margin-top: 0;
  text-align: center;
}

.partner-icon {
  display: flex;
  justify-content: center;
}

.partner-icon a,
.partner-icon img {
  display: inline-block;
}

.partner {
  color: #6e2b62;
  justify-content: center;
  align-items: center;
}

.section-partners h2 {
  color: #6e2b62;
  text-align: center;
  padding: 16px;
}

/*Contact*/
.section-contact {
  width: 100%;
  text-align: center;
  margin: auto;
  background-color: #6e2b62;
  padding: 32px 0;
}

.section-contact h2 {
  color: #fff;
  margin-bottom: 32px;
}

.contact {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
}

/*Footer*/
.footer-container {
  padding: 32px;
  width: 100%;
  text-align: center;
  background-color: #7e1566;
  color: #fff;
}

.footer-container div a {
  margin: 0 8px;
  margin-bottom: 16px;
}

.links-visibility {
  left: 0 !important;
}

/***********/
/*PROJECTS*/
/**********/

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
  padding: 32px;
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

/**************/
/**Who we are**/
/**************/

.who-we-are-container {
  height: 100vh;
  padding: 32px;
  color: #7e1566;
}
</style>