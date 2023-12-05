import { Component } from '@angular/core';
import { DataHandlingInterceptor } from './data-handling.interceptor';
import { DatasService } from './datas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interceptor';
  public names: any[] = [{
    id: '',
    name: '',
    username: ''
  }];
  constructor(private http: DatasService) {
  }
  showData() {
    this.http.showdatas().subscribe((data: any) => {
      this.names = data;
    })
  }
}
