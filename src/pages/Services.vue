<template>
  <Layout>
    <banner title="our services" />
     <div class="h-service-container">
      <div class="h-service">
        <div class="h-service-icon">
          <div class="h-service-icon-circle">
            <span uk-icon="icon: laptop; ratio: 2"></span>
          </div>
        </div>

        <div class="h-service-text">
          <div>Kids learn to code</div>
          <p>
            The junior program stresses a mild and fun introduction to software application development in such areas as
            robotics, game programming and UAV development. The candidate is taught basic programming and instruction for
            managing the applications.
            <br />
            <br />The senior program consists of an introduction to structured program languages such as Python, PhP and
            JavaScript. At the end of the program, the candidate is expected to have basic understanding of the subject
            area. The program will stress more advanced projects in the areas of Game Programming, Robotics and UAV
            applications.
          </p>
        </div>
      </div>

      <div class="h-service-inverse">
        <div class="h-service-text-inverse">
          <div>Adult Learn to Code</div>
          <p>
            Candidates are expected to achieve basic to Intermediate development of skills. At the end of the program,
            the student should have the skills to be able to train for a specific job or job category. This program is
            geared towards a candidate that has a high school level proficiency in english comprehension and mathematics.
            The program will stress critical thinking and develop basic and intermediate level understanding of software
            development or information technology proficiency based on the job requirements.
            <br />
            <br />The candidate will be expected to learn two of the following languages and/or frameworks such as
            Python, Ruby, PhP, Javascript using frameworks such as Angular,React, Node, RoR, Django, Flask, Zend, RoR.
            Students may be expected to do remedial coursework in order to attain Level 1 or 2 proficiency in the area of
            study. The center takes a holistic approach in preparing candidates for the job market. It not just technical
            proficiency but for the academy the mission is to develop the near ideal candidate for a position based on
            employer requirements.
          </p>
        </div>
        <div class="h-service-icon-inverse">
          <div class="h-service-icon-circle-inverse">
            <span uk-icon="icon: laptop; ratio: 2"></span>
          </div>
        </div>
      </div>

      <div class="h-service">
        <div class="h-service-icon">
          <div class="h-service-icon-circle">
            <span uk-icon="icon: laptop; ratio: 2"></span>
          </div>
        </div>

        <div class="h-service-text">
          <div>Bootcamp</div>
          <p>The technical program requirements may vary based on job description or employer requirements for each candidate. However, there are many core proficiency requirements that the academy expects the candidate to master on completion of program. Note, candidates have to an agreement for placement in order to be accepted into the program.</p>
        </div>
      </div>

      <div class="h-service-inverse">
        <div class="h-service-text-inverse">
          <div>Drone</div>
          <p>Aerial Vision offers an introduction to unmanned aerial vehicles (drones), with lectures of components, careers and hands on virtual reality training, ages 8-13.</p>
        </div>
        <div class="h-service-icon-inverse">
          <div class="h-service-icon-circle-inverse">
            <span uk-icon="icon: laptop; ratio: 2"></span>
          </div>
        </div>
      </div>
    </div> 
  </Layout>
</template>

<script>
export default {
   metaInfo: {
    title: "Services",
  },
  components: {
    Banner: () => import("~/components/Banner.vue"),
  },
}
</script>

<style>

.h-service-container {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
}

.h-service {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 16px 0;
}

.h-service-icon {
  width: 256px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.h-service-icon-circle {
  width: 180px;
  height: 180px;
  background-color: #5B0D49;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.h-service-text {
  width: 768px;
  color: #5B0D49;
  padding: 16px;
}

.h-service-text > div {
  color: #d28f3b;
  font-size: 16px;
  font-weight: bold;
}

.h-service-text p {
  margin-bottom: 0;
  margin-top: 16px;
  font-size: 14px;
}

.h-service-inverse {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 16px 0;
}

.h-service-icon-inverse {
  width: 256px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.h-service-text-inverse {
  width: 768px;
  color: #5B0D49;
  padding: 16px;
}

.h-service-text-inverse > div {
  color: #d28f3b;
  font-size: 16px;
  font-weight: bold;
}

.h-service-text-inverse p {
  margin-bottom: 0;
  margin-top: 16px;
  font-size: 14px;
}

.h-service-icon-circle-inverse {
  width: 180px;
  height: 180px;
  background-color: #5B0D49;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Medium devices (landscape tablets, 768px and down) */
@media only screen and (max-width: 768px) {
  .h-service-text > div,
  .h-service-text-inverse > div {
    text-align: center;
  }

  .h-service-icon-inverse {
    order: -1;
  }

  .h-service,
  .h-service-inverse {
    width: 100%;
    justify-content: center;
  }
}

@media only screen and (max-width: 992px) {
  .h-service-text,
  .h-service-text-inverse {
    width: 512px;
  }
}
</style>