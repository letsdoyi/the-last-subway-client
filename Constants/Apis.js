export { googleAPI };
const googleAPI = {
  directions: {
    URL: 'https://maps.googleapis.com/maps/api/directions/json',
    MODE: 'transit',
    TRANSIT_MODE: 'subway',
    LANGUAGE: 'ko',
  },
  geocode: {
    URL: 'https://maps.googleapis.com/maps/api/geocode/json',
    LANGUAGE: 'ko',
  },
};
