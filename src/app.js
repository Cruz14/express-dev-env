import $ from 'jquery';

const container = document.getElementById('app');

const request = $.ajax({
  type: 'GET',
  url: '/api/query',
});

request.success(result => {
  console.log(result);
  // container.innerHTML = result.response.language;
});

