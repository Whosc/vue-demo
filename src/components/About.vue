<template>
  <div class="about">
    <h1>Hello {{ their_name }}, this is an about page</h1>
    <p>这是一个测试描述！</p>

     <SlotDemo>
        <p>default slot</p>
        <template v-slot:title>
          <p>title slot1</p>
          <p>title slot2</p>
        </template>
        <template v-slot:item="props">
          <p>item slot-scope {{ props.value }}</p>
        </template>
      </SlotDemo>

  </div>
</template>

<script>

import SlotDemo from './SlotDemo'

export default {
  components: {
      SlotDemo
  },
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>