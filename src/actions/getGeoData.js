const apiUrl = "https://ipinfo.io/json";
const locaStorageKey = "mph-widget-geodata";
const localStorage = window.localStorage || {};


const defaultGeo = {
  ip: "75.142.7.153",
  city: "Applegate",
  region: "Oregon",
  country: "US",
  loc: "42.201916681059465, -123.03979072382421",
  org: "Bella Erba",
  postal: "97530",
  timezone: "America/Los_Angeles",
  readme: "https://2829applegate.com"
};

function checkLocalStorage() {
  const testKey = "localStorageTest";
  try {
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}


export default async function() {
  return defaultGeo
  // let isLocalStorageSupported = checkLocalStorage();
  // let geoData = isLocalStorageSupported && JSON.parse(localStorage.getItem(locaStorageKey));
  //
  // if (geoData) {
  //   return geoData;
  // }
  //
  // try {
  //   const res = await fetch(apiUrl);
  //
  //   if (res.ok) {
  //     geoData = await res.json();
  //   }
  // } catch (err) {
  //   console.warn(err);
  // }
  //
  // geoData = geoData || defaultGeo;
  //
  // const [latStr, lonStr] = geoData.loc.split(",");
  //
  // Object.assign(geoData, {
  //   latitude: parseFloat(latStr),
  //   longitude: parseFloat(lonStr)
  // });
  //
  // if (isLocalStorageSupported) {
  //   localStorage.setItem(locaStorageKey, JSON.stringify(geoData));
  // }
  // return geoData;
}