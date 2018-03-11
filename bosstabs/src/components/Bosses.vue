<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Bosslist</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Corp
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Kalphite Queen
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank">
          Etc
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Bosses',
  data () {
    return {
      msg: 'Welcome to the boss list'
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
