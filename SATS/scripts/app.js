const classesSection = document.querySelector("#class-container");

const getClasses = async () => {
    const response = await fetch('/data/response.json');
    const data = await response.json();

    let htmlTxt = "";

    data.results.forEach(classItem => {
        htmlTxt += `
            <div class="class-box col-xs-12 col-sm-6 col-md-4">
            <h3 class="class-card__title">${classItem.name}</h3>
            <img class="img" src="images/${classItem.image}" alt="${classItem.name}">
            <p><strong>Instruktør:</strong> ${classItem.instructor}</p>
            <p><strong>Senter:</strong>${classItem.clubName}</p>
            <p><strong>Varighet:</strong>${classItem.durationInMinutes} minutter</p>
            <p><strong>Antall plasser:</strong>${classItem.bookingInfo.bookedCount} / ${classItem.bookingInfo.capacity} </p>
            <button class="book-btn" data-status=${classItem.bookingInfo.memberBookingInfo.bookingState}>
            ${classItem.bookingInfo.memberBookingInfo.bookingState === "Booked" ? "Avbestill" : "Book"} plass
            </button>
            </div>
        `
       
    });


    classesSection.innerHTML = htmlTxt;

};


    getClasses(); // Kaller funskjonen

 

