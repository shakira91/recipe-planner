import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserRecipeComponent } from './add-user-recipe.component';

describe('AddUserRecipeComponent', () => {
  let component: AddUserRecipeComponent;
  let fixture: ComponentFixture<AddUserRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
