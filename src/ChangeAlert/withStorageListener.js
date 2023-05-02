// maquetada con ejemplo de higth ordr component
import React from 'react';

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);
    
    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en TODOS_V1');
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.syncronize();
      setStorageChange(false);
    };

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    );
  }
}

export { withStorageListener };


// React Hooks

// import React from 'react';

// function useStorageListener(sincronize) {
//   const [storageChange, setStorageChange] = React.useState(false);
  
//   window.addEventListener('storage', (change) => {
//     if (change.key === 'TODOS_V1') {
//       console.log('Hubo cambios en TODOS_V1');
//       setStorageChange(true);
//     }
//   });

//   const toggleShow = () => {
//     sincronize();
//     setStorageChange(false);
//   };

//   return {
//     show: storageChange,
//     toggleShow,
//   };
// }

// export { useStorageListener };