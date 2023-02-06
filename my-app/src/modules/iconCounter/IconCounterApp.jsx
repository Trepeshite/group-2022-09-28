import IconCounter from "./IconCounter";
import logo from "../../assets/images/logo.svg";

const srcArray = [
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/noto-emoji/343/melting-face_1fae0.jpg",
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/noto-emoji/343/dotted-line-face_1fae5.jpg",
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/noto-emoji/343/face-vomiting_1f92e.jpg",
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/noto-emoji/343/pile-of-poo_1f4a9.jpg",
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/noto-emoji/343/dog_1f415.jpg",
];

const IconCounterApp = () => {
  return (
    <div className="icon-counter-app">
      <img src={logo} className="react-logo" alt="logo" />
      <ul className="icon-counters">
        {srcArray.map((src) => {
          return <IconCounter key={Date.now() + Math.random()} src={src} />;
        })}
      </ul>
    </div>
  );
};

export default IconCounterApp;
