import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-panel',
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule],
  templateUrl: './single-panel.component.html',
  styleUrl: './single-panel.component.css'
})
export class SinglePanelComponent {
  form: FormGroup;
  result: any = null;
  error: string = '';
  loading: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      startDate: [''],
      endDate: ['']
    });
  }

  processar() {
    this.error = '';
    this.result = null;
    this.loading = true;

    const { startDate, endDate } = this.form.value;

    const params = {
      dataInicio: startDate,
      dataFim: endDate
    };

    this.http.get<any>('/api/calculate', { params }).subscribe({
      next: (res) => {
        this.result = {
          dataInicial: res.dataInicial,
          dataFinal: res.dataFinal,
          diasUteis: res.diasUteisDiff,
          diasNaoUteis: res.diasNaoUteisDiff,
          feriados: res.feriadosDiff,
          meses: res.mesesDiff,
          anos: res.anosDiff
        };
        this.loading = false;
      },
      error: () => {
        this.error = 'Erro ao processar as datas.';
        this.loading = false;
      }
    });
  }
}
