// import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts';

export default function BasicGauges() {
  return (
    <Stack>
      <Gauge width={100} height={100} value={10} startAngle={-90} endAngle={90} />
    </Stack>
  );
}
