<template>
  <div>
    <span
      v-for="(tab, index) in tabs"
      :key="index"
      @click="selectedTab = tab"
      :class="{ activeTab: selectedTab === tab }"
    >
      {{ tab }}
    </span>

    <div v-show="selectedTab === 'Todo'">
      <p v-if="!todoList.length">
        <strong>There are no todos. Please add a todo.</strong>
      </p>
      <ul v-else>
        <li v-for="(todo, index) in todoList" :key="index">
          <p>{{ todo.name }}</p>
          <p>Priority:{{ todo.priority }}</p>
          <p>{{ todo.description }}</p>
        </li>
      </ul>
    </div>

    <div v-show="selectedTab === 'Add A Todo'">
      <br />
      <Add />
    </div>
  </div>
</template>

<script>
import Add from './Add.vue';
import { eventBus } from '../main.js';

export default {
  name: 'Tab',
  data() {
    return {
      tabs: ['Todo', 'Add A Todo'],
      selectedTab: 'Todo',
      todoList: [],
    };
  },
  components: {
    Add,
  },
  methods: {
    update(todo) {
      this.todoList = [...this.todoList, todo];
    },
  },
  mounted() {
    eventBus.$on('added-todo', (payload) => {
      this.update(payload);
      this.selectedTab = 'Todo';
    });
  },
};
</script>

<style>
.activeTab {
  color: #b8190e;
}
</style>
