import React from 'react';

function NotFound() {
  return (
    <main>
      <div>
        <p>404</p>
        <h1>Page not found</h1>
        <p>Sorry, we couldn’t find the page you’re looking for.</p>
        <div>
          <a href="#">Go back home</a>
          <a href="#">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
