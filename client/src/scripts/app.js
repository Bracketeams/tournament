// IIFE -- Immediately Invoked Function Expression
(function () {

    function Start() {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();

setTimeout(function () {
    $(function () {
      $('#dtBasicExample').DataTable();
    });
  }, 3000);
  