import { Button, ButtonProps } from '@mui/material'

interface SubmitButton extends ButtonProps { }

export const FormButton = (
  { children }: SubmitButton
) => {
  return (
    <Button
      variant="contained"
      type="submit"
      size="large"
    >
      {children}
    </Button>
  )
}
