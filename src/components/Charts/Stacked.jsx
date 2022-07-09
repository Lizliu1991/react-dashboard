import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, StackingColumnSeries } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

const Stacked = ({width, height}) => {
 
  
  return (

    <ChartComponent 
    width={width}
    height={height}
    id="charts" 
    primaryXAxis={stackedPrimaryXAxis} 
    primaryYAxis={stackedPrimaryYAxis}
    chartArea={{border: {width:0}}}
    tooltip={{enable: true}}
    legendSettings={{
      background:"white",
      visible: true,
      reverse: true
  }}>
  <Inject services={[StackingColumnSeries, Legend, Tooltip, Category]}/>
  <SeriesCollectionDirective>
  {stackedCustomSeries.map((item, index) => 
   <SeriesDirective 
    key={index} {...item}
  />
 )}  
  </SeriesCollectionDirective>
</ChartComponent>
  )
}

export default Stacked