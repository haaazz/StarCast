import * as React from 'react'
import type { SVGProps } from 'react'
const SvgMoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    viewBox='0 0 30 30'
    {...props}
  >
    <path fill='url(#moon-icon_svg__a)' d='M0 0h30v30H0z' />
    <defs>
      <pattern id='moon-icon_svg__a' width={1} height={1} patternContentUnits='objectBoundingBox'>
        <use xlinkHref='#moon-icon_svg__b' transform='scale(.01)' />
      </pattern>
      <image
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEBUlEQVR4nO3d2YuPURzH8WNfsiW7sVxY/gAuXEiUpaxZC+XSnmUiUSI3SESWkhSKO0ouDJIUpShr9n2Mfb1wQWPeOjlqpOE3zzzP8z3nOd/XHzDz+57P/Ob5Pef5nu/PGKWUUkoppZRSSimlVL0Bg4AdwCxdPiFAS2AucJ9fPgNtNZD8g2gOlAOv+dNWDSP/MKYBD/lbNdBXA8kviB7ACepWoWHkF8ZM4CP/tkADyT6IpsAm/q8GKNNAsg2jM3CR0lzWMLINozdwl9Kt00CyC2MgUEn9jNNAsgmjDHhK/fXUQNIPowtwL0EY7zWMlAHNgPMkczbt1xM9YDfJ7Y1+ATO46WuIzam+oJi57ZAPDQxkjXQdhWH3n2i4xdJ1FAIwg3TMlq6lKA+WnmggngBWkZ750vUEDWgNvEkxkBXSNQUNWEK61kvXFCygcYrXjt/0xjApYCTpO5f4BcUOOJxBIC+l6wr5Yv6VbLSXri84wHiyM0K6vuAAezIMZIN0fcEBHmQYyAXp+oICdHStOln5DrSRrjMYwBiyN1O6zlj3rupyUrrOYNi76RwCqQa6SdcaBOAU+VgpXWsQgDs5BfICaCFdr/eAV+RnrnS93gO+5BjII9s1L12z19x9Qp4WSdfsNeBbzoF8AbpL1+2tFHqvkjgkXbe3MnhKWIoau0MgXbuXgJvIeGu7I6Xr9w5wBjnngCbSa+AVYBeyNkuvQdFbf5JYLr0OsW2/l3KRnyO9Fj4dcc7yAVWp7P3QZOn18AJwAz9Uaz/wr0C245e1JmbARPxzFOhgYgS0cgPGfPMMGGJiBOzHT99sb5f9ozExAYbjt0dRjelwxxFs0b6rAIaaGNhBY4TjPDAaaGSKyjYhAFWEpdINUhtgishNFA3VFWCje+e0Tmk9utp5w8BBYEoaPzPJWRGJh1ZZfDq7BBwAVgNTgcFAP9u097vf2J5fcdtH/d0Hmzn2bCRwDHhe6+fdFmvQACakvjzhGysSRq1QjkuvgEeOiIZRa7biJ+mV8MA7O8DNeHTUzYeteSm29knGJ+5bDWK1xXh6b1LqjN4iqfC27dUde7tFPG4C7YzP7LjXhGNiQ/MgmNG2bpCyfUZRVI+BXiYktlEauE4x/02VmRC5a0qRLvRngx8BUuvrKkK/T9lrh0WborA7oIHe0b8T2b3NA9AnsL2v41Ec03ZbLfaTis8faaebCFuKlrlj0L6oApZGfSzbbbnMq+Nr9PJiHyottLOIpdfDG7YJARgG7MupGc/+jkPu6V9xGyBSnJo9DtgGXAV+pBBAjdtn2+muYfH+W2oooBMwyp5ddwt6Grjm+sM+uOfiNe57Et+6hT/p3m3lbpJqJ+k6lFJKKaWUUkopZQLzEzIy/YwM0pu/AAAAAElFTkSuQmCC'
        id='moon-icon_svg__b'
        width={100}
        height={100}
      />
    </defs>
  </svg>
)
export default SvgMoonIcon
