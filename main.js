import "./js/jquery.min.js";
import "./js/bootstrap.bundle.min.js";
import "./js/custom.js";

import "./js/geo.js";

import "./css/bootstrap.min.css";
import "./css/bootstrap-icons.css";
import "./css/tooplate-crispy-kitchen.css";


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // Registration failed
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}
