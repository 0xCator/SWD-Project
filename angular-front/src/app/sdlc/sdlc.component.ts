import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder,FormArray, Form } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { GET_INITIATION_QUERY,UPDATE_INITIATION_MUTATION } from 'src/app/graphQL/query';
import { design, initiation, srsClass} from 'src/models/Form';
import { FormService } from 'src/services/form.service';

@Component({

  selector: 'app-sdlc',
  templateUrl: './sdlc.component.html',
  styleUrls: ['./sdlc.component.css'],

})
export class SDLCComponent {
  selectedPhase: string = '';
  showForm: boolean = false;
  showFiles: boolean = false;
  savedForms: any[] = [];
  phases: string[] = ['Initiation', 'SRS', 'Design'];


  //form-list
  initList: initiation[] = [];
  srsList: srsClass[] = [];
  designList: design[] = [];

  initiationForm = this.formBuilder.group({
    title: '',
    startDate: null,
    endDate: null,
    objective: '',
    manager: '',
    budget: null,
    scope: '',
  });
  srsForm = this.formBuilder.group({
    introduction:'',
    purpose:'',
    audience:'',
    description:'',
    SRS: '',
    useImage:'',
  })  

  designForm = this.formBuilder.group({
    filePairs: this.formBuilder.array([this.createFilePair()])
  });
  constructor(private router: Router,private formBuilder:FormBuilder, private formservice:FormService) {}

  selectPhase(
    event: any): void {
    const phase = event.target.value;
    this.selectedPhase = phase;
    this.showForm = true;
    this.showFiles = false;
    this.router.navigate(['/sdlc', phase.toLowerCase()]);
  }

  closeForm(): void {
    this.showForm = false;
    this.selectedPhase = '';
  }
  
  

 

  fetchInitiationData(): void {
    
  }
  initiationFormList: initiation[] = [];
  srsFormList: srsClass[] = [];
  ngOnInit() {
    this.initiationFormList = this.formservice.getInitiationForms();
    this.srsFormList = this.formservice.getSRSForms();
  }

  onSubmitInitiation(): void {
    let initiationData = new initiation(this.initiationForm.value.title!, this.initiationForm.value.startDate!,this.initiationForm.value.endDate!, this.initiationForm.value.objective!, this.initiationForm.value.manager!, this.initiationForm.value.budget!, this.initiationForm.value.scope! );
    this.formservice.saveInitiation(initiationData);
    console.log(initiationData);
  }
  
  onSubmitSRS(): void {
    let srsData = new srsClass(this.srsForm.value.introduction!,this.srsForm.value.purpose!,this.srsForm.value.audience!,this.srsForm.value.description!,this.srsForm.value.SRS!,this.srsForm.value.useImage!);
    this.formservice.saveSRS(srsData);
    console.log(this.srsForm.value);
  }

  deleteInitiationForm(index: number): void {
    this.formservice.deleteInitiationForm(index);
  }

  deleteSRSForm(index: number): void {
    this.formservice.deleteSRSForm(index);
  }

  editInitiationForm(index: number): void {
    const updatedInitiation = this.initList[index];
    // Perform any necessary operations for editing the form
    // For example, you can navigate to a different component with the form data
    this.router.navigate(['/edit-initiation', index]);
  }

  editSRSForm(index: number): void {
    const updatedSRS = this.srsList[index];
    // Perform any necessary operations for editing the form
    // For example, you can navigate to a different component with the form data
    this.router.navigate(['/edit-srs', index]);
  }
  onSubmitDesignForm(): void {
    if (this.designForm.valid) {
      const formValue = this.designForm.value;
      const filePairs = formValue.filePairs ? formValue.filePairs.map((pair: any) => ({
        fileName: pair.fileName,
        imagePath: pair.imagePath
      })) : [];
  
      const designData: design = {
        fileName: filePairs.map((pair: any) => pair.fileName),
        imagePath: filePairs.map((pair: any) => pair.imagePath)
      };
  
      this.formservice.saveDesign(designData);
      this.designForm.reset();
    }
  }
  createFilePair(): FormGroup {
    return this.formBuilder.group({
      fileName: '',
      imagePath: ''
    });
  }
  
  addFilePair(): void {
    const filePairs = this.designForm.get('filePairs') as FormArray;
    filePairs.push(this.createFilePair());
  }
  
  removeFilePair(index: number): void {
    const filePairs = this.designForm.get('filePairs') as FormArray;
    filePairs.removeAt(index);
  }
  addImage(event: any, index: number) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imagePath = reader.result as string;
      const filePairs = this.designForm.get('filePairs') as FormArray;
      filePairs.controls[index]?.get('imagePath')?.setValue(imagePath);
    };
    reader.readAsDataURL(file);
  }
  
}