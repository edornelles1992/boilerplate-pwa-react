import { observable, action } from "mobx";

class ExampleStore {
    @observable hello = "store funcionando!";
 
    @action.bound
    setHello(hello) {
      this.hello = hello;
    } 
   
  }
  
  export default ExampleStore;
  