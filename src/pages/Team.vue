<template>
  <Layout>
    <banner title="ABOUT US" />

    <section>
      <div class="who-we-are-container">
        <p>
          The CCA aims to teach our candidates all the necessary skills that they would need to work in a specific area
          within the software or Information Technology industry.
        </p>

        <p>
          The CCA program has some key objectives. The aim for us is to teach the professional all the skills he would
          need to work in a specific area within the software development field. Therefore, a proper evaluation or
          assessment of the candidate would be made before being accepted into the program:
        </p>

        <span uk-icon="check"></span>
        <span>
          Train students for entry level software positions around the
          world.
        </span>
        <br />
        <br />
        <span uk-icon="check"></span>
        <span>Develop individualized curriculum for each student.</span>
        <br />
        <br />
        <span uk-icon="check"></span>
        <span>Assessment skill based platform to qualify the best students.</span>
        <br />
        <br />
        <span uk-icon="check"></span>
        <span>Develop Student Business Skills.</span>
        <br />
        <br />
        <span uk-icon="check"></span>
        <span>
          Ability to recruit and train marginalized people around the
          world.
        </span>
        <br />
        <br />
        <span uk-icon="check"></span>
        <span>
          Bridge Program for college graduates to find employment in the information
          technology field.
        </span>
        <br />
        <br />
        <span uk-icon="check"></span>
        <span>
          These are the key objectives of the program that we think can change our
          society for the better.
        </span>
        <br />
        <br />
        <span uk-icon="check"></span>
        <span>
          The CCA will work tirelessly to ensure that all these objectives are
          met.
        </span>
        <br />
        <br />
      </div>
      <Team />
    </section>
  </Layout>
</template>

<script>

export default {
  components: {
    Banner: () => import("~/components/Banner.vue"),
    Team: () => import("~/components/Team.vue"),
  },
  metaInfo: {
    title: "Team",
  },
};
</script>

<style>
.who-we-are-container {
  padding: 32px;
  color: #5B0D49;
}
</style>