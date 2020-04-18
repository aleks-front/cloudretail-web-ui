import React from 'react';

export const SignInPage = () => {
  return (
    <div>
      <form>
        <div>
          <label>Username</label>
          <input name="username" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <div>
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
};
