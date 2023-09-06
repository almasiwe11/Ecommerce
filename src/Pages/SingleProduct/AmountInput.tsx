type PropTypes = {
  amount: number
  setAmount: React.Dispatch<React.SetStateAction<number>>
}

function AmountInput({ amount, setAmount }: PropTypes) {
  return (
    <div className="flex flex-row  h-[50px] w-24  relative">
      <button
        onClick={() => {
          if (amount === 1) return
          setAmount((prev) => prev - 1)
        }}
        className="font-semibold  bg-white-gray  text-grayish h-full w-20 flex  focus:outline-none cursor-pointer"
      >
        <span className="m-auto">-</span>
      </button>
      <input
        type="hidden"
        className="md:p-2 p-1  text-xs md:text-base  focus:outline-none text-center"
      />
      <div className="bg-white-gray w-24 text-xs md:text-base flex items-center justify-center cursor-default">
        <span>{amount}</span>
      </div>

      <button
        onClick={() => {
          setAmount((prev) => prev + 1)
        }}
        className="font-semibold  bg-white-gray  text-grayish h-full w-20 flex focus:outline-none cursor-pointer"
      >
        <span className="m-auto">+</span>
      </button>
      <div className="absolute flex flex-col p-2 w-32 md:w-full mt-6 md:mt-8   items-start justify-center"></div>
    </div>
  )
}

export default AmountInput
