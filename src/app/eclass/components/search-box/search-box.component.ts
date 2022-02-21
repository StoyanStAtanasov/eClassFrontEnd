import { Component, OnInit } from '@angular/core';
import { EclassService } from '../../services/eclass.service';
import { Eclass, EclassSh } from '../../interfaces/interface';
// import { DaoService } from '../../services/dao.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  Eclass = Eclass;
  EclassSh = EclassSh;

  constructor(
    public eclassService: EclassService // public daoService: DaoService,
  ) {}

  ngOnInit(): void {}

  openFile() {}
}
