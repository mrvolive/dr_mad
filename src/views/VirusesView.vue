<template>
  <div class="d-flex flex-column gap-3">
    <h1>Les virus</h1>

    <div class="d-flex flex-column gap-2">
      <h2>Filtres</h2>

      <div class="d-flex flex-column gap-2">
        <div class="d-flex flex-column gap-2">
          <div class="form-check">
            <input type="checkbox" v-model="filterPriceActive" class="form-check-input" id="filterpriceactive">
            <label for="filterpriceactive" class="form-check-label">Prix min</label>
          </div>

          <label for="filterprice" v-if="filterPriceActive">
            <input v-model="priceFilter" type="number" id="filterprice" class="form-control">
          </label>
        </div>

        <div class="d-flex flex-column gap-2">
          <div class="form-check">
            <input type="checkbox" v-model="filterNameActive" class="form-check-input" id="filternameactive">
            <label for="filternameactive" class="form-check-label">Nom contient</label>
          </div>

          <label for="filtername" v-if="filterNameActive">
            <input v-model="nameFilter" id="filtername" class="form-control">
          </label>
        </div>

        <div class="d-flex flex-column gap-2">
          <div class="form-check">
            <input type="checkbox" v-model="filterStockActive" class="form-check-input" id="filterstockactive">
            <label for="filterstockactive" class="form-check-label">En stock</label>
          </div>
        </div>
      </div>
    </div>

    <table class="mt-2 table table-striped">
      <thead>
      <tr>
        <th>
          <input type="checkbox" @click="toggleAllSelection">
        </th>
        <th>nom</th>
        <th>description</th>
        <th>stock</th>
        <th>prix</th>
        <th>bouton</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(virus, index) in filteredViruses" :key="index">
        <td>
          <input type="checkbox" :checked="isSelected(index)" @click="toggleSelection(index)">
        </td>
        <td>{{virus.name}}</td>
        <td>{{virus.description}}</td>
        <td>{{virus.stock}}</td>
        <td>{{virus.price}}</td>
        <td class="d-flex gap-2">
          <button class="btn btn-success" @click="">edit</button>
          <button class="btn btn-danger" @click="">delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CheckedList from "@/components/CheckedList";

export default {
  name: 'VirusesView',
  components: { CheckedList },
  data: () => ({
    priceFilter: 0,
    nameFilter: '',
    filterPriceActive: false,
    filterNameActive: false,
    filterStockActive: false,
    selected: []
  }),
  computed: {
    ...mapState(['viruses']),
    filteredViruses() {
      return this.viruses
          .filter(v => !this.filterPriceActive || v.price > this.priceFilter)
          .filter(v => !this.filterNameActive || v.name.includes(this.nameFilter))
          .filter(v => !this.filterStockActive || v.stock > 0);
    }
  },
  methods: {
    ...mapActions(['getAllViruses']),
    isSelected(index) {
      return this.selected.includes(index);
    },
    toggleSelection(index) {
      const selectedIndex = this.selected.indexOf(index);
      if (selectedIndex === -1) {
        this.selected.push(index);
      } else {
        this.selected.splice(selectedIndex, 1);
      }
    },
    toggleAllSelection() {
      if (this.selected.length === this.viruses.length) {
        this.selected = [];
      } else {
        this.selected = this.viruses.map((_, index) => index);
      }
    },
  },
  mounted() {
    this.getAllViruses();
  }
}
</script>