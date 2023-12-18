async function fetchData() {
  const res = await fetch(
    "http://api.aladhan.com/v1/timingsByCity/19-12-2023?city=Dubai&country=United+Arab+Emirates&method=8"
  );
  const record = await res.json();
  console.log(record.data.timings)
  document.getElementById("date").innerHTML = record.data.timings.Fajr;
  document.getElementById("areaName").innerHTML = record.data.timings.Asr;
  document.getElementById("latestBy").innerHTML = record.data.timings.Maghrib;
  document.getElementById("deathNew").innerHTML = record.data.timings.Isha;
}
fetchData();
