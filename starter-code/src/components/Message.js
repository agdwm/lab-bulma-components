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

export const Message = props => {
  const { className, textHeader, textBody } = props;

  let propsClasses = Object.keys(props).map(e => classes[e]).join(" ");
  className ? (propsClasses += className) : "";
  let messageClasses = `message ${propsClasses}`;

  return (
    <article className={messageClasses}>
      {textHeader &&
        <div className="message-header">
          <p>{textHeader}</p>
          <button className="delete" aria-label="delete" />
        </div>
      }
      <div className="message-body">
        <p>{textBody}</p>
      </div>
    </article>
  );
};
