import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  
  statusList: AngularFireList<any>;
  statusArr = [];

  constructor(private fireDatabase: AngularFireDatabase) {
    this.statusList = this.fireDatabase.list('status');
    this.statusList.snapshotChanges().subscribe(
      list => { 
        this.statusArr = list.map( item => { 
          return {
            ...item.payload.val()
          }  
        });
      }
    )
  }
}
