async function run() {
  const res = await fetch('/api/legacy/summary');
  const data = await res.json();
  document.getElementById('summary').textContent = JSON.stringify(data, null, 2);
}
run();
