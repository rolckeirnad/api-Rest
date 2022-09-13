import './index.css'

async function getData() {
  const request = await fetch('http://localhost:8085/datos');
  const data = await request.json();
  return data;
}

async function showData() {
  const apiData = await getData();
  const nodeList = apiData.map((obj) => createContainer(obj));
  const container = document.querySelector('#mainContainer');
  container.replaceChildren(...nodeList);
}

function createContainer(data) {
  const div = document.createElement('div');
  div.className = 'card';
  const spanId = document.createElement('span');
  spanId.className = 'card-id';
  spanId.textContent = data.id;
  const spanName = document.createElement('span');
  spanName.className = 'card-name';
  spanName.textContent = data.name;
  const spanAge = document.createElement('span');
  spanAge.className = 'card-age';
  spanAge.textContent = data.age;
  div.append(spanId, spanName, spanAge);
  return div;
}

showData();
