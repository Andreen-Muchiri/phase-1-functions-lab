// Code your solution in this file!
//first part of test
function distanceFromHqInBlocks (distance){
    return Math.abs(distance-42)
};

//second part of test,distanceFromHqInFeet
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
};

//third part of test distanceTravelledInFeet
function distanceTravelledInFeet(start,destination){
    return Math.abs(start-destination)*264;
}

//fourth part of test calculatesFarePrice
function calculatesFarePrice(start,destination){
    let travelled = distanceTravelledInFeet(start,destination);
        if(travelled <= 400){
        return 0;
        }
        else if((travelled > 400) && (travelled < 2000)){
           return ((travelled-400)*0.02);
        }
        else if((travelled > 2000) && (travelled < 2500)){
        return 25;
        }
        else if (travelled >2500){
        return 'cannot travel that far';
        }
    };




