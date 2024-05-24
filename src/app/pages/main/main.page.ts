import { Component, OnInit, inject } from '@angular/core';
import { FirebaeService } from 'src/app/services/firebae.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  firebaseSvc = inject(FirebaeService)
  utilSvc = inject(UtilsService)


  singOut(){
    this.firebaseSvc.sigOut()
  }
  constructor() { }

  ngOnInit() {
  }

}
