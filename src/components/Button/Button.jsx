//src/components/Button/Button.jsx

import "./Button.scss";

export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`btn btn--${variant}`} {...props}>
      {children}
    </button>
  );
}