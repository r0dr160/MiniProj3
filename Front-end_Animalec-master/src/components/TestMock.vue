<template>
  <div>
    <h1>Mock Test</h1>
    <div>
      <h2>Users:</h2>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.role }})</li>
      </ul>
    </div>
    <div>
      <h2>Animals:</h2>
      <ul>
        <li v-for="animal in animals" :key="animal.id">{{ animal.name }} ({{ animal.type }})</li>
      </ul>
    </div>
    <div>
      <h2>Questions:</h2>
      <ul>
        <li v-for="question in questions" :key="question.id">{{ question.question }} = {{ question.answer }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      animals: [],
      questions: [],
    };
  },
  async created() {
    // Fetch mock data
    this.users = await fetch("/api/users").then(res => res.json());
    this.animals = await fetch("/api/animals").then(res => res.json());
    this.questions = await fetch("/api/questions").then(res => res.json());
  },
};
</script>
