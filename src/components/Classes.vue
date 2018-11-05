<template>
  <div class="hello">
    <h2>Classlist</h2>
    <ul>
      <li v-for="item of classes" :key="item.name">
        {{ item }}
      </li>
      <li>
        <router-link to="/corp">
          Corporeal Beast
        </router-link>
      </li>
      <li>
        <router-link to="/kq">
          Kalphite Queen
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import ClassesApi from '@/services/api/Classes'

  export default {
    name: 'Classes',
    data() {
      return {
        loading: true,
        classes: []
      }
    },
    created: function () {
      ClassesApi.getClasses()
        .then(classes => {
          this.classes = classes;
        })
        .catch(error => console.error(error))
        .finally(() => {
          this.loading = false;
        })
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
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
