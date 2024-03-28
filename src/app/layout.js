'use client'

import "../css/bootstrap.min.css";
import "../css/bootstrap-icons.css";
import "../css/tooplate-crispy-kitchen.css";

// export const metadata = {
//   title: "Crispy Kitchen - Bootstrap 5 HTML Template",
//   description: "",
//   author:"",
//   charset:"utf-8",
//   viewport:"width=device-width, initial-scale=1",
// };

export default function RootLayout({ children }) {


  return (
  <html lang="en">
    <head>
    <script src="/js/jquery.min.js"></script>
    <script src="/js/custom.js"></script>
    <script src="/js/bootstrap.bundle.min.js"></script>
    </head>
    {children}
  </html>);
}
