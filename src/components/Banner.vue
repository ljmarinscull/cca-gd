<template>
  <div class="banner-container">
    <g-image src="~/assets/images/code.jpg" />
    <div class="back"></div>
    <div class="text">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
      default: "unknow",
    },
  },
};
</script>

<style>
.banner-container {
  height: 25vh;
  width: 100%;
  position: relative;
}

.banner-container .text {
  font-size: 36px;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-25%, -50%);
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
}

.banner-container .back {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-color: #cd8428;
}

.banner-container img {
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: center;
  object-fit: cover;
}
</style>