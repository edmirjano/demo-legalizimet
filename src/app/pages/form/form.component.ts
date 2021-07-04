import { Component, OnInit, Optional } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { LegalObject } from 'src/app/models/legal-object';
import { ResultComponent } from 'src/app/components/result/result.component';
import { BrainService } from 'src/app/services/brain/brain.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  legalObject: LegalObject
  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    @Optional() public dialog: MatDialog,
    public brain: BrainService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.form = this.formBuilder.group({
      emri: new FormControl('', [Validators.required]),
      cenonKritereteMoscenimit: new FormControl(false, [Validators.required]),
      siperfaqja: new FormControl(0, [Validators.required]),
      //genplani: new FormControl(null),
      eshteObjektNeShkeljeTeLejesSeNdertimit: new FormControl(false, [Validators.required]),
      eshtePosedues: new FormControl(false, [Validators.required]),
      zoneInformaleApoUrbane: new FormControl(false, [Validators.required]),
      eshteVijeBregdetare: new FormControl(false, [Validators.required]),
      kurifiRrugor: new FormControl(0, [Validators.required]),
      rrugeKombetareApoJoKombetare: new FormControl('', [Validators.required]),
      plotesonCilesineNdertimore: new FormControl(false, [Validators.required]),
      eshteTrashegimiKulturore: new FormControl(false, [Validators.required]),
      shkelBrezinMbrojtesTeGazsjellesit: new FormControl(false, [Validators.required]),
      cenonIntegritetinEParkutArkeologjik: new FormControl(false, [Validators.required]),
      eshteZoneESigurise: new FormControl(false, [Validators.required]),
      cenonPamjenEJashtmeTeMonumentitTeKultures: new FormControl(false, [Validators.required]),
      cenonTerritorinENdertesavePublike: new FormControl(false, [Validators.required]),
      shkelTruallininERrugesEkzistuese: new FormControl(false, [Validators.required]),
      cenonVijenBlu: new FormControl(false, [Validators.required]),
      eshteNdertuarMinimalishtnjeKat: new FormControl(false, [Validators.required]),
      gjendetNerrethanateMoslekalizimitSipasligjit20_2020: new FormControl(false, [Validators.required]),
      eshteObjektApoShtese: new FormControl('', [Validators.required]),
    });
  }

  onFormSubmit(values: LegalObject): void {
    if (this.form.valid) {
      this.brain.getResult(values).then((data: number)=>{
        this.openResultModal(data);
      },
      (error)=>{
        this.snackBar.open("Ndodhi nje gabim, ju lutemi provoni me vone.");
      })
    }
  }

  openResultModal(data: number): void {
    const dialogRef = this.dialog.open(ResultComponent, {
      data: { percentual: data },
      width: "600px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }



}
