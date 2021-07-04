import { Component, OnInit } from '@angular/core';
import { LegalObject } from 'src/app/models/legal-object';
import { BrainService } from 'src/app/services/brain/brain.service';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = [
    "emri",
    "cenonKritereteMoscenimit",
    "siperfaqja",
    "eshteObjektNeShkeljeTeLejesSeNdertimit",
    "eshtePosedues",
    "zoneInformaleApoUrbane",
    "eshteVijeBregdetare",
    "kurifiRrugor",
    "rrugeKombetareApoJoKombetare",
    "output"
  ];
  dataSource: MatTableDataSource<LegalObject>;
  historyLegals: LegalObject[] = [];
  constructor(
    private brain: BrainService
  ) { }

  ngOnInit(): void {
    this.brain.gethistory().then((data: any) => {

      let legals = data?.legals;

      for (var key in legals) {
        if (legals.hasOwnProperty(key)) {
          this.historyLegals.push(legals[key]);
        }
      }

      this.dataSource = new MatTableDataSource(this.historyLegals);
    })
  }

}
