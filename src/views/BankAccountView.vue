<template>
  <div class="d-flex flex-column gap-3">
    <h1>Account data</h1>

    <div class="d-flex flex-column gap-2">
      <div>
        <label for="accountNumber" class="form-label">Account number</label>
        <div class="d-flex align-items-center">
          <input id="accountNumber" v-model="number" class="form-control">
          <button class="btn btn-danger" @click="resetAccountNumber">Reset</button>
        </div>
        <p v-if="accountNumberError===-1">invalid account number</p>
      </div>

      <div class="d-flex align-items-center gap-2">
        <button :disabled="!isAccountNumberValid" @click="getAccountAmount(number)" class="btn btn-success">Get amount
        </button>
        <button :disabled="!isAccountNumberValid" @click="getAccountTransactions(number)" class="btn btn-primary">Get
          transactions
        </button>
      </div>
    </div>

    <div>
      <p>Available amount :
        <span v-if="accountNumberError === 1" class="fw-bold">{{ formatNumber(accountAmount) }}</span>
        <span v-else></span>
      </p>
    </div>

    <div>
      <h2>Transaction(s)</h2>
      <table v-if="accountNumberError === 1" class="table table-striped">
        <thead>
        <tr>
          <th>amount</th>
          <th>date</th>
          <th>heure</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="(transaction, index) in accountTransactions" :key="index">
          <td>{{ transaction.amount }}</td>
          <td>{{ convertDateToDate(transaction.date.$date) }}</td>
          <td>{{ convertDateToTime(transaction.date.$date) }}</td>
        </tr>
        </tbody>
      </table>
      <span v-else></span>
    </div>
  </div>
</template>

<script>

import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'BankAccountView',
  data: () => ({
    number: '',
  }),
  computed: {
    ...mapState('bank',['accountAmount', 'accountTransactions', 'accountNumberError']),
    isAccountNumberValid() {
      const rexp = RegExp('^[A-Za-z0-9]{22}-[0-9]{7}$', 'g')
      return rexp.test(this.number)
    }
  },
  methods: {
    ...mapActions('bank',['getAccountAmount', 'getAccountTransactions']),
    ...mapMutations('bank',['updateAccountNumberError']),
    convertDateToDate(date) {
      let d = new Date(date)
      return d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear()
    },
    convertDateToTime(date) {
      let d = new Date(date)
      return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    },
    resetAccountNumber() {
      this.number = ''
      this.updateAccountNumberError(0)
    },
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
  }
}
</script>
