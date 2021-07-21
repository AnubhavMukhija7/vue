<template>
  <div>
    <h1>This is Home Page</h1>
    <h3>Select a user to view its profile</h3>
    <!-- <div>{{ toTitleCase('user.name') }}</div> ---------ASK------------ ??? -->
    <div v-for="(user, index) in users" :key="index">
      <router-link :to="{ name: 'UserPage', params: { id: user.id, user } }">{{
        user.name
      }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import toTitleCase from '../utils/toTitleCase';
// import data from '../data/data';
import { User, Users } from '../interfaces/users';
import { getUsers } from '../services/get-all-user-service';

export default Vue.extend({
  name: 'HomePage',
  data() {
    return {
      // users: data,
      users: [] as Users,
    };
  },
  beforeMount() {
    //why any type with THIS keyword also?
    this.users.forEach((user: User) => {
      user.name = toTitleCase(user.name);
    });
  },
  created() {
    this.getAllUsers();
    //ask where to call API ?? Before create or at created or before mount
  },
  methods: {
    async getAllUsers() {
      this.users = await getUsers();
    },
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
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
