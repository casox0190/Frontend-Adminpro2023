import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1:string[]=['Download Sales1', 'In-Store  Sales1', 'Mail-Order Sales1'];
  public labels2:string[]=['Download Sales2', 'In-Store  Sales2', 'Mail-Order Sales2'];
  public labels3:string[]=['Download Sales3', 'In-Store  Sales3', 'Mail-Order Sales3'];
  public labels4:string[]=['Download Sales4', 'In-Store  Sales4', 'Mail-Order Sales4'];

  data1: ChartData <'doughnut'>={
      datasets:[{
        data:[ 350, 450, 100 ]
      }]
  }

  
  data2: ChartData <'doughnut'>={
    datasets:[{
      data:[ 20, 50,90]
    }]
}


 data3: ChartData <'doughnut'>={
  datasets:[{
    data:[ 120, 50, 220 ]
  }]
}

data4: ChartData <'doughnut'>={
  datasets:[{
    data:[ 40, 80, 150 ]
  }]
}
}
