type PropTypes = {
  isOpen: boolean
  isOpen2?: boolean
}

function Overlay({ isOpen, isOpen2 }: PropTypes) {
  return (
    <>
      {isOpen ||
        (isOpen2 && <div className="absolute inset-0 bg-black/30"></div>)}
    </>
  )
}

export default Overlay
