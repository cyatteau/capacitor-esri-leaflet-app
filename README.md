# Capacitor Esri Leaflet App

## Description

This is a sample mobile application that shows how to load ArcGIS Vector basemap layers with Esri Leaflet and Capacitor.

![image](https://user-images.githubusercontent.com/112517097/210816243-379bac90-4251-4820-8a16-bfeb40332afa.png)

## Visuals: The Different Vector Basemap Layers

<table>
  <tr>
    <td>
      <h5>ArcGIS Streets</h5>
      <img src="https://user-images.githubusercontent.com/112517097/210821479-97a11044-eb24-46e7-9b78-593fd0e10634.png" width="225px"/>
    </td>
    <td>
      <h5>ArcGIS Navigation</h5>
      <img src="https://user-images.githubusercontent.com/112517097/210819571-1a1ffe5a-9170-456f-9b4d-f77cdd6b2795.png" width="225px"/>
    </td>
    <td>
      <h5>ArcGIS Topographic</h5>
      <img src="https://user-images.githubusercontent.com/112517097/210889918-b752ce19-15bc-42b6-8da1-ed2a03f0add2.png" width="225px"/>
    </td>
    <td>
      <h5>ArcGIS Light Gray</h5>
      <img src="https://user-images.githubusercontent.com/112517097/210890425-77a64833-5362-4bca-aaa5-fa544dc5c5e0.png" width="225px"/>
    </td>
  </tr>
  <tr>
    <td>
      <h5>ArcGIS Dark Gray</h5>
      <img src="https://user-images.githubusercontent.com/112517097/210891244-9a43e2d5-dc41-4bcc-90bf-116f318f50d1.png" width="225px"/>
    </td>
    <td>
      <h5>ArcGIS Imagery</h5>
      <img src="https://user-images.githubusercontent.com/112517097/210891998-a4195ff6-d2ca-46ba-aabf-114430a782ca.png" width="225px"/>
    </td>
    <td>
      <h5>ArcGIS Charted Territory</h5>
      <img src="https://user-images.githubusercontent.com/112517097/210892384-fea0c4a8-2aa7-4c56-887e-6af2f5cac411.png" width="225px"/>
    </td>
    <td>
      <h5>ArcGIS Colored Pencil</h5>
      <img src="https://user-images.githubusercontent.com/112517097/210892718-6bfe9e8f-296a-4185-a603-46662b58f84e.png" width="225px"/>
    </td>
  </tr>
  <tr>
    <td>
      <h5>ArcGIS Nova</h5>
      <img src="https://user-images.githubusercontent.com/112517097/210893015-2281808c-56ae-40ea-a0d0-1cdbbaa4856c.png" width="225px"/>
    </td>
    <td>
      <h5>ArcGIS Midcentury</h5>
      <img src="https://user-images.githubusercontent.com/112517097/211033169-72118039-15eb-4007-906c-1151e0ca2ecf.png" width="225px"/>
    </td>
    <td>
      <h5>OSM Standard</h5>
      <img src="https://user-images.githubusercontent.com/112517097/211035908-b45a40ef-d3b1-4ee0-9776-733568ca68e4.png" width="225px"/>
    </td>
    <td>
      <h5>OSM Streets</h5>
      <img src="https://user-images.githubusercontent.com/112517097/211037794-4cd85e8a-6cb8-437d-9d75-0b08918b61b8.png" width="225px"/>
    </td>
  </tr>
</table>

## Required Dependencies <a name="dep"></a>

- `npm install leaflet`. Find API Reference info [here](https://www.npmjs.com/package/leaflet).
- `npm install @capacitor/cli`. Installs the Capacitor CLI.
- `npm install @capacitor/core @capacitor/ios @capacitor/android`. Installs required mobile packages.


## Other Requirements <a name="req"></a>

- Sign up for an [ArcGIS Developer Account](https://developers.arcgis.com/sign-up/)
- Get an API Key. Find video instructions [here](https://www.youtube.com/watch?v=StVncn6DLzc).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npx cap init`

Initializes Capacitor in your app.

### `npx cap add ios`

Adds native iOS platform.

### `npx cap add android`

Adds native Android platform.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npx cap sync`

Syncs all the web code into the correct places of the native platforms so the app can be properly displayed. Additionally, it updates the native platforms and installs plugins to access native functionality like camera (when necessary).

### `npx cap open android`

Opens the app in Android Studio. Simply wait until everything loads and deploy your app to a connected (virtual or physical device).

### `npx cap open ios`

Opens the app in Xcode. Be sure to setup an account if you want to deploy your app to a physical device; otherwise running virtually happens automatically.
