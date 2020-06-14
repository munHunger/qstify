<script>
  import faker from "faker";
  let avatar = faker.image.avatar();
  let username = faker.internet.userName();
</script>

<style>
  .sidebar {
    background-color: rgb(37, 37, 37);
    position: fixed;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 150px;
    font-family: "Muli", sans-serif;
  }

  .avatar {
    border-radius: 100%;
    overflow: hidden;
    border: solid 5px rgb(45, 45, 45);
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    margin: 25px;
  }
  .username {
    text-align: center;
    color: #ccc;
  }
  .routes {
    margin-top: 25px;
    padding: 5px;
  }

  .route {
    text-transform: uppercase;
    font-size: 1.3em;
    font-weight: 500;
    letter-spacing: 0.1rem;
    color: #ddd;
  }
</style>

<div class="sidebar">
  <div class="user">
    <div class="avatar">
      <img src={avatar} alt={username} />
    </div>
    <div class="username">{username}</div>
  </div>

  <div class="routes">
    <div class="route">Questions</div>
  </div>
</div>
