<template>
  <div class="hello">
    <router-link to="/">
      Back
    </router-link>
    <h1>{{ name }}</h1>

    <category v-for="item in loottable" :key="item.category" :item="item" :api="api">
    </category>

  </div>

</template>

<script>
import ApiService from '@/services/ApiService'
import Category from '@/components/Category'

export default {
  name: 'Tab',
  data () {
    return {
      api: new ApiService()
    }
  },
  props: {
    name: { required: true, type: String },
    loottable: { required: true, type: Array }
  },
  components: {
    Category
  },
  methods: {
    addItem: function (e) {
      alert(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    color: #42b983;
  }
</style>
