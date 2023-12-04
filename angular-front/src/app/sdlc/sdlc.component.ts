import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder,FormArray, Form } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { GET_INITIATION_QUERY,UPDATE_INITIATION_MUTATION } from 'src/app/graphQL/query';
import { initiation, srsClass} from 'src/models/Form';
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
    fileNames: this.formBuilder.array([]),
    images: this.formBuilder.array([])
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
  
  

  get fileNames() {
    return this.designForm.get('fileNames') as FormArray;
  }
  
  get images() {
    return this.designForm.get('images') as FormArray;
  }
  
  addFileName() {
    this.fileNames.push(this.formBuilder.control(''));
  }
  
  addImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.images.push(this.formBuilder.control(reader.result));
    };
    reader.readAsDataURL(file);
  }

  fetchInitiationData(): void {
    
  }
  initiationFormList: initiation[] = [];
  srsFormList: srsClass[] = [];
  ngOnInit() {
    this.initiationFormList = this.formservice.getinitiationForms();
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

  onImageChange(event: any, index: number): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imagePath = reader.result as string;
      this.images.controls[index].patchValue(imagePath);
    };
    reader.readAsDataURL(file);
  }
  
  addImageInput(): void {
    this.images.push(this.formBuilder.control(''));
  }
}