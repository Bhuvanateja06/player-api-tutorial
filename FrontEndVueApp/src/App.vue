<template>
  <div class="app-container">
    <h1>Bible App</h1>
    <RandomBibleVerse />
    <SearchBibleVerse />
  </div>
</template>

<script>
import RandomBibleVerse from "./components/RandomBibleVerse.vue";
import SearchBibleVerse from "./components/SearchBibleVerse.vue";

export default {
  components: {
    RandomBibleVerse,
    SearchBibleVerse,
  },
};
</script>

<style>
.app-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
}
</style>
