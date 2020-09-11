<template>
  <div>
    <Navbar />
    <slot/>
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("~/components/NavBar.vue"),
    Footer: () => import("~/components/Footer.vue")
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding-top:80px;
  line-height: 1.5;
}
</style>
