function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  var b = document.getElementById('togglePassword');
  var x = document.getElementById('password');

  b.addEventListener('click', function () {
    if (x.type === 'password') {
      x.type = 'text';
    } else {
      x.type = 'password';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  handleFloatingLabel();
  handlePasswordSwitcher();
});
