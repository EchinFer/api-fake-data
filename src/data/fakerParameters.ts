import { ParameterDto } from "src/common/dto/parameter.dto";
import { faker } from '@faker-js/faker';
// idParametros: string;
//     nombreParametro: string;
//     tipoDato: string;
//     estado: string;
//     tipoValor: string;
//     valorDesde: string;
//     valorHasta: string;
//     listaValores: string;
//     idGrupo: string;

// [
//     {
//       "idParametros": "1",
//       "nombreParametro": "Porcentaje de Endeudamiento.",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "40",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "2",
//       "nombreParametro": "Monto cobro mínimo mensual.",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "1500000",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "3",
//       "nombreParametro": "Cantidad de Préstamos",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "1",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "4",
//       "nombreParametro": "Referencia de Atraso",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": ",SIN DATOS,BUENO,MUY BUENO,EXCELENTE,",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "5",
//       "nombreParametro": "Cliente Físico",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "F",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "6",
//       "nombreParametro": "Posee cuenta en Guaraníes?",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "SI",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "7",
//       "nombreParametro": "Rango de Edad",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "R",
//       "valorDesde": "19",
//       "valorHasta": "65",
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "8",
//       "nombreParametro": "Calificación del Banco",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": ",0,1,",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "9",
//       "nombreParametro": "Calificación del BCP",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": ",0,1,",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "10",
//       "nombreParametro": "Es Codeudor?",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "NO",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "11",
//       "nombreParametro": "Antiguedad Laboral",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "6",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "12",
//       "nombreParametro": "Mora",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "NO",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "13",
//       "nombreParametro": "Meses para calculo de Promedio.",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "3",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "14",
//       "nombreParametro": "Conceptos a tener en cuenta para el promedio.",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": ",COMISIONES,VIATICOS,AGUINALDO,INDEMNIZACION,DEMAS CONCEPTOS,",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "15",
//       "nombreParametro": "Coeficiente Gastos Administrativos",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "5",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "16",
//       "nombreParametro": "Coeficiente Seguro",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "1,188",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "17",
//       "nombreParametro": "Listas Negativas.",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "OFAC = NO ,ALD = NO ,ONU = NO",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "18",
//       "nombreParametro": "Sucursales Excluidas",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": ",988-casamatriz,",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "19",
//       "nombreParametro": "Campaña PraAprobados PGS",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "84",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "20",
//       "nombreParametro": "ROS",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "NO",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     },
//     {
//       "idParametros": "21",
//       "nombreParametro": "Es pago Salario?",
//       "tipoDato": "string",
//       "estado": "APROBADO",
//       "tipoValor": "U",
//       "valorDesde": "SI",
//       "valorHasta": null,
//       "listaValores": null,
//       "idGrupo": "2"
//     }
//   ]
const generateData = (quantity: number) => {

    const data: ParameterDto[] = [
        {
            idParametros: "1",
            nombreParametro: "Porcentaje de Endeudamiento.",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "40",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "2",
            nombreParametro: "Monto cobro mínimo mensual.",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "1500000",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "3",
            nombreParametro: "Cantidad de Préstamos",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "1",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "4",
            nombreParametro: "Referencia de Atraso",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",SIN DATOS,BUENO,MUY BUENO,EXCELENTE,",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "5",
            nombreParametro: "Cliente Físico",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "F",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "6",
            nombreParametro: "Posee cuenta en Guaraníes?",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "SI",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "7",
            nombreParametro: "Rango de Edad",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "R",
            valorDesde: "19",
            valorHasta: "65",
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "8",
            nombreParametro: "Calificación del Banco",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",0,1,",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "9",
            nombreParametro: "Calificación del BCP",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",0,1,",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "10",
            nombreParametro: "Es Codeudor?",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "NO",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "11",
            nombreParametro: "Antiguedad Laboral",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "6",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "12",
            nombreParametro: "Mora",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "NO",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "13",
            nombreParametro: "Meses para calculo de Promedio.",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "3",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "14",
            nombreParametro: "Conceptos a tener en cuenta para el promedio.",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",COMISIONES,VIATICOS,AGUINALDO,INDEMNIZACION,DEMAS CONCEPTOS,",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "15",
            nombreParametro: "Coeficiente Gastos Administrativos",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "5",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "16",
            nombreParametro: "Coeficiente Seguro",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "1,188",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "17",
            nombreParametro: "Listas Negativas.",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "OFAC = NO ,ALD = NO ,ONU = NO",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "18",
            nombreParametro: "Sucursales Excluidas",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",988-casamatriz,",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "19",
            nombreParametro: "Campaña PraAprobados PGS",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "84",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "20",
            nombreParametro: "ROS",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "NO",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "21",
            nombreParametro: "Es pago Salario?",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "SI",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },








        {
            idParametros: "99",
            nombreParametro: "Empresas excluidas",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",421-FernandoAlfonso,",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "100",
            nombreParametro: "Promedio de acreditacion",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "300000",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "101",
            nombreParametro: "faja de informconf",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "L",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },

    ];

    const datosGenerales: ParameterDto[] = [
        {
            idParametros: "8",
            nombreParametro: "Calificación del Banco",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",1,",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "9",
            nombreParametro: "Calificación del BCP",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",0,1,",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "5",
            nombreParametro: "Cliente Físico",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "F",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "100",
            nombreParametro: "Promedio de acreditacion",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "1500000",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "101",
            nombreParametro: "faja de informconf",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "L",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },

        {
            idParametros: "11",
            nombreParametro: "Antiguedad Laboral",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "4",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "17",
            nombreParametro: "Listas Negativas.",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "OFAC = NO ,ALD = NO ,ONU = NO",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "20",
            nombreParametro: "ROS",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "NO",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "4",
            nombreParametro: "Referencia de Atraso",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",SIN DATOS,BUENO,MUY BUENO,EXCELENTE,",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "12",
            nombreParametro: "Mora",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "NO",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "99",
            nombreParametro: "Empresas excluidas",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",,",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
        {
            idParametros: "18",
            nombreParametro: "Sucursales Excluidas",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",01-Casa Matriz,",
            valorHasta: null,
            listaValores: null,
            idGrupo: "2"
        },
    ];

    const datosEssap: ParameterDto[] = [
        {
            idParametros: "3",
            nombreParametro: "Cantidad de Préstamos",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "0",
            valorHasta: null,
            listaValores: null,
            idGrupo: "3"
        },
        {
            idParametros: "6",
            nombreParametro: "Posee cuenta en Guaraníes?",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "NO",
            valorHasta: null,
            listaValores: null,
            idGrupo: "3"
        },
        {
            idParametros: "7",
            nombreParametro: "Rango de Edad",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "R",
            valorDesde: "22",
            valorHasta: "65",
            listaValores: null,
            idGrupo: "3"
        },
        {
            idParametros: "104",
            nombreParametro: "Monto limite maximo y minimo",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "R",
            valorDesde: "3000000",
            valorHasta: "100000000",
            listaValores: null,
            idGrupo: "3"
        },
        {
            idParametros: "1",
            nombreParametro: "Porcentaje de Endeudamiento.",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "30",
            valorHasta: null,
            listaValores: null,
            idGrupo: "3"
        },
    ];

    const datosEmpresasGrupo: ParameterDto[] = [
        {
            idParametros: "99",
            nombreParametro: "Empresas incluidas",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: ",01-Bepsa,02-Avalon,03-Documenta,04-Negocios y Servicios",
            valorHasta: null,
            listaValores: null,
            idGrupo: "4"
        }, 
        {
            idParametros: "1",
            nombreParametro: "Porcentaje de Endeudamiento.",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "25",
            valorHasta: null,
            listaValores: null,
            idGrupo: "4"
        },
        {
            idParametros: "3",
            nombreParametro: "Cantidad de Préstamos",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "1",
            valorHasta: null,
            listaValores: null,
            idGrupo: "4"
        },
        {
            idParametros: "6",
            nombreParametro: "Posee cuenta en Guaraníes?",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "NO",
            valorHasta: null,
            listaValores: null,
            idGrupo: "4"
        },
        {
            idParametros: "7",
            nombreParametro: "Rango de Edad",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "R",
            valorDesde: "22",
            valorHasta: "65",
            listaValores: null,
            idGrupo: "4"
        },
    ];

    const datosRenovados: ParameterDto[] = [
        {
            idParametros: "1",
            nombreParametro: "Porcentaje de Endeudamiento.",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "20",
            valorHasta: null,
            listaValores: null,
            idGrupo: "5"
        },
        {
            idParametros: "6",
            nombreParametro: "Posee cuenta en Guaraníes?",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "NO",
            valorHasta: null,
            listaValores: null,
            idGrupo: "5"
        },
        {
            idParametros: "7",
            nombreParametro: "Rango de Edad",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "R",
            valorDesde: "19",
            valorHasta: "65",
            listaValores: null,
            idGrupo: "5"
        },
        {
            idParametros: "3",
            nombreParametro: "Cantidad de Préstamos",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "1",
            valorHasta: null,
            listaValores: null,
            idGrupo: "5"
        },
        {
            idParametros: "103",
            nombreParametro: "Porcentaje pago credito",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "75",
            valorHasta: null,
            listaValores: null,
            idGrupo: "5"
        },
    ];

    const datosContiFlash: ParameterDto[] = [
        {
            idParametros: "6",
            nombreParametro: "Posee cuenta en Guaraníes?",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "U",
            valorDesde: "NO",
            valorHasta: null,
            listaValores: null,
            idGrupo: "6"
        },
        {
            idParametros: "7",
            nombreParametro: "Rango de Edad",
            tipoDato: "string",
            estado: "APROBADO",
            tipoValor: "R",
            valorDesde: "19",
            valorHasta: "65",
            listaValores: null,
            idGrupo: "6"
        },
    ];



    return [
        ...datosGenerales,
        ...datosEssap,
        ...datosEmpresasGrupo,
        ...datosRenovados,
        ...datosContiFlash,
    ]
}


export const fakerParameters = {
    generateData
}
