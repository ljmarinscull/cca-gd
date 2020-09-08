<template>
  <Layout>
    <banner title="CONTACT US" />
    <div class="contact-container">
      <div class="contact-form">
        <div>GET IN TOUCH WITH US!</div>
        <div class="contact-f">
          <form>
            <fieldset class="uk-fieldset">
              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Full name</label>
                <input class="uk-input" type="text" name="name" placeholder="Full name" />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Email</label>
                <input class="uk-input" type="email" name="email" placeholder="Email" />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Phone</label>
                <input class="uk-input" type="tel" name="tel" placeholder="Email" />
              </div>

              <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Your message</label>
                <textarea class="uk-textarea" rows="5" name="message" placeholder="Your message"></textarea>
              </div>

              <button class="uk-button uk-button-default" disabled>Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="contact-details">
        <div>CONTACT INFORMATION</div>
        <strong>Address</strong>
        <br />H.A.Blaize Street
        St. George’s, Grenada. W.I.
        <br />
        <br />
        <strong>Telephone</strong>
        <br />(473) 456 -1568
        <br />
        <br />
        <strong>Business Hours</strong>
        <br />Monday to Friday <br /> 8am - 6:30pm EST
      </div>
    </div>

    <div class="google-map">"google-map"</div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
  },
  components: {
    Banner: () => import("@/components/Banner.vue"),
  },
};
</script>


<style>
.google-map {
  width: 100%;
  height: 45vh;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: large;
}

.contact-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 32px 0;
  flex-wrap: wrap;
}

.contact-form {
  width: 512px;
  padding: 16px;
}

.contact-form > div {
  font-size: 16px;
  color: #cd8428;
  margin-bottom: 16px;
}

.contact-details > div {
  font-size: 16px;
  color: #cd8428;
  margin-bottom: 16px;
}

.contact-details {
  width: 256px;
  padding-left: 16px;
}
.contact-f {
  padding-right: 16px;
}

/* Medium devices (landscape tablets, 600px and down) */
@media only screen and (max-width: 600px) {
  .contact-details {
    width: 100%;
  }
}

/* Medium devices (landscape tablets, 992px and down) */
@media only screen and (max-width: 992px) {
  .contact-details {
    width: 512px;
  }
}
</style>