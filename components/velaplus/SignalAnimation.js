const SignalAnimation = () => {
  return (
    <div className="animatedBG">
      <div className="circle xxlarge shade1"></div>
      <div className="circle xlarge shade2"></div>
      <div className="circle large shade3"></div>
      <div className="circle medium shade4"></div>
      <div className="circle small shade5"></div>
      <div className="circle xsmall shade5"></div>
      <style jsx>
        {`
          .animatedBG,
          .circle {
            background-color: #D6451;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .animatedBG {
            width: 30px;
            height: 30px;
          }
          .circle {
            position: absolute;
            border-radius: 50%;
            background: #8acca8;
            animation: scaleIn 2.1s infinite;
            box-shadow: 0px 0px 1px 0px #b2f1ff;
          }

          .xsmall {
            width: 100px;
            height: 100px;
          }

          .small {
            width: 200px;
            height: 200px;
          }

          .small {
            width: 200px;
            height: 200px;
          }

          .medium {
            width: 400px;
            height: 400px;
          }

          .large {
            width: 600px;
            height: 600px;
          }

          .xlarge {
            width: 800px;
            height: 800px;
          }

          .xxlarge {
            width: 1000px;
            height: 1000px;
          }

          .shade1 {
            opacity: 0.5;
          }
          .shade2 {
            opacity: 0.5;
          }

          .shade3 {
            opacity: 0.5;
          }

          .shade4 {
            opacity: 0.5;
          }

          .shade5 {
            opacity: 0.5;
          }

          @keyframes scaleIn {
            0% {
              transform: scale(0.1);
              opacity: 0.7;
            }

            50% {
              transform: scale(1);
              opacity: 0.3;
            }
            100% {
              transform: scale(1);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SignalAnimation;
