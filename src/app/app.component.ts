import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  data: any;
  firstvalue!: number;
  secodvalue!: number;
  errorMessage : boolean = false;

  @ViewChild('myForm') myFormobj!: any;
  
  updateValue(param : any){
     const inputName = param.target.name;
     const inputValue = parseFloat(param.target.value)
     const totalValue = this.firstvalue + this.secodvalue;
     if(inputName === "firstValue"){
       if(inputValue < 0 || inputValue > 100 )return;
       this.myFormobj.form.patchValue({secodvalue : 100 - inputValue});
     }else if (inputName ==="secodvalue"){
      if(inputValue < 0 || inputValue > 100 )return;
      this.myFormobj.form.patchValue({firstvalue : 100 - inputValue})
     }
  }

  createChart(){

    this.data = {
      labels: ['A', 'B'],
      datasets: [
          {
              data: [this.firstvalue,this.secodvalue],
              backgroundColor: ["#99c94c","#f01961"]
          }
      ]
  };
    this.myFormobj.resetForm()
  }
 
  validationValue(){
    if(this.firstvalue + this.secodvalue > 100){
      this.errorMessage = true
    }else{
      this.errorMessage = false
    }
  }

}