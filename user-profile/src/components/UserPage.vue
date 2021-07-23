<template>
  <div>
    <h1>This is User Profile Page</h1>
    <div v-if="!user">
      <p>Please select an user id, to view its details.</p>
      <p>
        User :
        <select @change="getUserDetails" v-model="selectedUser">
          <option disabled value="">Choose User</option>
          <option v-for="(user, index) in 10" :value="user" :key="index">{{
            user
          }}</option>
        </select>
      </p>
    </div>
    <div v-else-if="user">
      <p>User detail:</p>
      <div v-for="(value, key, index) in user" :key="index">
        <p v-if="key !== 'address' && key !== 'company'">
          {{ key }} - {{ value }}
        </p>
        <div v-if="key === 'address'">
          <p v-for="(val, addKey, index) in value" :key="index">
            {{ addKey }} - {{ val }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser } from '../services/get-user-service';
export default {
  name: 'UserPage',
  data() {
    return {
      //   selectedUser: 'Choose User' as String|Number,
      selectedUser: '',
      id: this.$route.params.id,
      user: this.$route.params.user,
    };
  },
  mounted() {
    console.log(this.id);
    console.log(this.user);
  },
  methods: {
    async getUserDetails() {
      this.user = await getUser(this.selectedUser);
    },
  },
};
</script>

<style></style>
