export const HeaderStyle = {
  container: `
    md:col-start-2
    md:col-end-2
    md:row-start-1 
    md:row-end-1
    bg-white-100
    flex
    justify-between
    items-center
    border

    relative
  `,
  div: `
    flex
    justify-center
    items-center
    gap-2
    p-4
    sm:p-3
    h-[60px]
  `,
  search: `
    flex
    items-center
    absolute
    sm:relative
    sm:bottom-[0px]
    bottom-[-60px]
    left-[0px]
    bg-purple-200
    sm:bg-transparent
    w-full
    h-[60px]
  `,
  icon: `
    text-gray-400
    text-xl
    sm:text-2xl
    cursor-pointer
  `,
  iconSearch: `
    sm:text-gray-400
    text-xl
    sm:text-2xl
    cursor-pointer
    text-white
  `,
  iconMenu: `
    text-xl
    sm:text-2xl
    sm:hidden
    cursor-pointer
    text-gray-400
    `,
  btn: `
    flex
    justify-center
    items-center
    min-w-[60px]
    sm:min-w-[30px]
    h-[60px]
  `,
  input: `
    h-[58px]
    min-w-[100%]
    border-none
    outline-none
    p-[0px_20px]
  `
}