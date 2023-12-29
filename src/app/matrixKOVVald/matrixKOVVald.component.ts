import { Component, OnInit } from "@angular/core";
import ratios from "./valdRatios.json";
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: "matrix-kovvald",
  templateUrl: "./matrixKOVVald.component.html",
  styleUrls: ["./matrixKOVVald.component.css"]
})
export class KOVValdComponent implements OnInit { 

  

  vallanimi: any;
  ratioData: any;
  kovValdArray: any = [];
  oigeKirje: any;
  akmF: any;
  ikkF: any;

  constructor() { //Siin toob sisse
    this.vallanimi = environment.omvNimi;
    localStorage.setItem("vallanimi", this.vallanimi);
    this.ratioData = ratios;
    }

    ReadMore:boolean = true
    visible:boolean = false
    onclick()
    {
      this.ReadMore = !this.ReadMore;
      this.visible = !this.visible
    }

    ReadMore2:boolean = true
    visible2:boolean = false
    onclick2()
    {
      this.ReadMore2 = !this.ReadMore2;
      this.visible2 = !this.visible2
    }
  
    ngOnInit() {

    for (let key in ratios.ratiosVald) {
      if (ratios.ratiosVald.hasOwnProperty(key)) {
        this.kovValdArray.push(ratios.ratiosVald[key]);
      }
    }
    //console.log("vallaArray", this.kovValdArray);  // Sisaldab kogu faili...
    this.filterValdKirjet();

    }

    filterValdKirjet(){
      this.oigeKirje= this.kovValdArray.filter(e=>{
        return e.VALD === this.vallanimi
      })  
      
      console.log("vallaKirje: ", this.oigeKirje); 

      this.oigeKirje.forEach(obj=> {
        console.log(obj.AKM_Median);
        localStorage.setItem("vallasuhtarvAKM", obj.AKM_Median); //a
        this.akmF = parseFloat(obj.AKM_Median);
      });

      this.oigeKirje.forEach(obj=> {
        console.log(obj.IKK_Median);
        localStorage.setItem("vallasuhtarvIKK", obj.IKK_Median); //a
        this.ikkF = parseFloat(obj.IKK_Median);
      });

    }


    //arrayObject = [
    //  'first array value',
   //   'second array value',
    //  'third array value'
    //  ]  
    
    //object () {  
    //console.log("arrayObject:", this.arrayObject);
    //}


    //  dataaa = { "languages":[{"1":"Hindi"},{"2":"English"},{"3":"Metallica"}], "status":"200" };

    //  getKey(el){
    //    return Object.keys(el)[0];
    //  }
      
    //  getValue(el){
    //    return el[this.getKey(el)];
     // }  



}