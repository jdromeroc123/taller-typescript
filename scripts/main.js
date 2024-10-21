import { Serie } from './serie.js';
import { seriesGuardadas } from './datos.js';
export var se = new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpeg");
var seriesTable = document.getElementById("series");
var promedioTable = document.getElementById("promedio");
var serieDetalle = document.getElementById("serieDetalle");
mostrarSeries(seriesGuardadas);
mostrarPromedio(seriesGuardadas);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td> \n        <td style=\"color: blue; text-decoration: underline;\">").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        trElement.addEventListener("click", function () { return mostrarDetalleSerie(serie); });
        seriesTbody.appendChild(trElement);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
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
function mostrarDetalleSerie(serie) {
    serieDetalle.innerHTML = "\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(serie.imagen, "\" class=\"card-img-top\" alt=\"").concat(serie.nombre, "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(serie.nombre, "</h5>\n            <p class=\"card-text\">").concat(serie.descripcion, "</p>\n            <a href=\"").concat(serie.enlace, "\" target=\"_blank\"> ").concat(serie.enlace, "</a>\n        </div>\n    </div>");
}
