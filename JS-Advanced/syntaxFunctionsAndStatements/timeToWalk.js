function timeToWalk(steps, footprintInMeters, speed){
    let distanceInMeters = (steps*footprintInMeters);
    let speedInMetersPerSec = speed/3.6;
    let timeInSeconds = distanceInMeters/speedInMetersPerSec;
    let additionalTime = Math.floor(distanceInMeters/500);

    let totalTimeInSec = timeInSeconds+additionalTime*60;

let calcSecs = totalTimeInSec%60;
let calcMinutes = Math.floor(totalTimeInSec/60);
let calcHours = Math.floor(totalTimeInSec/3600);
let seconds= calcSecs<10 ? "0"+calcSecs.toFixed(0) : calcSecs.toFixed(0);
let minutes= calcMinutes<10 ? "0"+calcMinutes.toFixed(0) : calcMinutes.toFixed(0);
let hours=calcHours<10 ? "0"+calcHours.toFixed(0) : calcHours.toFixed(0);

    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
