import React from 'react'
import { Grid } from '@mui/material'
import { VideoCard, Notification, OptionsCard } from '.'

export default function MainContainer() {
  return (
    <Grid container spacing={4} justify="space-between">
      
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <VideoCard />
      </Grid>
      
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <OptionsCard>
          <Notification />
        </OptionsCard>
      </Grid>

    </Grid>
  )
}

