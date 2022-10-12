import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { employe } from 'src/app/models/employe-modele';
import { EmployeService } from 'src/app/services/employe/employe.service';


@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
myemployee =new employe();
linkfb:SafeResourceUrl;
link:SafeResourceUrl;

  constructor(private ac:ActivatedRoute,private employeeServ:EmployeService,public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.ac.paramMap.subscribe(next=>this.employeeServ.getEmployeeById(Number(next.get('id'))).subscribe(res=>
      {this.myemployee=res,
       
      this.link=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?key=AIzaSyDX-nRJ8JxhkpsCsD_-7qGO1vgGtRfMWG4&q="+res.adresse)
      console.log("employe"+Object.values(this.myemployee))
  //this.linkfb=this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:4200/home/listFournisseur/"+res.idFournisseur)
      }));
  }

}
