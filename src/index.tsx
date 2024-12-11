import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);

export {}



// const root = document.getElementById('root');

// if (root){
//   createRoot(root).render(
//   <QueryClientProvider client={client}>
//     <App />
//   <QueryClientProvider/>
//   );
// }

// // root.render(
// //   <QueryClientProvider client={client}>
// //     <App />
// //   <QueryClientProvider/>
// // ); 
