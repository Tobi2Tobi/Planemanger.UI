import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plane } from 'src/app/models/Plane';
import { PlaneService } from 'src/app/services/plane.service';

@Component({
  selector: 'app-edit-plane',
  templateUrl: './edit-plane.component.html',
  styleUrls: ['./edit-plane.component.css'],
})
export class EditPlaneComponent implements OnInit {
  @Input() plane?: Plane;
  @Output() planesUpdated = new EventEmitter<Plane[]>();

  constructor(private planeService: PlaneService) {}

  ngOnInit(): void {}

  updatePlane(plane: Plane) {
    this.planeService
      .updatePlane(plane)
      .subscribe((planes: Plane[]) => this.planesUpdated.emit(planes));
  }

  deletePlane(plane: Plane) {
    this.planeService
      .deletePlane(plane)
      .subscribe((planes: Plane[]) => this.planesUpdated.emit(planes));
  }

  createPlane(plane: Plane) {
    this.planeService
      .createPlane(plane)
      .subscribe((planes: Plane[]) => this.planesUpdated.emit(planes));
  }
}
