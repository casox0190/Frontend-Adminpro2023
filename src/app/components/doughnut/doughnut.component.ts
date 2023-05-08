import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color, Colors } from 'chart.js';
@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent {

  @Input () titulo:string='Sales';
  @Input ()labels:string[]=[ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input () doughnutChartLabels: string[] =this.labels ;


  @Input ('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ],
    datasets: [
      { data:[ 100, 450, 100 ],
        backgroundColor:[
          '#6857E6', 
          '#007FEE', 
          '#F02059'
        ]   
      },
       ], 
  };

  

  public doughnutChartType: ChartType = 'doughnut';
}
