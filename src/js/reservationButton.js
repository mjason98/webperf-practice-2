// use client
// import { useEffect } from "react";

export default function ReservationButton() {
  const handleReservation = async () => {
    const reservationData = {
      name: "HS student",
      date: "2024-03-26",
      time: "19:00",
      guests: 123,
    };

    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect(() => {
  //   // Define the handleClick function
  //   const handleClick = (event) => {
  //     // Check if the clicked element is our button
  //     if (event.target.matches(".reservation-btn")) {
  //       handleReservation();
  //     }
  //   };

  //   // Add the event listener
  //   document.addEventListener("click", handleClick);

  //   // Clean up the event listener
  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);

  return (
    <button
      type="button"
      className="custom-btn btn btn-danger reservation-btn"
      data-bs-toggle="modal"
      data-bs-target="#BookingModal"
    >
      Reservation
    </button>
  );
}
