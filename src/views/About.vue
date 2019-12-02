<template>
  <div class="about">
    <AppBoard colorClass="is-info is-bold">
      <AppHeader appName="About"></AppHeader>
    </AppBoard>
  </div>
</template>

<script>
import AppBoard from "@/components/AppBoard.vue";
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppBoard,
    AppHeader
  }
};
</script>
