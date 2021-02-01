<template>
  <Page actionBarHidden="true" backgroundSpanUnderStatusBar="false">
    <StackLayout height="100%" width="100%">
      <MapView
        iosOverflowSafeArea="true"
        :latitude="latitude"
        :longitude="longitude"
        :zoom="zoom"
        :bearing="bearing"
        :tilt="tilt"
        height="100%"
        @mapReady="onMapReady"
        @markerSelect="onMarkerSelect"
        @markerInfoWindowTapped="onMarkerInfoWindowTapped"
      ></MapView>
    </StackLayout>
  </Page>
</template>

<script>
const mapsModule = require("nativescript-google-maps-sdk");
const geolocation = require("nativescript-geolocation");
import { ImageSource } from "@nativescript/core/image-source";
import { Image } from "@nativescript/core/ui/image";
import { isAndroid, isIOS, device, screen } from "@nativescript/core/platform";
export default {
  data() {
    return {
      latitude: "",
      longitude: "",
      zoom: "",
      bearing: "",
      tilt: "",
      mapView: null,
      isMounted: false,
      markers: [
        {
          name: "Cà phê Ông Bầu 135 Bờ Bao Tân Thắng - Q.Tân Phú HCM",
          address:
            "135 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú, Thành phố Hồ Chí Minh, Vietnam",
          city: "Tp.hcm",
          state: "",
          zip: "70000",
          type: "coffee shop",
          latitude: "10.8001502",
          longitude: "106.6163686",
        },
        {
          name: "Cà phê Ông Bầu Ông Bầu 44B Thoại Ngọc Hầu",
          address: "44B Thoại Ngọc Hầu, P. Hòa Thạnh, Q. Tân Phú, Hồ Chí Minh",
          city: "Tp.hcm",
          state: "",
          zip: "70000",
          type: "coffee shop",
          latitude: "10.780770",
          longitude: "106.632150",
        },
        {
          name: "Cà phê Ông Bầu 2 Ni Sư Huỳnh Liên - Q.Tân Bình HCM",
          address: "2 Ni Sư Huỳnh Liên, P. 10, Q. Tân Bình, Hồ Chí Minh",
          city: "Tp.hcm",
          state: "",
          zip: "70000",
          type: "coffee shop",
          latitude: "10.783260",
          longitude: "106.648582",
        },
        {
          name: "Cà phê Ông Bầu Ông Bầu PMC Hồng Lạc",
          address: "306 Hồng Lạc, P. 11, Q. Tân Bình, Hồ Chí Minh",
          city: "Tp.hcm",
          state: "",
          zip: "70000",
          type: "coffee shop",
          latitude: "10.787230",
          longitude: "106.644360",
        },
      ],
    };
  },
  mounted() {
    let that = this;
    geolocation.isEnabled().then(
      function (isEnabled) {
        if (!isEnabled) {
          geolocation
            .enableLocationRequest(true, true)
            .then(
              () => {
                that.isMounted = true;
                if (isAndroid && that.mapView) {
                  let uiSettings = that.mapView.gMap.getUiSettings();
                  uiSettings.setMyLocationButtonEnabled(true);
                  that.mapView.gMap.setMyLocationEnabled(true);
                }
                geolocation
                  .getCurrentLocation({
                    timeout: 20000,
                  })
                  .then((location) => {
                    if (!location) {
                      console.log("Failed to get location!");
                    } else {
                      that.latitude = location.latitude;
                      that.longitude = location.longitude;
                      that.zoom = 18;
                      that.bearing = 0;
                      that.altitude = 0;
                    }
                  });
              },
              (e) => {
                console.log("Error: " + (e.message || e));
              }
            )
            .catch((ex) => {
              console.log("Unable to Enable Location", ex);
            });
        } else {
          that.isMounted = true;
          if (isAndroid && that.mapView) {
            let uiSettings = that.mapView.gMap.getUiSettings();
            uiSettings.setMyLocationButtonEnabled(true);
            that.mapView.gMap.setMyLocationEnabled(true);
          }
          geolocation
            .getCurrentLocation({
              timeout: 20000,
            })
            .then((location) => {
              if (!location) {
                console.log("Failed to get location!");
              } else {
                that.latitude = location.latitude;
                that.longitude = location.longitude;
                that.zoom = 18;
                that.bearing = 0;
                that.altitude = 0;
              }
            });
        }
      },
      function (e) {
        console.log("Error: " + (e.message || e));
      }
    );
  },
  methods: {
    onMapReady(args) {
      this.mapView = args.object;
      var gMap = this.mapView.gMap;
      this.mapView.settings.myLocationEnabled = true;
      this.mapView.settings.myLocationButtonEnabled = true;
      this.mapView.settings.compassEnabled = true;
      this.mapView.settings.zoomGesturesEnabled = true;
      if (isAndroid && this.isMounted && geolocation.isEnabled()) {
        let uiSettings = gMap.getUiSettings();
        uiSettings.setMyLocationButtonEnabled(true);
        gMap.setMyLocationEnabled(true);
      }
      if (isIOS) {
        gMap.myLocationEnabled = true;
        gMap.settings.myLocationButton = true;
        this.mapView.on("myLocationTapped", (event) => {
          geolocation.isEnabled().then((enabled) => {
            if (enabled) {
              geolocation
                .getCurrentLocation({
                  maximumAge: 5000,
                  timeout: 20000,
                })
                .then((location) => {
                  gMap.animateToLocation(location);
                });
            }
          });
        });
      }
      this.mapView.infoWindowTemplate = `
        <GridLayout rows="auto,*" columns="*" width="340" height="160">
          <Label text="{{title}}" textAlignment="center" row="0"  textWrap="true" color="black"  fontSize="18" />
          <GridLayout rows="*,auto" columns="100,*" row="1">
            <Image src="~/assets/images/logo-subcri.png" col="0" row="0"/>
            <StackLayout col="1" row="0" marginLeft="10">
              <Label text="{{address}}" textWrap="true" color="black"  fontSize="18" />
              <Label text="{{type}}" textWrap="true" color="black"  fontSize="12" />
              <Label text="{{city}}" textWrap="true" color="black"  fontSize="18" />
            </StackLayout>
          </GridLayout>
        </GridLayout>
      `;

      this.markers.forEach((element) => {
        var marker = new mapsModule.Marker();
        marker.position = mapsModule.Position.positionFromLatLng(
          element.latitude,
          element.longitude
        );

        marker.title = element.name;
        marker.city = element.city;
        marker.type = element.type;
        marker.address =
          element.address +
          " " +
          element.city +
          "," +
          element.state +
          " " +
          element.zip;

        let imageSource = ImageSource.fromFileSync("~/assets/images/favicon.ico");
        const icon = new Image();
        icon.imageSource = imageSource;
        marker.icon = icon;

        this.mapView.addMarker(marker);
      });
    },
    onMarkerSelect() {},
    onMarkerInfoWindowTapped() {},
  },
};
</script>

<style scoped>
</style>