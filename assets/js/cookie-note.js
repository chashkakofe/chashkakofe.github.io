(function () {
  var KEY = 'cookie-note-ok';
  var note = document.getElementById('cookie-note');
  if (!note) return;
  try { if (localStorage.getItem(KEY)) return; } catch (e) {}
  note.hidden = false;
  note.querySelector('button').addEventListener('click', function () {
    note.hidden = true;
    try { localStorage.setItem(KEY, '1'); } catch (e) {}
  });
})();
