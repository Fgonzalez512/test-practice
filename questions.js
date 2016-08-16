console.log("--------------");
// question 1
var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];
console.log(books[0], " and ", books[2]);
console.log("--------------");

// question 2
var songs = ["Call Me Maybe", "Pacabel's Cannon in D", "Smells Like Teen Spirit"]
console.log("--------------");

function loopArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
loopArray(songs);
console.log("--------------");

// question 3
var cars = ["Chevy Tahoe", "Ford Fiesta", "Toyota Yaris", "Honda Fit"];
var riders = ["Kelly", "Steve", "Georgio", "Fabio"];

for (var i = 0, j = 0; i < riders.length, j < cars.length; i++, j++) {
    console.log(riders[i] + " drives a " + cars[j]);
};
console.log("--------------");

// question 4
var trilogies = [
    ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
    ["The Empire Strikes Back", "Return of the Jedi", "A New Hope"],
    ["Back to the Future", "Back to the Future II", "Back to the Future III"],
    ["The Hunger Games", "Catching Fire", "Mockingjay"],
    ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
    ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
    ["The Hitchhiker's Guide to the Galaxy", "The Restaurant at the End of the Universe", "Life, the Universe and Everything", "So Long, and Thanks for All the Fish", "Mostly Harmless", "And Another Thing..."]
];

function movies1(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
};
movies1(trilogies);
console.log("--------------");

function movies2(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = array[i].length - 1; j < array[i].length; j++) {
            console.log(array[i][j]);
        }
    }
};
movies2(trilogies);
console.log("--------------");

function movies3(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < 1; j++) {
            console.log(array[i][j]);
        }
    }
};
movies3(trilogies);
console.log("--------------");

function movies4(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j = j += 2) {
            console.log(array[i][j]);
        }
    }
};
movies4(trilogies);
console.log("--------------");

// Question 5 - Object Access
var user = {
    name: "Jenny Appleseed",
    phone: "555-656-2323",
    email: "j.appleseed@appleseedanddaughters.com",
    address: "123 Main street, anytown USA"
};

var user2 = {
    name: "Kerri Appleseed",
    phone: "555-456-3344",
    email: "k.appleseed@appleseedanddaughters.com",
    address: "123 main street, anytown USA"
};

var user3 = {
    name: "Sally Appleseed",
    phone: "555-34-663",
    email: "s.appleseed@appleseedanddaughters.com",
    address: "123 main street, anytown USA"
};

function symbol(email) {
    var email = user.email;
    if (email.includes("@")) {
        return true;
    } else {
        return false;
    }
};
console.log(symbol(user.email));

function phoneCheck(phone) {
    if (user.phone.length === 12) {
        return true;
    } else {
        return false;
    }
};
console.log(phoneCheck(user.phone));

function lastName(name) {
    var last = user.name;
    if (last.includes(" ")) {
        return true;
    } else {
        return false;
    }
};
console.log(lastName(user.name));
console.log("--------------");

// go fish goes here- do later
// ----------------------------end go fish

// Nested Object Access
var library = {
    city: "San Francisco",
    name: "SF Public",
    bestBook: {
        title: "JavaScript for Dummies",
        company: {
            name: "BookCo",
            employees: {
                writers: [{
                    firstName: "Bob",
                    lastName: "Marley",
                }],
                publisher: {
                    firstName: "Fred",
                    lastName: "Bambam"
                }
            }
        }
    }
};
console.log(library.city);
console.log(library.name);
console.log(library.bestBook);
console.log(library.bestBook.title);
console.log(library.bestBook.company.name);
console.log(library.bestBook.company.employees.publisher.firstName + " " + library.bestBook.company.employees.publisher.lastName);
console.log("--------------");

// Arrays in Objects
var cremeBrulee = {
    ingredients: [
        "eggs",
        "heavy cream",
        "vanilla pods"
    ],
    cookware: [
        "mixing bowl",
        "whisk",
        "ramekins",
        "oven",
        "measuring cups"
    ]
};
for (var i = 0; i < cremeBrulee.ingredients.length; i++) {
    console.log(cremeBrulee.ingredients[i]);
};
for (var i = 0; i < cremeBrulee.cookware.length; i++) {
    console.log(cremeBrulee.cookware[i]);
};
console.log(cremeBrulee.ingredients[0]);
console.log(cremeBrulee.cookware[2]);
cremeBrulee.ingredients.push("sugar");
console.log(cremeBrulee.ingredients);
cremeBrulee.ingredients[0] = "egg yolks"
console.log(cremeBrulee.ingredients[0]);
console.log("--------------");

// Objects in Arrays
console.log("--------------");
var postOne = {
    user: "Tammy",
    message: "I did it!"
}
var postTwo = {
    user: "Tom",
    message: "seriously?"
}
var postThree = {
    user: "Zorro",
    message: "why don't people just get it!"
}
var postFour = {
    user: "Jorge",
    message: "good day today"
}
var postFive = {
    user: "Victoria",
    message: "yay!"
}
var postSix = {
    user: "Bobo",
    message: "Last night was the most amazing afternoon"
}

var posts = []
posts[0] = postOne;
posts[1] = postTwo;
posts[2] = postThree;
posts[3] = postFour;
posts[4] = postFive;
posts[5] = postSix;

for (var i = 0; i < posts.length; i++) {
    console.log(posts[i].message);
}
for (var i = 0; i < posts.length; i++) {
    console.log(posts[i].user);
}
console.log("--------------");
for (var i = 1; i < posts.length; i += 2) {
    console.log(posts[i].message);
}
postSix.message = "Last night was the most amazing afternoon!"
console.log(postSix.message);
console.log("--------------");
// Objects in Arrays in Objects - come back to it
//  ------------------------

// Arrays in Objects in Arrays in Objects
var minestroneSoup = {
    materials: [{
        ingredients: [
            "olive oil",
            "vegetable stock",
            "onions",
            "celery",
            "salt",
            "pepper",
            "tomatoes",
            "garlic",
            "basil",
            "oregano",
            "carrots",
            "green beans",
            "kidney beans",
        ]
    }, {
        cookware: [
            "cooking pot",
            "cooking spoon",
        ]
    }],
    quantities: [{
        teaspoons: [{
            "olive oil": 5
        }, {
            "salt": 1
        }, {
            "pepper": 1
        }, {
            "basil": 2
        }, {
            "oregano": 2
        }, {
            "garlic": 2
        }]
    }, {
        cups: [{
            "vegetable stock": 2
        }, {
            "kidney beans": 1
        }, {
            "green beans": 1
        }]
    }, {
        whole: [{
            "onions": 2
        }, {
            "celery": 1
        }, {
            "carrots": 2
        }, {
            "tomatoes": 2
        }]
    }, ]
};

console.log(minestroneSoup.materials[0].ingredients);
console.log(minestroneSoup.materials[1].cookware);
console.log(minestroneSoup.quantities);
console.log(minestroneSoup.quantities[0].teaspoons);
console.log(minestroneSoup.quantities[2].whole);
minestroneSoup.quantities[1].cups[3] = {
    "elbowPasta": 1
}
console.log(minestroneSoup.quantities[1].cups);
console.log("--------------");

// Mind-Bending Access

var crm = {
    people: [{
        id: 2,
        firstName: "Savannah",
        lastName: "Clementina",
        employments: []
    }, {
        id: 3,
        firstName: "Elyse",
        lastName: "Jensen",
        employments: [{
            companyId: 142,
            title: "Chief Communications Consultant"
        }]
    }, {
        id: 4,
        firstName: "Frieda",
        lastName: "Tess",
        employments: [{
            companyId: 31,
            title: "Dynamic Data Specialist"
        }]
    }, {
        id: 6,
        firstName: "Elise",
        lastName: "Camylle",
        employments: [{
            companyId: 57,
            title: "Regional Applications Designer"
        }, {
            companyId: 9,
            title: "Internal Mobility Executive"
        }]
    }, {
        id: 8,
        firstName: "Francis",
        lastName: "Arlo",
        employments: []
    }, {
        id: 9,
        firstName: "Clementina",
        lastName: "Geraldine",
        employments: [{
            companyId: 6,
            title: "Direct Response Agent"
        }, {
            companyId: 3,
            title: "Investor Metrics Officer"
        }]
    }, {
        id: 10,
        firstName: "Jeanie",
        lastName: "Annie",
        employments: []
    }, {
        id: 11,
        firstName: "Myra",
        lastName: "Sylvester",
        employments: [{
            companyId: 57,
            title: "Direct Directives Officer"
        }]
    }, {
        id: 12,
        firstName: "Magdalen",
        lastName: "Wendy",
        employments: [{
            companyId: 9,
            title: "Product Operations Officer"
        }, {
            companyId: 3,
            title: "Customer Paradigm Designer"
        }]
    }, {
        id: 16,
        firstName: "Eloisa",
        lastName: "Aubree",
        employments: [{
            companyId: 89,
            title: "Internal Configuration Producer"
        }, {
            companyId: 31,
            title: "Regional Branding Administrator"
        }]
    }, {
        id: 17,
        firstName: "Rozella",
        lastName: "Walter",
        employments: []
    }, {
        id: 18,
        firstName: "Brent",
        lastName: "Shannon",
        employments: [{
            companyId: 31,
            title: "District Implementation Developer"
        }, {
            companyId: 57,
            title: "District Factors Designer"
        }]
    }, {
        id: 19,
        firstName: "Jaren",
        lastName: "Easter",
        employments: [{
            companyId: 142,
            title: "District Communications Director"
        }]
    }, {
        id: 20,
        firstName: "Jaqueline",
        lastName: "Genoveva",
        employments: []
    }, {
        id: 22,
        firstName: "Darby",
        lastName: "Della",
        employments: [{
            companyId: 57,
            title: "Principal Branding Strategist"
        }]
    }, {
        id: 27,
        firstName: "Jane",
        lastName: "Otto",
        employments: []
    }, ],
    companies: {
        0: "Nicolas and Sons",
        57: "Mueller LLC",
        2: "Mohr, King and Gleason",
        3: "Grimes Inc",
        142: "Schmidt-Rolfson",
        5: "Shanahan, Altenwerth and Nikolaus",
        6: "Dickens, Blanda and Bosco",
        31: "Nikolaus Inc",
        89: "Rempel, Berge and Bogan",
        9: "Steuber, Wisozk and Gorczany"
    }
};
