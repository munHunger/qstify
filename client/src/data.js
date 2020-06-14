import { writable } from "svelte/store";

export const selectedQuestion = writable();

export const questionList = writable();

// questionList.subscribe((list) => selectedQuestion.set((list || [])[0]));

import faker from "faker";
questionList.set([
  getQuestion(),
  getQuestion(),
  getQuestion(),
  getQuestion(),
  getQuestion(),
  getQuestion(),
  getQuestion(),
  getQuestion(),
  getQuestion(),
  getQuestion(),
]);

function getQuestion() {
  let q = {
    id: faker.random.uuid(),
    topic: faker.hacker.phrase(),
    body: faker.lorem.paragraph(),
    author: faker.internet.userName(),
    timestamp: faker.date.recent().toISOString(),
    tags: [],
    comments: [],
  };
  let tags = Math.floor(Math.random() * 5);
  for (let i = 0; i < tags; i++) q.tags.push(faker.hacker.noun());
  let comments = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < comments; i++) {
    q.comments.push({
      author: faker.internet.userName(),
      body: faker.lorem.paragraph(),
      timestamp: faker.date.recent().toISOString(),
    });
  }
  return q;
}
