document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(section => section.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function loadJSON(url, callback) {
  fetch(url)
    .then(resp => resp.json())
    .then(data => callback(data));
}

loadJSON('data/codes.json', codes => {
  const tbody = document.querySelector('#codesTable tbody');
  codes.forEach(code => {
    const row = `<tr><td>${code.code}</td><td>${code.reward}</td><td>${code.location}</td></tr>`;
    tbody.innerHTML += row;
  });
});

loadJSON('data/secrets.json', secrets => {
  const tbody = document.querySelector('#secretsTable tbody');
  secrets.forEach(s => {
    const row = `<tr><td>${s.tip}</td><td>${s.how}</td></tr>`;
    tbody.innerHTML += row;
  });
});

loadJSON('data/events.json', events => {
  const tbody = document.querySelector('#eventTable tbody');
  events.forEach(e => {
    const row = `<tr><td>${e.egg}</td><td>${e.pet}</td><td>${e.percentage}</td><td>${e.rarity}</td></tr>`;
    tbody.innerHTML += row;
  });
});

loadJSON('data/event_guide.json', guides => {
  const tbody = document.querySelector('#eventGuideTable tbody');
  guides.forEach(g => {
    const row = `<tr><td>${g.item}</td><td>${g.how}</td></tr>`;
    tbody.innerHTML += row;
  });
});
