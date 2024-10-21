import { Serie } from './serie.js';
import{ seriesGuardadas } from './datos.js';

export const se = new Serie(1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpeg");

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioTable: HTMLElement = document.getElementById("promedio")!;


mostrarSeries(seriesGuardadas);
mostrarPromedio(seriesGuardadas);

function mostrarSeries(series: Serie[]): void{
    let seriesTbody: HTMLElement= document.createElement("tbody");
    for(let serie of series){
        let trElement: HTMLElement =document.createElement("tr");
        trElement.innerHTML=`<td>${serie.id}</td> 
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

function mostrarPromedio(series: Serie[]): void{
    let totalTemporadas: number = 0;
    for(let serie of series){
        totalTemporadas+= serie.temporadas;
    }
    let promedioTemporadas: number = totalTemporadas/series.length;
    let trElement: HTMLElement =document.createElement("tr");
    trElement.innerHTML= `<td>Promedio temporadas: </td><td>${Math.round(promedioTemporadas)}</td>`;
    promedioTable.appendChild(trElement);
}
