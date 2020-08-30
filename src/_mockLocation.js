import * as  Location from 'expo-location';

const tenMetersWithDegress = 0.0001;

const getLocation = incremnent => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 106.6702763 + incremnent * tenMetersWithDegress,
            latitude: 10.768280 + incremnent + tenMetersWithDegress
        }
    }
}

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter ++;
}, 1000)