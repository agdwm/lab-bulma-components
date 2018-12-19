import React from "react";
import { Container } from './Container';
import { Message } from './Message';
import { NavBar } from "./navBar";
import { FormField } from "./formField";
import { CoolButton } from "./CoolButton";

export const App = () => {
  return (
    <Container>
      <NavBar />
      <main className="main-content">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <form>
              <FormField
                label="Name"
                type="text"
                placeholder="e.g Alex Smith"
              />
              <FormField
                label="Email"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              />
            </form>
          </div>
        </div>
        <div className="column is-half is-offset-one-quarter ">
          <div className="field is-text-centered main-buttons">
            <CoolButton isSmall isDanger isRounded>
              Button 1
            </CoolButton>
            <CoolButton isSmall isSuccess>
              Button 2
            </CoolButton>
          </div>
        </div>
      </main>
      <Message isLink className="Message">
        <div className="message-header">
          <p>Hello World</p>
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna
          a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
      </Message>
    </Container>
  );
};
