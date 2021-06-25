const app = new Vue({
  el: '#app',
  data: {
    message: ''
  }
});

const list = new Vue({
  el: '#employee-list-items',
  data: {
    employees: []
  }
});


axios.get('https://icanhazdadjoke.com/', {
  headers: {
    "Accept": "text/plain" 
  }
}).then(response => {
  app.message = response.data;
});

axios.get('/api/employees').then(response => {
  list.employees = response.data;
});