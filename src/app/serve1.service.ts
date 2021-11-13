import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serve1Service {
  public employees=[
    {"name":"Roshum","id":194,"dept":"IT"},
    {"name":"Grishma","id":587,"dept":"ECE"},
    {"name":"Yunas","id":849,"dept":"CSE"}
  ]
getEmployee(){
  return this.employees
}

  constructor() { }
}
