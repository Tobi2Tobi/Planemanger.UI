import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Plane } from '../models/Plane';

@Injectable({
  providedIn: 'root',
})
export class PlaneService {
  private url = 'plane';

  constructor(private http: HttpClient) {}

  public getPlanes(): Observable<Plane[]> {
    return this.http.get<Plane[]>('https://localhost:7283/api/plane');
  }

  public updatePlane(plane: Plane): Observable<Plane[]> {
    return this.http.put<Plane[]>(
      `${environment.apiUrl}/${this.url}`,
      plane
    );
  }

  public createPlane(plane: Plane): Observable<Plane[]> {
    return this.http.post<Plane[]>(
      `${environment.apiUrl}/${this.url}`,
      plane
    );
  }

  public deletePlane(plane: Plane): Observable<Plane[]> {
    return this.http.delete<Plane[]>(
      `${environment.apiUrl}/${this.url}/${plane.id}`
    );
  }
}
