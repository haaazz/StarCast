import type { SVGProps } from 'react'
const SvgHelpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16' {...props}>
    <mask
      id='help-icon_svg__a'
      width={16}
      height={16}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill='#D9D9D9' d='M0 0h16v16H0z' />
    </mask>
    <g mask='url(#help-icon_svg__a)'>
      <path
        fill='#999'
        d='M7.967 11.999q.35 0 .591-.242a.8.8 0 0 0 .242-.592q0-.35-.242-.591a.8.8 0 0 0-.591-.242q-.35 0-.592.242a.8.8 0 0 0-.242.591q0 .35.242.592a.8.8 0 0 0 .592.242m-.6-2.567H8.6q0-.55.125-.867t.708-.866q.434-.434.684-.825t.25-.942q0-.933-.684-1.433-.683-.5-1.616-.5-.951 0-1.542.5t-.825 1.2l1.1.433q.082-.3.375-.65.292-.35.892-.35.533 0 .8.292a.93.93 0 0 1 .266.641q0 .333-.2.625t-.5.542q-.733.65-.9.983-.165.334-.166 1.217M8 14.665a6.5 6.5 0 0 1-2.6-.525 6.7 6.7 0 0 1-2.117-1.425A6.7 6.7 0 0 1 1.858 10.6a6.5 6.5 0 0 1-.525-2.6q0-1.385.525-2.6a6.7 6.7 0 0 1 1.425-2.117q.9-.9 2.117-1.425A6.5 6.5 0 0 1 8 1.332q1.383 0 2.6.525t2.117 1.425 1.425 2.117q.525 1.215.525 2.6 0 1.383-.525 2.6a6.7 6.7 0 0 1-1.425 2.116q-.9.9-2.117 1.425a6.5 6.5 0 0 1-2.6.525m0-1.333q2.233 0 3.783-1.55t1.55-3.783-1.55-3.784T8 2.665t-3.783 1.55T2.667 8t1.55 3.783T8 13.332'
      />
    </g>
  </svg>
)
export default SvgHelpIcon
