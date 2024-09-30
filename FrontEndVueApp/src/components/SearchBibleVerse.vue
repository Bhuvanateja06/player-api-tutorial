<template>
  <div class="search-verse-container">
    <input v-model="verseInput" placeholder="Enter verse (e.g., John 3:16)" />
    <button @click="getSpecificVerse">Fetch Specific Verse</button>
    <div v-if="verse" class="verse-display">{{ verse }}</div>
  </div>
</template>

<script>
export default {
  name: "SearchBibleVerse",
  data() {
    return {
      verseInput: "",
      verse: "",
    };
  },
  methods: {
    getSpecificVerse() {
      if (this.verseInput.trim() === "") {
        this.verse = "Please enter a verse reference.";
        return;
      }

      fetch(
        "https://labs.bible.org/api/?passage=" + this.verseInput + "&type=json"
      )
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
            this.verse = "Verse not found.";
          }
        })
        .catch(() => {
          this.verse = "Error fetching verse.";
        });
    },
  },
};
</script>

<style scoped>
.search-verse-container {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 2px solid #e74c3c;
  border-radius: 10px;
  background-color: #fafafa;
}

input {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #c0392b;
}

.verse-display {
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1.1rem;
  color: #2c3e50;
}
</style>
