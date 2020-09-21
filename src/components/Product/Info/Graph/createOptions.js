import CanvasJS from '../../../../canvasjs.min';

export const createOptions = (sales) => {
  const { retailSales, wholesaleSales } = createData(sales);
  const options = {
    axisY: {
      interval: 200000,
      gridThickness: 0,
      tickLength: 0,
      labelFontColor: "transparent",
    },
    axisX: {
      interval: 5,
      intervalType: "month",
      labelFormatter: function (e) {
				return CanvasJS.formatDate(e.label, "MMM");
			},
    },
    data: [
      {				
        type: "line",
        name:"Retail Sales",
        showInLegend: true,
        dataPoints: retailSales
      },
      {
          type: "line",
          name: "Wholesale Sales",
          showInLegend: true,
          dataPoints: wholesaleSales
      }
    ]
  }
  return options
}

const createData = (sales) => {
  const retailSales = [];
  const wholesaleSales = [];
  for (let i = 0; i < sales.length; i++) {
    const [ retailPoint, wholesalePoint ] = createPoints(sales[i]);
    retailSales.push(retailPoint);
    wholesaleSales.push(wholesalePoint);
  }
  return { retailSales, wholesaleSales }
}

const createPoints = (point) => {
  const year = point.weekEnding.substring(0,4);
  const month = point.weekEnding.substring(5,7);
  const day = point.weekEnding.substring(8,10);
  const date = new Date(year, month, day);
  date.setMonth(date.getMonth()-1);
  return [
    {
      label: date,
      y: point.retailSales,
    },
    {
      label: date,
      y: point.wholesaleSales,
    }
  ]
}
