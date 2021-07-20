<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div v-if="errors.length > 0">
        Please enter the following fields first
        <ol>
          <li v-for="(error, index) in errors" :key="index">
            {{ error }}
          </li>
        </ol>
      </div>
      <label for="name">Name: </label>
      <input id="name" v-model="name" />
      <br />
      <br />

      <label for="description">Description: </label>
      <textarea id="description" v-model="description"></textarea>
      <br />
      <br />

      <label for="priority">Priority: </label>
      <select id="priority" v-model.number="priority">
        <option v-for="(option, index) in options" :key="index">{{
          option
        }}</option>
      </select>
      <br />
      <br />

      <input type="submit" value="Submit" />
      <br />
    </form>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
  name: 'Add',
  data() {
    return {
      name: null,
      description: null,
      priority: null,
      errors: [],
      options: [1, 2, 3],
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];
      if (this.name && this.description && this.priority) {
        const todo = {
          name: this.name,
          description: this.description,
          priority: this.priority,
        };
        eventBus.$emit('added-todo', todo);
        this.name = null;
        this.description = null;
        this.priority = null;
      } else {
        if (!this.name) this.errors.push('Name required.');
        if (!this.description) this.errors.push('Description required.');
        if (!this.priority) this.errors.push('Priority required.');
      }
    },
  },
};
</script>
