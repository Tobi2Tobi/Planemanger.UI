import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Plane } from './models/Plane';
import { PlaneService } from './services/plane.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PlaneManager';
  planes: Plane[] = [];
  planeToEdit?: Plane;

  constructor(private planeService: PlaneService) {}
  //constructor(private client:HttpClient) {}

  ngOnInit(): void {
      this.planeService
      .getPlanes()
      .subscribe((result: Plane[]) => (this.planes = result));
  }

  updatePlaneList(planes: Plane[]) {
    this.planes = planes;
  }

  initNewPlane() {
    this.planeToEdit = new Plane();
  }

  editPlane(plane: Plane) {
    this.planeToEdit = plane;
  }
}
