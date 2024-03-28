'use client'

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

  return (
    <button
      type="button"
      className="custom-btn btn btn-danger reservation-btn"
      data-bs-toggle="modal"
      data-bs-target="#BookingModal"
      onClick={handleReservation}
    >
      Reservation
    </button>
  );
}
