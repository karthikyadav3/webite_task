import { Component } from '@angular/core';
import { NgModule} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
ServerStatus= 'offline';
state=false;
serverName='';
serverID='';

buttonState= true;
statusFlag=false;

constructor(){
  setTimeout(() =>{
    this.buttonState= false;
  },2000);
}
toggleServerStatus(){
  this.statusFlag= !this.statusFlag;
  if(this.statusFlag==true){
    this.ServerStatus='online';
  }else{
    this.ServerStatus='offline';
    }
  }
reset(){
  this.serverName='';
  this.serverID='';
  }
check(){
  if(this.serverName==''){
    this.state=true;
    return this.state;
  }
}
}




