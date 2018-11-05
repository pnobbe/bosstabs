<template>
  <tr class="item" v-if="!loading">

    <td>
      <img v-if="apiObj.name !== 'coins'" :src="apiObj.icon"/>
      <img v-else src="'./assets/coins.png'"/>
    </td>
    <td>
      {{ apiObj.name }}
    </td>
    <td>
      {{ item.quantity }}
    </td>
    <td>
      {{ curConv.toString(curConv.toInt(apiObj.current.price) * item.quantity) }}
    </td>
    <td :style="{ backgroundColor: bgColor}">
      {{ this.rarity }}
    </td>
  </tr>

</template>

<script>
import ApiService from '@/services/ApiService'
import Coins from '@/assets/untradables/coins.json'
import CurrencyConverter from '@/services/CurrencyConverter'

export default {
  name: 'Item',
  data () {
    return {
      loading: true,
      apiObj: {},
      curConv: new CurrencyConverter(),
      rarity: null,
      bgColor: null
    }
  },
  props: {
    api: {type: ApiService, required: true},
    item: {required: true}
  },
  created: function () {
    if (this.item.id) {
      this.api.getItem(this.item.id).then(success => {
        this.apiObj = JSON.parse(success).item

        // Need to parse the price to get a correct format
        let price = JSON.stringify(this.apiObj.current.price)
        this.apiObj.current.price = JSON.parse(price.replace(',', ''))

        this.loading = false
      })
    } else if (this.item.name === 'coins') {
      this.apiObj = Coins.item
      this.loading = false
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

  li {
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
