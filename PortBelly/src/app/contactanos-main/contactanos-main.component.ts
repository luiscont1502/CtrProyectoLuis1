import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contactanos-main',
  templateUrl: './contactanos-main.component.html',
  styleUrls: ['./contactanos-main.component.css']
})
export class ContactanosMainComponent implements OnInit {
center={lat:-0.932474, lng:-78.619912}
zoom=15
display?:google.maps.LatLngLiteral
position={
  lat:-0.932474, lng:-78.619912
};

label={
  color:'red',
  text:'Marcador'
}
  constructor() { }

  ngOnInit(): void {

  }

}
