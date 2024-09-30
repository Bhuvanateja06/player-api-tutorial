<template>
  <div class="random-verse-container">
    <button @click="getRandomVerse">Get Random Bible Verse</button>
    <div v-if="verse" class="verse-display">{{ verse }}</div>
  </div>
</template>

<script>
export default {
  name: "RandomBibleVerse",
  data() {
    return {
      verse: "",
    };
  },
  methods: {
    getRandomVerse() {
      fetch("https://labs.bible.org/api/?passage=random&type=json")
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            const verseData = data[0];
            let scripture = verseData.bookname + " ";
            scripture += verseData.chapter + ":";
            scripture += verseData.verse + " - ";
            scripture += verseData.text;
            this.verse = scripture;
          } else {
            this.verse = "No verse found.";
          }
        })
        .catch(() => {
          this.verse = "Error fetching random verse.";
        });
    },
  },
};
</script>

<style scoped>
.random-verse-container {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 2px solid #3498db;
  border-radius: 10px;
  background-color: #ecf0f1;
}

button {
  padding: 10px 15px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #2980b9;
}

.verse-display {
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1.1rem;
  color: #34495e;
}
</style>
