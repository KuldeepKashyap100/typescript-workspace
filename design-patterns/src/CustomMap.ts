/// <reference types="@types/google.maps" />

export interface Mappale {
    location: {
        longitude: number;
        latitude: number;
    };
    markerContent(): string,
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(elementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1,
            center: {
                lng: 0,
                lat: 0
            }
        });
    }
    addMarker(mappale: Mappale): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappale.location.latitude,
                lng: mappale.location.longitude
            }
        });

        const infoWindow = new google.maps.InfoWindow({
            content: mappale.markerContent()
        });

        marker.addListener("click", () => {
            infoWindow.open(this.googleMap, marker);
        });
    }
}