export class Question {
  /**
   * @type string
   */
  id;
  /**
   * @type string
   */
  title;
  /**
   * @type string
   */
  body;
  /**
   * @type string[]
   */
  tags;
  /**
   * @type string
   */
  author;
  /**
   * @type string
   */
  timestamp;

  /**
   * @type Comment[]
   */
  comments;
}

export class Comment {
  /**
   * @type string
   */
  id;
  /**
   * @type string
   */
  body;
  /**
   * @type string
   */
  author;
  /**
   * @type string
   */
  timestamp;
}
