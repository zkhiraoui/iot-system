// server/config.js
require('dotenv').config();

module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  TUYA_API_URL: "https://openapi.tuya.com",
  TUYA_CLIENT_ID: process.env.gq8prdc5wuwd7ck3ec3q,
  TUYA_SECRET: process.env.bcae3c66cf60477cb8368b8647a4b6fe
};
