<template>
  <div class="about">
    <h1>Hello {{ their_name }}, this is an about page</h1>
    <p>这是一个测试描述！</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>