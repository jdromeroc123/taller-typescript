import { Serie } from './serie.js';
import { seriesGuardadas } from './datos.js';
export var se = new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpeg");
var seriesTable = document.getElementById("series");
var promedioTable = document.getElementById("promedio");
mostrarSeries(seriesGuardadas);
mostrarPromedio(seriesGuardadas);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td> \n        <td>").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function mostrarPromedio(series) {
    var totalTemporadas = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        totalTemporadas += serie.temporadas;
    }
    var promedioTemporadas = totalTemporadas / series.length;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Promedio temporadas: </td><td>".concat(Math.round(promedioTemporadas), "</td>");
    promedioTable.appendChild(trElement);
}
