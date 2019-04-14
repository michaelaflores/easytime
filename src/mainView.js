import React, { useState } from 'react'
import BigTimeClass from './bigTime'
import NotificationClass from './notifications'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const MainView = () => {
  // Set a default of 8 hours. While we can pass the "placeholder" attribute below,
  // MUI will replace it with the value set here.
  const [hours, setHours] = useState(8)
  const [hoursChecked, setHoursChecked] = useState(false)
  const bigtime = new BigTimeClass()
  const notifications = new NotificationClass()

  const submitHours = () => {
    bigtime.submitHours(hours)
    notifications.createNotification('Your hours were submitted. Back to work!')
  }

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        How many hours did you work today?
      </Typography>
      <TextField
        id="outlined-number"
        label="Hours worked"
        value={hours}
        onChange={({ target: { value } }) => setHours(value)}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
        inputProps={{
          min: '1',
          max: '24',
        }}
      />
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={hoursChecked}
              onChange={() => setHoursChecked(!hoursChecked)}
              value="hoursChecked"
              color="primary"
            />
          }
          label="Automatically add 1 hour of lunch"
        />
      </div>
      <Button onClick={submitHours}>Submit</Button>
    </div>
  )
}

export default MainView
