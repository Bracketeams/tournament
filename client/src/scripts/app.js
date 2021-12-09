// IIFE -- Immediately Invoked Function Expression
(function () {

    function Start() {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();

setTimeout(function () {
    $(function () {
      $('#dtBasicExample').DataTable({"pageLength": 5,
      "processing": true,
      "retrieve": true,
      "bDestroy": true,
      "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]]});
    });
  }, 3000);
  