export const createOptions = (sales) => {
  const { retailSales, wholesaleSales } = createData(sales);
  const options = {
    title: {
      text: "Retail Sales"
    },
    data: [
      {				
      type: "spline",
      name:"Retail Sales",
      showInLegend: true,
      dataPoints: retailSales
      },
      {
        type: "spline",
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
  return [
    {
      label: point.weekEnding,
      y: point.retailSales,
    },
    {
      label: point.weekEnding,
      y: point.wholesaleSales,
    }
  ]
}