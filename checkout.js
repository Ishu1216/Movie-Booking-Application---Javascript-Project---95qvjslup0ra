const movie = [
    {
        title: "Total Dhamaal",
        price: 20.00,
    },
    {
        title: "Brahmastra",        
        price: 25.00,
    },
    {
        title: "Ae Dil Hai Mushkil",
        price: 18.00,
    },
    {
        title: "Ram Setu",
        price: 25.00,
    },
    {
        title: "RRR",
        price: 20.00,
    },
    {
        title: "Fukrey 3",
        price: 22.00,
    },
    {
        title: "Cuttputlli",
        price: 15.00,
    },
    {
        title: "Shershaah",
        price: 15.00,
    },
    {
        title: "Sita Ramam",
        price: 13.00,
    },
    {
        title: "Yaariyan",
        price: 10.00,
    },
    {
        title: "3 idiots",
        price: 10.00,
    },
    {
        title: "Kedarnath",
        price: 18.00,
    },
    {
        title: "Chhichhore",
        price: 20.00,
    },
    {
        title: "Avatar",
        price: 13.00,
    },
    {
        title: "Barbie",
        price: 16.00,
    },
    {
        title: "The Nun II",
        price: 18.00,
    },
    {
        title: "#Alive",
        price: 10.00,
    },
    {
        title: "Tiger Zinda Hai",
        price: 12.00,
    },
    {
        title: "Jailer",
        price: 14.00,
    },
    {
        title: "Dream Girl 2",
        price: 22.00,
    },
];

const cardNumberInput = document.getElementById("card-number");
const expiryDateInput = document.getElementById("expiry-date");
const cvvInput = document.getElementById("cvv");

// Add input event listener to automatically format card number and restrict to 16 digits
cardNumberInput.addEventListener("input", function () {
    // Remove any non-digit characters and limit to 16 digits
    const trimmedValue = this.value.replace(/\D/g, '').slice(0, 16);

    // Add space every 4 digits
    this.value = trimmedValue.match(/.{1,4}/g).join(" ");
});

// Add form submission event listener for field validation and confirmation
const paymentForm = document.getElementById("payment-form");
paymentForm.addEventListener("submit", function (e) {
    const cardNumber = cardNumberInput.value;
    const expiryDate = expiryDateInput.value;
    const cvv = cvvInput.value;

    if (!cardNumber.trim()) {
        e.preventDefault(); // Prevent form submission
        alert("Please enter a card number.");
    } else if (cardNumber.replace(/\D/g, '').length !== 16) {
        e.preventDefault(); // Prevent form submission
        alert("Card number should be exactly 16 digits.");
    }

    // Validate expiry date
    const currentYear = new Date().getFullYear();
    const enteredYear = parseInt(expiryDateInput.value.split('/')[1], 10);

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
        e.preventDefault(); // Prevent form submission
        alert("Invalid expiry date. Please use the format MM/YY.");
    } else if (expiryDate.replace(/\D/g, '').length !== 4) {
        e.preventDefault(); // Prevent form submission
        alert("Expiry date should be exactly 4 digits (MMYY).");
    } else if (enteredYear < currentYear % 100) {
        e.preventDefault(); // Prevent form submission
        alert("Invalid expiry date.");
    }

    if (!cvv.trim()) {
        e.preventDefault(); // Prevent form submission
        alert("Please enter the CVV.");
    } else if (cvv.replace(/\D/g, '').length !== 3) {
        e.preventDefault(); // Prevent form submission
        alert("CVV should be exactly 3 digits.");
    } else if (cvv.length > 3) {
        e.preventDefault(); // Prevent form submission
        alert("Please enter a valid CVV code.");
    }

    // Display confirmation message
    if (!e.defaultPrevented) {
        e.preventDefault();
        alert(`You've booked 1 ticket for ${movie.title} for a total of $${movie.price.toFixed(2)}.`);
    }
});

// Automatically add a slash in the expiry date field
expiryDateInput.addEventListener("input", function () {
    const value = this.value.replace(/\D/g, '');

    if (value.length > 2) {
        this.value = value.slice(0, 2) + '/' + value.slice(2);
    } else {
        this.value = value;
    }
});
