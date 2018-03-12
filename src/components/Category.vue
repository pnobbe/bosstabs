<template>
  <table align="center" width="500px">
    <caption><h2><b>{{ item.category }}</b></h2></caption>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Quantity</th>
      <th>Value</th>
      <th>Rarity</th>
    </tr>
    <item v-for="item in item.items" :key="item.id" :item="item" :api="api">
    </item>
  </table>

</template>

<script>
import ApiService from '@/services/ApiService'
import Item from '@/components/Item'

export default {
  name: 'Category',
  data () {
    return {
    }
  },
  props: {
    api: {type: ApiService, required: true},
    item: {type: Object, required: true}
  },
  components: {
    Item
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

  li {
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
