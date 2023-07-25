const url= 'localhost:3000/roles'

const searchSelected = document.getElementById("roles");

// jason a array
const dataArray = JSON.parse(url);
dataArray.forEach(item => {
    console.log(item);
  });

