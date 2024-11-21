<template>
  <div class="d-flex flex-column gap-3">
    <h1>Login</h1>
    <router-view name="shoplogin"></router-view>
    
    <div class="mb-3">
      <label for="login" class="form-label">Username</label>
      <input type="text" class="form-control" id="login" v-model="login">
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" v-model="password">
    </div>

    <button @click="shopLogin({login, password})" class="btn btn-primary">Login</button>

    <table v-if="shopUser" class="table table-striped">
      <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>login</th>
        <th>email</th>
        <th>session</th>
      </tr>
      </thead>

      <tbody>
      <tr>
        <td>{{ shopUser._id }}</td>
        <td>{{ shopUser.name }}</td>
        <td>{{ shopUser.login }}</td>
        <td>{{ shopUser.email }}</td>
        <td>{{ shopUser.session }}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {
  name: 'ShopLoginView',
  data: () => ({
    login: '',
    password: '',
  }),
  computed: {
    ...mapState('shop', ['shopUser'])
  },
  methods: {
    ...mapActions('shop', ['shopLogin']),
  }
}
</script>
