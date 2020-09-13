<template>
  <Layout>
    <SliderShow />
    <section>
      <div class="section-services">
        <h2>Our services</h2>

        <div class="service-container">
          <div class="service">
            <div class="service-icon">
              <div class="service-icon-circle">
                <span uk-icon="icon: laptop; ratio: 2"></span>
              </div>
            </div>
            <h3>Kids Learn to Code​​</h3>
            <p>
              The junior program stresses a mild and fun introduction to software application development iand in
              addition also emphasizes areas such as robotics, game programming and UAV development.
            </p>
          </div>

          <div class="service">
            <div class="service-icon">
              <div class="service-icon-circle">
                <span uk-icon="icon: desktop; ratio: 2"></span>
              </div>
            </div>
            <h3>Adult Learn to Code</h3>
            <p>
              Introduction to structured program languages such as Python, PhP and JavaScript. Either learn to better
              your problem solving skills or learn with the ability to progress to our bootcamp program.
            </p>
          </div>

          <div class="service">
            <div class="service-icon">
              <div class="service-icon-circle">
                <span uk-icon="icon: desktop; ratio: 2"></span>
              </div>
            </div>
            <h3>Bootcamp​​</h3>
            <p>
              The aim for us is to teach you the professional skills that would be needed to work within the software
              development field with the prospective pipeline to related jobs in this field.
            </p>
          </div>

          <div class="service">
            <div class="service-icon">
              <div class="service-icon-circle">
                <span uk-icon="icon: desktop; ratio: 2"></span>
              </div>
            </div>
            <h3>Drone​​</h3>
            <p>
              Aerial Vision offers an introduction to unmanned aerial vehicles (drones), with lectures of components,
              careers and hands on virtual reality training, ages 8-13.
            </p>
          </div>

          <div class="service">
            <div class="service-icon">
              <div class="service-icon-circle">
                <span uk-icon="icon: desktop; ratio: 2"></span>
              </div>
            </div>
            <h3>Business ​Incubator</h3>
            <p>
              Have a great business idea and need those connections and tech know hows to get your idea off the ground we
              are here to help you incubate your business and bring your vision to reality.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="hr">
      <hr class="uk-divider-icon" />
    </div>

    <h2 class="section-team-h2">Meet the team</h2>
    <Team />

    <div class="divider-container">
      <g-image src="~/assets/images/coding-divider.webp" alt="Come in today and find out about our programs"/>
      <div class="background"></div>
      <div class="text">Come in today and find out about our programs.</div>
    </div>

    <section>
      <div class="section-partners">
        <h2>Our Partners</h2>
        <div class="section-partners-container">
          <div class="partner">
            <div class="partner-icon">
              <g-link href="https://www.brazengroup.com" target="_blank">
                <img
                  src="../assets/images/patner1.webp"
                  width="200"
                  height="200"
                  alt="Brazen Group"
                  title="Brazen Group"
                />
              </g-link>
            </div>
            <p>
              Brazen Group has a highly skilled team and a unique approach to Salesforce implementation that ensures that
              every client has a successful outcome. On top of that, we have beliefs and convictions, like integrity and
              hard work, that guide our actions to the benefit of our clients and partners.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="section-contact">
        <h2>Contact us here</h2>
        <div class="contact">
          <form class="uk-width-3-4@s uk-width-1-2@m">
            <fieldset class="uk-fieldset">
              <div class="uk-margin">
                <label for="fullname">Fullname </label>
                  <input
                    class="uk-input"
                    type="text"
                    name="name"
                    id="fullname"
                    placeholder="Enter your full name"
                  />
               
              </div>

              <div class="uk-margin">
                <label for="email">Email</label>
                  <input
                    class="uk-input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                  />
              </div>

              <div class="uk-margin">
                <label for="message">Message</label>
                  <textarea
                    class="uk-textarea"
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                  ></textarea>
              </div>

              <button class="uk-button uk-button-default" disabled>Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    Team: () => import("~/components/Team.vue"),
    SliderShow: () => import("~/components/SliderShow.vue"),
  },
};
</script>

<style>
.section-team-h2 {
  color: #6e2b62;
  margin-bottom: 42px;
  text-align: center;
}

.home-links a {
  margin-right: 1rem;
}

.section-slider {
  height: 100vh;
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

.divider-container {
  min-height: 240px;
  width: 100%;
  position: relative;
}

.divider-container .text {
  position: absolute;
  color: #fff;
  top: 50%;
  left: 50%;
  font-weight: bold;
  text-align: center;
  font-size: 36px;
  transform: translate(-50%, -50%);
}

.banner-container .background {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-color: #cd8428;
}

.divider-container img {
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: center;
  object-fit: cover;
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

.partner {
  color: #6e2b62;
  justify-content: center;
  align-items: center;
}

.partner p {
  text-align: center;
  margin-top: 20px;
}

.partner-icon {
  display: flex;
  justify-content: center;
}

.partner-icon a,
.partner-icon img {
  display: inline-block;
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
label{
  color: #fff;
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

@media only screen and (max-width: 992px) {
  .h-service-text,
  .h-service-text-inverse {
    width: 512px;
  }
}

@media only screen and (max-width: 600px) {
  .divider-container .text {
    font-size: 22px;
  }
}
</style>
