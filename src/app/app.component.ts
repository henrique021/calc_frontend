import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraTesteComponent } from './calculadora-teste/calculadora-teste.component';
import { DatepickerTesteComponent } from './datepicker-teste/datepicker-teste.component';
import { SinglePanelComponent } from './single-panel/single-panel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CalculadoraTesteComponent,DatepickerTesteComponent,SinglePanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoApp';
}
