const path = require('path')

module.exports = {
  entry: [
    "./src/assets/js/app",
    "./src/assets/js/variables",
    "./src/assets/js/functions",
    "./src/assets/js/calendarmodule",
    "./src/assets/js/calendardashboard",
    "./src/assets/js/datatables",
    "./src/assets/js/FAQmodule",
    "./src/assets/js/linkscatalog",
    "./src/assets/js/phonebook",
    "/src/assets/js/tasksmodule",
    "./src/assets/js/weather",
    "./src/assets/js/Init"
  ],
  output: {
    path: path.resolve(__dirname, './dist/assets/js/'),
    filename: 'app.js'
  },
  devtool: false,
  mode: 'production'
};
