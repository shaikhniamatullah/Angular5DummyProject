import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent implements OnInit {
  empname:string;
  empId:string;
  empDesign:string;
  compName:string;
  email:string;
  bsModalRef: BsModalRef;
  employeeName : String;
  employeeId:string;
  employeeEmpDesign:string;
  employeeCompName:string;
  employeeEmail:string;
  modalRef: BsModalRef;
  private fetchEmpData: any =[]; 
  
  constructor(private router: Router,private fetchDataService:FetchDataService,private http: HttpClient,private modalService: BsModalService) { }
  ngOnInit() {
  alert(1)
    this.fectchData();
  }
  
  onClickSubmit(data){
    var formdata :any = {
        compName : data.compName,
        email:data.email,
        empDesign:data.empDesign,
        empid:data.empid,
        empname:data.empname,
        reqId:1
    }
    console.log("data-->",data)
    //if(data.compName != undefined && data.email != undefined && data.empDesign != undefined && data.empid != undefined &&  data.empname != undefined){
      console.log("data--->",data.compName != undefined && data.email != undefined && data.empDesign != undefined && data.empid != undefined &&  data.empname != undefined)
      this.http.post('http://localhost:8080/AjaxCrudOperation/crudOperation',{params:formdata,headers:{'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}}).subscribe(data => {
        //this.book = data;
        console.log("Successfully called-->",data);
        this.empname = "";
        this.empId = "";
        this.empDesign = "";
        this.email = "";
        this.compName = "";
        alert("Successfully Submited!")
        this.fectchData();
      },(Error)=>{
        alert("Error has occured!");
      });
   // }else{
     //alert("Please input the field!");
    //}
  }

  fectchData(){
    var formdata :any = {
      reqId:0
    }
    this.http.post('http://localhost:8080/AjaxCrudOperation/crudOperation',{params:formdata,headers:{'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}}).subscribe(data => {
      //this.book = data;
      this.fetchEmpData = data;
      console.log("fetchEmpData",this.fetchEmpData);
    },(Error)=>{
      this.fetchEmpData =[];
      console.log("Error has occured");
    });

  }
  editEmpData(template,index) {
    console.log("index number",this.fetchEmpData[index]);
    this.employeeName = this.fetchEmpData[index].EmpName;
    this.employeeId = this.fetchEmpData[index].EMPID;
    this.employeeEmpDesign = this.fetchEmpData[index].DESIGNATION;
    this.employeeCompName = this.fetchEmpData[index].CompanyName;
    this.employeeEmail = this.fetchEmpData[index].email;
    this.modalRef = this.modalService.show(template);
  }
  onClickUpdate(){ 
    console.log("updateData-->",this.employeeCompName);
    var formdata :any = {
      compName : this.employeeCompName,
      email:this.employeeEmail,
      empDesign:this.employeeEmpDesign,
      empid:this.employeeId,
      empname:this.employeeName,
      reqId:2
    }
    
      this.http.post('http://localhost:8080/AjaxCrudOperation/crudOperation',{params:formdata,headers:{'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}}).subscribe(data => {
        //this.book = data;
        console.log("Successfully called-->",data);
        alert("Updated Successfully!")
        this.modalRef.hide();
        this.fectchData();
      },(Error)=>{
        alert("Error has occured!");
      });
    
    
  }
  cancelUpdate(){
    this.modalRef.hide();
  }
  deleteEmpData(indexNm){
    console.log("delete data--->",this.fetchEmpData[indexNm].EmpName)
    var formdata :any = {
      compName : this.fetchEmpData[indexNm].CompanyName,
      email:this.fetchEmpData[indexNm].email,
      empDesign:this.fetchEmpData[indexNm].DESIGNATION,
      empid:this.fetchEmpData[indexNm].EMPID,
      empname:this.fetchEmpData[indexNm].EmpName,
      reqId:3
    }
    //if(updateData.employeeCompName != undefined && updateData.employeeEmail != undefined && updateData.employeeEmpDesign != undefined && updateData.employeeId != undefined &&  updateData.employeeName != undefined){
      this.http.post('http://localhost:8080/AjaxCrudOperation/crudOperation',{params:formdata,headers:{'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}}).subscribe(data => {
        //this.book = data;
        console.log("Successfully called-->",data);
        alert("Deleted Successfully!");
        this.fectchData();
      },(Error)=>{
        alert("Error has occured!");
      });
    //}

  }
  logout(){
    this.router.navigate(['login']);
  }
}

