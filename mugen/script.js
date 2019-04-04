document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", attackRadius: 100, timeBetweenMonsters: 3400, monsterHitRadius: 100, attackDuration:600, jumpHeight: 300});
});