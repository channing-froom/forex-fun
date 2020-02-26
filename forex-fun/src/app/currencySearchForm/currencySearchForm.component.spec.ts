/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencySearchFormComponent } from './currencySearchForm.component';

describe('CurrencySearchFormComponent', () => {
  let component: CurrencySearchFormComponent;
  let fixture: ComponentFixture<CurrencySearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencySearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencySearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h2").textContent).toContain("Currency Lookup");;
  });

  it('Should have empty values', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".iso").textContent).toContain("NA");
    expect(compiled.querySelector(".exchange").textContent).toContain("0.000");
    expect(compiled.querySelector(".converted").textContent).toContain("0.000");
  });
});
