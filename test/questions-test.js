var chai = require('chai');
var expect = chai.expect;
var questions = require('../questions');


describe('questions', function() {
    describe('#checkBook', function() {
        it('should return combined book line', function() {

            var books = ["The Hobbit", "A Brief History of Time", "The Universe in a Nutshell", "Teach Like A Champion"];

            var result = questions.checkBook(books);

            var expectedResult = "The Hobbit";

            expect(result).to.equal(expectedResult);
        })
    })

    describe('#checkSongs', function() {
        it('return looped songs', function() {

            var songs = ["Call Me Maybe", "Pacabel's Cannon in D", "Smells Like Teen Spirit"];

            var result = questions.checkSongs(songs);

            var expectedResult = "Call Me Maybe"
            "Pacabel's Cannon in D"
            "Smells Like Teen Spirit";

            expect(result).to.equal(expectedResult);
        })
    })

    describe('#checkCars', function() {
        it('return combined cars and riders', function() {

            var cars = ["Chevy Tahoe", "Ford Fiesta", "Toyota Yaris", "Honda Fit"];

            var riders = ["Kelley", "Steve", "Georgio", "Fabio"]

            var result = questions.checkCars(riders, cars);

            var expectedResult = "Kelley drives a Chevy Tahoe"
            "Steve drives a Ford Fiesta"
            "Georgio drives a Toyota Yaris"
            "Fabio drives a Honda Fit";

            expect(result).to.equal(expectedResult);
        })
    })

    describe('#movies1', function() {
        it('return all movies', function() {

            var trilogies = [
                ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"],
                ["The Empire Strikes Back", "Return of the Jedi", "A New Hope"],
                ["Back to the Future", "Back to the Future II", "Back to the Future III"],
                ["The Hunger Games", "Catching Fire", "Mockingjay"],
                ["The Matrix", "The Matrix Reloaded", "The Matrix Revolutions"],
                ["Harry Potter and the Sorcerers Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Askaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Half Blood Prince", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Deathly Hollows"],
                ["The Hitchhikers Guide to the Galaxy", "The Restaurant at the End of the Universe", "Life, the Universe and Everything", "So Long, and Thanks for All the Fish", "Mostly Harmless", "And Another Thing..."]
            ];

            var result = questions.movies1(trilogies);

            var expectedResult = 'The Fellowship of the Ring\n'
            'The Two Towers\n'
            'The Return of the King\n'
            'The Empire Strikes Back\n'
            'Return of the Jedi\n'
            'A New Hope\ n'
            'Back to the Future\n'
            'Back to the Future II\n'
            'Back to the Future III\n'
            'The Hunger Games\n'
            'Catching Fire\n'
            'Mockingjay\n'
            'The Matrix\n'
            'The Matrix Reloaded\n'
            'The Matrix Revolutions\n'
            'Harry Potter and the Sorcerers Stone\n'
            'Harry Potter and the Chamber of Secrets\n'
            'Harry Potter and the Prisoner of Askaban\n'
            'Harry Potter and the Goblet of Fire\n'
            'Harry Potter and the Half Blood Prince\n'
            'Harry Potter and the Order of the Phoenix\n'
            'Harry Potter and the Deathly Hollows\n'
            'The Hitchhikers Guide to the Galaxy\n'
            'The Restaurant at the End of the Universe\n'
            'Life, the Universe and Everything\n'
            'So Long, and Thanks for All the Fish\n'
            'Mostly Harmless\nAnd Another Thing...';

            expect(result).to.equal(expectedResult);
        })
    })
})
