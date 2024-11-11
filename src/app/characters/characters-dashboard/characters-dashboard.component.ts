import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../characters.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions, ChartType } from 'chart.js';


@Component({
  selector: 'app-characters-dashboard',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './characters-dashboard.component.html',
  styleUrl: './characters-dashboard.component.css'
})
export class CharactersDashboardComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: false,  // Desabilita a responsividade
    maintainAspectRatio: false,  // Permite que o gráfico se ajuste ao contêiner
    plugins: {
      legend: {
        display: true,       // Habilita as legendas
        position: 'bottom',  // Posiciona as legendas na parte inferior do gráfico
        align: 'center',
        labels: {
          font: {
            size: 18 // Aumente o valor para o tamanho desejado
          },
          boxWidth: 20,
          padding: 15
        }
      }
    }
  };
  
  public pieChartLabels: string[] = [];
  public pieChartData: any = {
    labels: [], // Labels para as casas
    datasets: [
      {
        data: [], // Contagem de personagens por casa
        backgroundColor: [] // Cores para cada segmento
      }
    ]
  };
  public pieChartType: ChartType = 'pie';

  /////POLAR
  public polarChartOptions: ChartOptions = {
    responsive: false,  // Desabilita a responsividade
    maintainAspectRatio: false,  // Permite que o gráfico se ajuste ao contêiner
    scales: {
      r: {
        pointLabels: {
          display: true,
          centerPointLabels: true,
          font: {
            size: 18
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Distribuição de Personagens por Casa'
      }
    }
  };
  
  public polarChartData: any = {
    labels: [], // Labels para as casas
    datasets: [
      {
        data: [], // Contagem de personagens por casa
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'] // Cores para cada segmento
      }
    ]
  };
  public polarChartType: ChartType = 'polarArea';
  
  constructor(private charactersService: CharactersService){
    
  }
  
  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe(data => {
      const { houseCounts, houseNames } = this.processHouseData(data);
      
      //grafico pizza
      this.pieChartData = { labels: houseNames, datasets: [{ data: Object.values(houseCounts) }] };

      // Define as labels e os dados com base no retorno do método
      this.polarChartData = {labels: houseNames, datasets: [{ data: Object.values(houseCounts) }] };

    });
  }

  private processHouseData(data: any[]): { houseCounts: Record<string, number>, houseNames: string[] } {
    const houseCounts: Record<string, number> = {};
  
    data.forEach(character => {
      const house = character.house || 'Unknown'; // Usa 'Unknown' se a casa não estiver definida
      houseCounts[house] = (houseCounts[house] || 0) + 1; // Incrementa a contagem para cada casa
    });
  
    const houseNames = Object.keys(houseCounts); // Lista única de nomes das casas
  
    return { houseCounts, houseNames };
  }
  

  private getUniqueHouses(data: any[]): string[] {
    return data
      .map(character => character.house || 'Unknown')  // Extrai o valor da casa ou "Unknown" se estiver ausente
      .reduce((uniqueHouses, house) => {
        if (!uniqueHouses.includes(house)) {
          uniqueHouses.push(house);  // Adiciona a casa se ela ainda não estiver na lista
        }
        return uniqueHouses;
      }, []);
  }

}
