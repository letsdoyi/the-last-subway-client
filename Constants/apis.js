export { GOOGLE_API };
const GOOGLE_API = {
  DIRECTIONS: {
    URL: 'https://maps.googleapis.com/maps/api/directions/json',
    MODE: { TRANSIT: 'transit' },
    TRANSIT_MODE: { SUBWAY: 'subway' },
    LANGUAGE: 'en',
    TRANSIT_ROUTING_PREFERENCE: {
      FEWER_TRANSFERS: 'fewer_transfers',
      LESS_WALKING: 'less_walking',
    },
  },
  GEOCODE: {
    URL: 'https://maps.googleapis.com/maps/api/geocode/json',
    LANGUAGE: 'en',
  },
};
