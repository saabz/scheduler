import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoAddComponent } from './todo-add.component';
import { DebugElement } from '@angular/core';

// describe('TodoAddComponent', () => {
//     let component: TodoAddComponent;
//     let fixture: ComponentFixture<TodoAddComponent>;
//     let de: DebugElement;
//     let el: HTMLElement;

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [
//                 TodoAddComponent
//             ],
//             imports: [
//                 BrowserModule,
//                 FormsModule,
//                 ReactiveFormsModule
//             ]
//         }).compileComponents().then()=>{
//             fixture = TestBed.createComponent(TodoAddComponent);
//             component = fixture.componentInstance;
//             de = fixture.debugElement.query(By.css('form'));
//             el = de.nativeElement;
//         };
//     }));

//     // beforeEach(() => {

//     //     fixture.detectChanges();
//     // });

//     it('should create', async( () => {
//         expect(component).toBeTruthy();
//     }));
// });
