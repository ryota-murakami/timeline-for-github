// icons
import type { IconifyIcon } from '@iconify/react'
import { Icon } from '@iconify/react'
// @mui
import type { BoxProps, SxProps } from '@mui/material'
import { Box } from '@mui/material'

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  sx?: SxProps
  icon: IconifyIcon | string
}

export default function Iconify({ icon, sx, ...other }: Props) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />
}
