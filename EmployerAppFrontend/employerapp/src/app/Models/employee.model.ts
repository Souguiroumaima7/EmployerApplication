export class Employee {
    id: number;
    name: string;
    department: string;
    position: string;
    email: string;
    phone: string;
   
    constructor(
       id: number,
       name: string,
       department: string,
       position: string,
       email: string,
       phone: string
    ) {
       this.id = id;
       this.name = name;
       this.department = department;
       this.position = position;
       this.email = email;
       this.phone = phone;
    }
   }