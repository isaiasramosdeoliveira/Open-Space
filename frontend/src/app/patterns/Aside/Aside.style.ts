export const AsideStyle = {
  container: `
    overflow-x-hidden 
    absolute 
    md:block 
    bg-purple-100 
    h-full
    md:col-span-1
    w-[220px]
    left-[-220px]
    md:left-[0px]
  `,
  nav: `
    flex 
    overflow-x-hidden 
    flex-col 
    justify-center 
    items-center 
    m-[14px_0px]
  `,
  navNetwork: `
    flex 
    overflow-x-hidden 
    justify-center 
    items-end 
    gap-6 
    h-[60px] 
    p-10
  `,
  item: `
    flex 
    justify-start 
    gap-4 
    p-[8px] 
    items-center 
    w-full 
    text-white 
    font-semibold 
    hover:border-l-[3px] 
    transition-all
  `,
  link: `
    flex 
    justify-start 
    gap-4 
    p-[8px_12px] 
    items-center 
    w-full 
    text-white 
    font-semibold 
    text-sm
  `,
  icon: `
    text-xl 
    text-white
  `,
  div: `
    bg-purple-200 
    h-[2px] 
    block 
    w-[160px] 
    m-[22px_auto]
  `,
  circle: `
    w-[8px] 
    h-[8px] 
    block 
    rounded-full
  `,
  signature: `
    text-center 
    block 
    text-white 
    h-[60px] 
    text-sm
  `
}