//Filename: Assignment1
//Student Name: Sirada Thoungvitayasutee
//Student ID: 301292632
//Date 26 Feb 2023-->

(function () {
    function start() {
        console.log("App Started...");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for (button of deleteButton)
        {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure")) {
                    event.preventDefault();
                    window.location.assign('/bookList');
                }
            });
        }
    }
    window.addEventListener("load", start);
})();