import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';  
// import { BehaviorSubject} from 'rxjs/BehaviorSubject'; 

@Injectable()
export class SharedService {
private item = new BehaviorSubject<Object>({
      "id":"",
      "name":"",
      "image":"",
      "category":"",
      "label":"",
      "price":"",
      "description":""
   
});
  constructor() { }
setBehaviorView(behave) { 
    this.item.next(behave); 
} 
getBehaviorView(): Observable<any> { 
    return this.item.asObservable(); 
}

}