<template>
  <div id="app">
    <h1>TODO LIST</h1>
    <Header />
    <Tab />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Tab from './components/Tab.vue';

export default {
  name: 'App',
  components: {
    Header,
    Tab,
  },
  data() {
    return {
      todos: [],
    };
  },
};
</script>
