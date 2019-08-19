import { Injectable } from '@angular/core';
import { Department } from './models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  
  private departmens: Department[] = [
    {id:1, name: "Clothing"},
    {id:2, name: "Books"},
    {id:3, name: "Eletronics"},
    {id:4, name: "Computes"},
  ]

  constructor() { }
  getDepartments(): Department[]{
    return this.departmens;
  }
  private nextID:number = 5 
  addDepartments(department: Department){
    this.departmens.push({id:this.nextID++,...department });
  }
  getDepartmentById(id:number): Department {
    return this.departmens.find((d) =>d.id == id);
  }
}
