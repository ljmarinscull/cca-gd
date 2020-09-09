<template>
  <nav>
    <div class="logo-container">
      <g-link to="/">
        <g-image
          src="~/assets/images/cca-logo.png"
          alt="CCA logo"
          title="Caribbean Coding Academy - Grenada"
        />
      </g-link>
      <div class="logo-text">
        <div>
          <h1 class="logo-text">Caribbean Coding Academy</h1>
        </div>
        <div class="text-gd">Grenada</div>
      </div>
    </div>

    <div class="links">
      <div class="link">
        <g-link to="/">home</g-link>
      </div>
      <div class="link">
        <g-link to="/projects">projects</g-link>
      </div>
      <div class="link">
        <g-link to="/team">team</g-link>
      </div>
      <div class="link">
        <g-link to="/services">services</g-link>
      </div>
      <div class="link">
        <g-link to="/contact">contact</g-link>
      </div>
    </div>

    <label for="check" class="checkbtn">
      <span uk-icon="icon: menu; ratio: 2" uk-toggle="target: .links; cls: links-visibility"></span>
    </label>
  </nav>
</template>

<style>
h1 {
  margin: 0;
  font-size: 18px;
  color: #6e2b62;
  font-weight: bold;
}

.text-gd {
  font-weight: normal;
  color: #6e2b62;
}

.uk-icon {
  color: #cd8428;
}

.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  line-height: 72px;
  margin-right: 16px;
  cursor: pointer;
  display: none;
}

.logo-container {
  display: flex;
  align-items: center;
}

nav .logo-container img {
  height: 72px;
  width: 72px;
}

nav {
  height: 72px;
  width: 100%;
  position: sticky;
  background-color: #fff;
  top: 0;
  -webkit-box-shadow: 0 2px 4px 0 #111;
  -moz-box-shadow: 0 2px 4px 0 #111;
  box-shadow: 0 2px 4px 0 #111;
  z-index: 1;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

label .logo {
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 32px;
  font-weight: bold;
}

.links {
  float: right;
  margin-right: 20px;
  display: flex;
}

.link {
  display: inline-block;
  width: 128px;
  height: 72px;
  text-transform: uppercase;
  color: #6e2b62;
  cursor: pointer;
  text-align: center;
  line-height: 72px;
}

.link:hover {
  background-color: #31a9fb;
  color: #ffffff;
}

nav .links .link a {
  color: #6e2b62;
  font-size: 16px;
  padding: 7px 13px;
  text-transform: uppercase;
  text-decoration: none !important;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav .links .link a.active,
nav .links .link a.active:hover {
  background-color: #0472be;
  color: #fff;
  transition: 0.5s;
}

nav .links .link a:hover {
  color: #fff;
}

nav .links .link a:hover {
  background: #1b9bff;
  color: #fff;
  transition: 0.5s;
}

.checkbtn {
  font-size: 30px;
  color: white;
  float: right;
  line-height: 80px;
  margin-right: 16px;
  cursor: pointer;
  display: none;
}

.logo-container img {
  width: 64px;
  height: 64px;
}

/* Medium devices (landscape tablets, 992px and down) */
@media only screen and (max-width: 992px) {
  .checkbtn {
    display: block;
  }

  .link {
    display: flex;
    margin: 28px 0;
    line-height: 30px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  nav .links .link:hover {
    background-color: #1b9bff;
    color: #fff;
  }

  nav .links .link a {
    width: 100%;
  }

  .links {
    display: block;
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #fff;
    top: 72px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }
  .contact-details {
    width: 512px;
  }
}
</style>