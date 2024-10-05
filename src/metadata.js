// Metadata about the different files to explore

/*
Possible column types:
    integer
    decimal
    time
    date
    timestamp
    string
*/

module.exports = [
  {
    name: "content",
    url: "https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/content.csv",
    description: "Articles information.",
    columns: [
      {
        name: "content_id",
        type: "integer",
      },
      {
        name: "author",
        type: "string",
      },
      {
        name: "body",
        type: "string",
      },
      {
        name: "target_lat",
        type: "decimal",
      },
      {
        name: "target_long",
        type: "decimal",
      },
      {
        name: "language",
        type: "string",
      },
      {
        name: "is_recommendable",
        type: "integer",
      },
    ],
  },
  {
    name: "content_display",
    url: "https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/content_display.csv",
    description: "Page views and questions.",
    columns: [
      {
        name: "content_display_id",
        type: "integer",
      },
      {
        name: "user_id",
        type: "integer",
      },
      {
        name: "content_id",
        type: "integer",
      },
      {
        name: "question_id",
        type: "integer",
      },
      {
        name: "latitude",
        type: "decimal",
      },
      {
        name: "longitude",
        type: "decimal",
      },
      {
        name: "timestamp",
        type: "decimal",
      },
      {
        name: "clicked",
        type: "integer",
      },
    ],
  },
  {
    name: "content_topic",
    url: "https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/content_topic.csv",
    description: "Articles categorization.",
    columns: [
      {
        name: "id",
        type: "integer",
      },
      {
        name: "content_id",
        type: "integer",
      },
      {
        name: "topic_id",
        type: "string",
      },
      {
        name: "confidence",
        type: "decimal",
      },
    ],
  },
  {
    name: "page_view",
    url: "https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/page_view.csv",
    description: "Articles page views.",
    columns: [
      {
        name: "page_view_id",
        type: "integer",
      },
      {
        name: "timestamp",
        type: "timestamp",
      },
      {
        name: "user_id",
        type: "integer",
      },
      {
        name: "content_id",
        type: "integer",
      },
      {
        name: "latitude",
        type: "decimal",
      },
      {
        name: "longitude",
        type: "decimal",
      },
    ],
  },
  {
    name: "questions",
    url: "https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/questions.csv",
    description: "Questions on articles.",
    columns: [
      {
        name: "question_id",
        type: "integer",
      },
      {
        name: "timestamp",
        type: "timestamp",
      },
      {
        name: "user_id",
        type: "integer",
      },
      {
        name: "question_text",
        type: "string",
      },
    ],
  },
  {
    name: "stock_portfolio_item",
    url: "https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/stock_portfolio_item.csv",
    description: "Stock market stuff.",
    columns: [
      {
        name: "id",
        type: "integer",
      },
      {
        name: "user_id",
        type: "integer",
      },
      {
        name: "topic_id",
        type: "string",
      },
      {
        name: "created_at",
        type: "time",
      },
    ],
  },
  {
    name: "user",
    url: "https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/user.csv",
    description: "Users information.",
    columns: [
      {
        name: "user_id",
        type: "integer",
      },
      {
        name: "first_name",
        type: "string",
      },
      {
        name: "last_name",
        type: "string",
      },
      {
        name: "email",
        type: "string",
      },
      {
        name: "gender",
        type: "string",
      },
      {
        name: "language",
        type: "string",
      },
      {
        name: "birthdate",
        type: "date",
      },
      {
        name: "enthnicity",
        type: "string",
      },
      {
        name: "zip_code",
        type: "integer",
      },
      {
        name: "home_latitude",
        type: "decimal",
      },
      {
        name: "home_longitude",
        type: "decimal",
      },
      {
        name: "home_geo_hash",
        type: "decimal",
      },
    ],
  },
];
