import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({ id, height, width, color, data,type, currentColor }) => {
  
  return (
<SparklineComponent 
  id={id}
   height={height}
   width={width}
   lineWidth={1}
   valueType="Category"
   fill={color}
  
   border={{color: currentColor, width:2}}
  xName='x' yName='y' dataSource={data} 
        // To enable tooltip for sparkline
        tooltipSettings={{
            visible: true,
            // formatting tooltip text
            // eslint-disable-next-line no-template-curly-in-string
            format: '${x} :data ${y}'
        }}>
    <Inject services={[SparklineTooltip]}/>
</SparklineComponent>



  )}


export default SparkLine