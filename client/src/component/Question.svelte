<script>
  import { navigate } from "svelte-routing";
  import faker from "faker";
  import { selectedQuestion } from "../data.js";
  export let question;

  let mouseover = false;
  let fullsize = false;

  function enter() {
    mouseover = true;
  }

  function leave() {
    mouseover = false;
  }

  function enterFullscreen() {
    navigate(question.id, { replace: true });
    selectedQuestion.set(question);
    fullsize = true;
  }

  function exitFullscreen() {
    navigate("/", { replace: true });
    selectedQuestion.set(undefined);
    fullsize = false;
  }

  let commentTextarea;
  function autoGrowComment() {
    console.log(commentTextarea);
    commentTextarea.style.height = "5px";
    commentTextarea.style.height = commentTextarea.scrollHeight + "px";
  }
</script>

<style>
  .content {
    position: relative;
    margin: 40px;
    max-width: 400px;
    opacity: 0;
    pointer-events: none;
  }
  .content.rendered {
    opacity: 1;
    pointer-events: all;
  }

  .small {
    opacity: 0;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }

  .small.visible {
    opacity: 1;
    transform: translateX(15px);
  }

  .tag {
    display: inline-block;
    padding: 3px 10px 3px 10px;
    margin: 5px;
    border-radius: 10px;
    background-color: rgb(60, 60, 60);
  }

  .topic {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  .timestamp {
    color: #aaa;
    font-size: 0.8rem;
    float: right;
  }

  .body {
    position: absolute;
    left: 100%;
    margin-left: -25px;
    top: 0px;
    width: 800px;
    opacity: 0;
    transition: all ease-in-out 0.4s;
  }

  .body.visible {
    opacity: 1;
    margin-left: 50px;
  }
  .fullscreen > .body {
    left: 0%;
  }

  .fullscreen > .body > .back {
    border: solid #999;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    position: absolute;
    left: -40px;
    top: -15px;
    cursor: pointer;
    transform: rotateZ(135deg);
  }

  .comments {
    position: absolute;
    left: 100%;
    top: 0px;
    width: 400px;
  }

  .comment {
    margin: 15px;
    margin-bottom: 45px;
    opacity: 0;
    animation: comment 1s ease-in-out 1s forwards;
  }

  @keyframes comment {
    0% {
      opacity: 0;
      margin-left: -15px;
    }
    100% {
      opacity: 1;
      margin-left: 15px;
    }
  }

  .commentbody {
    margin-bottom: 10px;
  }

  textarea {
    resize: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    border: solid #999 0px;
    border-bottom-width: 2px;
    color: #fff;
    width: 70%;
    margin-left: 15%;
    overflow: hidden;
  }
</style>

<div
  class="content"
  on:mouseenter={enter}
  on:mouseleave={leave}
  class:rendered={!$selectedQuestion || $selectedQuestion.id === question.id}
  class:fullscreen={fullsize}>
  <div class="small" class:visible={!fullsize} on:click={enterFullscreen}>
    <div class="topic">{question.topic}</div>
    <div class="footer">
      <span class="author">{question.author}</span>
      <span class="timestamp">{question.timestamp}</span>
    </div>

    <div class="tags">
      {#each question.tags as tag}
        <div class="tag">{tag}</div>
      {/each}
    </div>
  </div>
  <div class="body" class:visible={mouseover || fullsize}>
    <div class="back" on:click={exitFullscreen} />
    {question.body}
    {#if fullsize}
      <div class="comments">
        {#each question.comments as comment, i}
          <div class="comment" style="animation-delay: {i * 0.3}s">
            <div class="commentbody">{comment.body}</div>
            <div class="fotter">
              {comment.author}
              <span class="timestamp">{comment.timestamp}</span>
            </div>
          </div>
        {/each}
        <form>
          <textarea
            placeholder="Write a comment!"
            bind:this={commentTextarea}
            on:input={autoGrowComment} />
          <div class="button">SEND</div>
        </form>
      </div>
    {/if}
  </div>
</div>
