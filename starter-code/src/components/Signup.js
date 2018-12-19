import React from 'react';
import { Container } from './Container';
import { NavBar } from './NavBar';
import { FormField } from './FormField';
import { CoolButton } from './CoolButton';

export const Signup = () => {
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
              <FormField
                label="Password"
                type="password"
                placeholder="e.g. password"
              />
            </form>
          </div>
        </div>
        <div className="column is-half is-offset-one-quarter ">
          <div className="field is-text-centered main-buttons">
            <CoolButton isMedium isDanger className="is-rounded">
              Submit
            </CoolButton>
          </div>
        </div>
      </main>
    </Container>
  )
};

