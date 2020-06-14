<script>
  import Sidebar from "./Sidebar.svelte";
  import Question from "./Question.svelte";
  import { questionList, selectedQuestion } from "../data.js";
</script>

<style>
  :global(body) {
    background-color: rgb(45, 45, 45);
    color: #eee;
    font-family: "Montserrat", sans-serif;
  }

  :global(.button) {
    cursor: pointer;
    margin-top: 10px;
    text-align: center;
    letter-spacing: 0.2rem;
    color: #eee;
    transition: all 0.3s ease-in-out;
  }
  :global(.button:hover) {
    color: #ccc;
  }

  .content {
    position: absolute;
    left: 150px;
    top: 30px;
  }

  .header {
    position: fixed;
    background-color: rgb(50, 50, 50);
    padding: 5px;
    width: 100%;
    top: 0px;
  }

  input {
    background-color: rgb(65, 65, 65);
    padding: 15px;
    border-radius: 15px;
    border: solid 2px rgb(20, 20, 20);
    outline: none;
    margin-left: 50px;
    color: #fff;
  }
</style>

<Sidebar />

<div class="content">
  {#each $questionList as question}
    <Question {question} />
  {/each}

  <div class="header">
    <input placeholder="search..." />
    <span class="button">+ new question</span>
  </div>
</div>
