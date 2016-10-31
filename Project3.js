/**
 * Created by Kenzie on 10/17/2016.
 */
/**
 *   @author Bonter, Brian (Bonterb@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Project 3  || created: 10.20.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let movieRating,avgRating,totalRating,counter;
const MAX_RATING = 5

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse ===1){
        setMovieRating();
        setTotalRating();
        //setContinue();
        //setCounter();
        setContinueResponse();
        setAvgRating();
        return main();
    }
    setAvgRating();
}

main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            setContinueResponse();
            return main();
        }
    } else {
        continueResponse = 1;
    }
}

function setMovieRating() {
    let answered = 0
    let counter = 0
    const MAX_TRIES = 3
    if (movieRating != null && movieRating <= MAX_RATING) {
        movieRating++;
    } else {
        movieRating = 1;
    }
    while (counter < MAX_TRIES && answered != 1) {
        movieRating = PROMPT.question(`\nPlease enter rating`);
        if (movieRating < 0 || movieRating > MAX_RATING){
            console.log(`\n invalid rating`);
            counter++;
            answered = 0;
        }else{
            answered = 1;
        }
    }
}

function setTotalRating() {
    totalRating = movieRating;

}

function setAvgRating() {
    console.log(`\n The average rating for this movie is ${totalRating} `);
}