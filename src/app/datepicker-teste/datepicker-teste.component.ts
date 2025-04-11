import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-datepicker-teste',
  imports: [MatFormFieldModule,MatInputModule,MatDatepickerModule,MatSelectModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './datepicker-teste.component.html',
  styleUrl: './datepicker-teste.component.css'
})
export class DatepickerTesteComponent {

  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

}
