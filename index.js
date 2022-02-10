const customer = [
    {
        name: "Md Pervej Hossain",
        birthYear: 2000,
        currentYear: 2022,
        district: "Dhaka",
        postNo: 1200,
        priority: 2,
    },
    {
        name: "Jenifer",
        birthYear: 1999,
        currentYear: 2022,
        district: "Rajshahi",
        postNo: 1211,
        priority: 1,
    },
    {
        name: "Bablu",
        birthYear: 2002,
        currentYear: 2022,
        district: "Borisal",
        postNo: 1212,
        priority: 3,
    },
];


const prioritySorted = (data) => {
    for (let i = 0; i < data.length; i++) {
        for (let k = 0; k < data.length; k++) {
            if (data[i].priority < data[k].priority) {
                let temp = data[i];
                data[i] = data[k];
                data[k] = temp;
            }
        }
    }
    return data;
};


const cardDistribution = (data) => {
    let list = [];
    let serialNo = "00000";

    for (let i = 0; i < data.length; i++) {
        let customers = {};
        let cardNumber = "";


        // district name first two charecter in capital letter
        cardNumber += data[i].district.toUpperCase().split("").slice(0, 2).join("");

        // current year last two digit
        cardNumber += data[i].currentYear.toString().split("").splice(0 - 2).join("");

        // postal number first two digit
        cardNumber += data[i].postNo.toString().split("").splice(0, 2).join("");

        // birth year adding
        cardNumber += data[i].birthYear.toString();
        cardNumber += serialNo + (i + 1);



        // generating serial number
        customers.cardNumber = cardNumber;
        if (parseInt(cardNumber.split("").splice(0 - 1)) % 2 === 0) {
            customers.gift = "R";
        } else {
            customers.gift = "W";
        }
        customers.priority = data[i].priority;
        list.push(customers);
    }
    const element = prioritySorted(list);
    return element;

};

cardDistribution(customer);
console.log(cardDistribution(customer));
