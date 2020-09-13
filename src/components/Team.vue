<template>
    <section>
      <div class="section-team">
        <div class="team-members-container">
          <div class="team-member">
            <g-image
              src="~/assets/images/clifford.webp"
              alt="Managing Director"
              title="Managing Director"
            />
            <h4 class="uk-text-large team-member-title">Clifford Browner</h4>
            <h5 class="team-member-subtitle">Managing Director</h5>
          </div>

          <div class="team-member">
            <g-image
              src="~/assets/images/carlos-gittens.webp"
              alt="Academic Director"
              title="Academic Director"
            />
            <h4 class="uk-text-large team-member-title">Carlos Gittens</h4>
            <h5 class="team-member-subtitle">Academic Director</h5>
          </div>

          <div class="team-member">
            <g-image
              src="~/assets/images/gillian_stephen.webp"
              alt="Operations Manager"
              title="Operations Manager"
            />
            <h4 class="uk-text-large team-member-title">Gillian Stephen</h4>
            <h5 class="team-member-subtitle">Operations Manager</h5>
          </div>

          <div class="team-member">
            <g-image
              src="~/assets/images/whitney-griffith.webp"
              alt="International Business Relation"
              title="International Business Relation"
            />
            <h4 class="uk-text-large team-member-title">Whitney Griffith</h4>
            <h5 class="team-member-subtitle">International Business Relation</h5>
          </div>

          <div class="team-member">
            <g-image
              src="~/assets/images/dr-mathew.webp"
              alt="Academic Director"
              title="Academic Director"
            />
            <h4 class="uk-text-large team-member-title">George Matthew</h4>
            <h5 class="team-member-subtitle">Academic Director</h5>
          </div>

          <div class="team-member">
            <g-image
              src="~/assets/images/donna-mcIntosh.webp"
              alt="Marketing Director"
              title="Marketing Director"
            />
            <h4 class="uk-text-large team-member-title">Donna McIntosh</h4>
            <h5 class="team-member-subtitle">Marketing Director</h5>
          </div>

          <div class="team-member">
            <g-image
              src="~/assets/images/cca-logo.webp"
              alt="Director"
              title="Director"
            />
            <h4 class="uk-text-large team-member-title">Keith Ashby</h4>
            <h5 class="team-member-subtitle">Director</h5>
          </div>
        </div>
      </div>
    </section>
</template>

<style>

.section-team {
  text-align: center;
  margin: auto;
  padding: 16px 16px;
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
.team-member h5 {
  margin: 0;
}

</style>