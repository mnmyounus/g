        function checkPassword() {
            var password = document.getElementById("password").value;
            // Replace "yourpassword" with the actual password you want to check against
            if (password === "y@") {
                // Redirect to another page
                window.location.href = "home/indexs.html";
            } else {
                alert("Incorrect password. Please try again.");
            }
        }