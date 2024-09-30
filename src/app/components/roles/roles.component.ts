import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
// string, number,boolean, date, object, array, null, undefined
firstName: string = "Angular Tutorial";
angularVersion = "Version18";
version: number = 18;
isActive : boolean = false;
currentDate: Date = new Date();
inputType: string = "radio";
selectedState: string = "";

showWelcomeAlert(){
  alert('welcome to my world');
}
showMessage(message: string){
  alert(message);
}
}
