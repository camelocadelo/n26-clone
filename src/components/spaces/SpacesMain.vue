<template>
  <ul>
    <li>
      <div class="spaces__square" :class="{appear : dragged}" draggable="true" @dragstart="drag($event)">
        <div class="spaces__square__overlay"></div>
        <div ref="movable" class="spaces__square__movable"></div>
        <img src="@/assets/img/main_account.jpg">
      </div>
      <div class="spaces__details">
        <span class="spaces__details__name">Main Account</span>
        <span class="spaces__details__balance">€229.34</span>
      </div>
    </li>
    <li @drop="drop($event)" @dragover.prevent>
      <div class="spaces__square">
        <div class="spaces__square__overlay"></div>
        <div v-if="dragged" id="movable" class="spaces__square__movable"></div>
        <img src="https://cdn.number26.de/spaces/default-images/education_books.jpg?version=1">
      </div>
      <div class="spaces__details">
        <span class="spaces__details__name">Vacation</span>
        <span class="spaces__details__balance">€24</span>
      </div>
    </li>

    <li>
      <button class="spaces__create-new">
        <i class="far fa-plus-square"></i>
        <span>Create a new space</span>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SpacesMain",
  data() {
    return {
      dragged: false
    };
  },
  methods: {
    drag() {
      this.dragged = true;
      event.dataTransfer.setDragImage(this.$refs.movable, 50, 50);
    },
    drop() {
      event.preventDefault();
      this.dragged = false;
      this.$router.push({ name: 'transfer', query: { spaceName: 'Vacation' }  });

    }
  }
};
</script>
