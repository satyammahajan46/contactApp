import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';


@Component({
  selector: 'app-recipes-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode: boolean;
  contactForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private cService: ContactService) {
    this.editMode = false;
  }

  ngOnInit() {

    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.editMode = param['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {

    let contactName = '';
    let cImagePath = '';
    let cDesc = '';
    let cPhTy = new FormArray([]);
    if (this.editMode) {
      const contact = this.cService.getContact(this.id)
      contactName = contact.name;
      cImagePath = contact.imagePath;
      cDesc = contact.description;
      //recipe.ingredients = undefined;
      if (contact.phoneTypes) {
        //console.log("lalal");
        for (let item of contact.phoneTypes) {
          cPhTy.push(
            new FormGroup({
              'phoneType': new FormControl(item.type, Validators.required),
              'number': new FormControl(item.num, [Validators.required])
            })
          );
        }
      }

    }
    this.contactForm = new FormGroup({
      'name': new FormControl(contactName, Validators.required),
      'imagePath': new FormControl(cImagePath, Validators.required),
      'desc': new FormControl(cDesc, Validators.required),
      'phTy': cPhTy
    });
  }
  
  onSubmit() {
    //console.log(this.recipeForm)
    const newContact = new Contact(
      this.contactForm.value.name, this.contactForm.value.desc, this.contactForm.value.imagePath, this.contactForm.value.phTy
    );
    //console.log(newRecipe)
    if (this.editMode) {
      this.cService.updateContact(newContact, this.id)
    }
    else {
      this.cService.addContact(newContact);
    }
    this.contactForm.reset();
    this.cancel();
  }

  getControls() {
    return (<FormArray>this.contactForm.get('phTy')).controls
  }

  addPhTy() {
    (<FormArray>this.contactForm.get('phTy')).push(
      new FormGroup({
        'phoneType': new FormControl(null, Validators.required),
        'number': new FormControl(null, [Validators.required])
      })
    );
  }

  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  delPhTy(i: number){
    const phoneTypes = this.contactForm.get('phTy') as FormArray; 
    phoneTypes.removeAt(i);

  }
  ngOnDestroy() {

  }

}
