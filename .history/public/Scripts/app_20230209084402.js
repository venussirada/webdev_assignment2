(function () {
    function start() {
        console.log("App Started...");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for (button of deleteButton)
        {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure"))
                {
                    event.preventDefault();
                    window.
                    }
            })
        }
    }
    window.addEventListener("load", start);
})();