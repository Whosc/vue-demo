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

      <div>
        <p>模板、render函数、jsx</p>
        <anchored-heading1 :level="1">Hello world!</anchored-heading1>
        <anchored-heading2 :level="2">Hello world!</anchored-heading2>
        <anchored-heading3 :level="3">
          <div> 123213123  </div>
          <div> asaaaa  </div>
          <template v-slot:aaa>
          <p>title slot1</p>
          <p>title slot2</p>
        </template></anchored-heading3>
        
      </div>


  </div>
</template>

<script>

import SlotDemo from './SlotDemo'
import anchoredHeading1 from './anchoredHeading1.vue'
import anchoredHeading2 from './anchoredHeading2.js'
import anchoredHeading3 from './anchoredHeading3.jsx'





export default {
  components: {
      SlotDemo,
      anchoredHeading1,
      anchoredHeading2,
      anchoredHeading3
  },
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>