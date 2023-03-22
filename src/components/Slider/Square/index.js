export const Square = ({className, isActive, onClick}) => {
  return (
    <div className={className + (isActive ? ' active' : '') } onClick={onClick}></div>
  )
}