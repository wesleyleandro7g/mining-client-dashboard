import React from "react";
import MaterialTable from "material-table";

export default function TablePreferences() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Pais", field: "pais" },
      { title: "Região", field: "region" },
      { title: "Mineradoras Ativas", field: "Mineradoras", type: "numeric" },
    ],
    data: [
      {
        pais: "Brasil",
        region: "Centro Oeste",
        Mineradoras: 72,
      },
      {
        pais: "Brasil",
        region: "Norte de Minas Gerais",
        Mineradoras: 104,
      },
    ],
  });

  return (
    <MaterialTable
      title="Regiões de preferência"
      columns={state.columns}
      data={state.data}
      style={{ width: "100%", height: "90%" }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
