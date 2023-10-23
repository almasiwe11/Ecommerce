export default function Spinner() {
  return (
    <div className="w-full h-full flex-center ">
      <div style={{ width: "200px", height: "200px", display: "block" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100px"
          height="100px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
            fill="black"
            stroke="none"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="0 50 51;360 50 51"
            ></animateTransform>
          </path>
        </svg>
      </div>
    </div>
  )
}