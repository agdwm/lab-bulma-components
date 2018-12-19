import React from "react";

const classes = {
  isDark: "is-dark",
  isPrimary: "is-primary",
  isLink: "is-link",
  isInfo: "is-info",
  isSuccess: "is-success",
  isWarning: "is-warning",
  isDanger: "is-danger"
};


export const Message = (props) => {
  const {children} = props;
  
  let propsClasses = Object.keys(props).map(e => classes[e]).join(" ");
  props.className ? propsClasses += props.className : '';
  let messageClasses = `message ${propsClasses}`;

  return (
    <article className={messageClasses}>
      {children}
    </article>
  );
};
