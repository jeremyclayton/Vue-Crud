<template>
  <div id="app">
      <header>
         <router-link to="/">Lorem Ipsum</router-link>
      </header>
      <nav>
          <ul>
              <li>
                  <router-link to="/book">book</router-link>
              </li>
          </ul>
      </nav>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
