// IIFE -- Immediately Invoked Function Expression
(function () {

    function Start() {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();

$(document).ready(function () {
    if($('#dtBasicExample')){
        $('#dtBasicExample').DataTable({
            "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]]
        } );
        $('.dataTables_length').addClass('bs-select');
    }
    
});