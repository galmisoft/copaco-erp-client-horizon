import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DataManager, Query, ReturnOption } from "@syncfusion/ej2-data";
import { useEffect, useMemo, useRef } from "react";

type PropsUbigeo = {
  subcanal?: number;
};

interface ICanal {
  canal: string;
  id_canal: number;
  codigo: string;
}

interface ISubCanal extends ICanal {
  subcanal: string;
  id_subcanal: number;
  id_lista: number;
}

export const DropDownListCanal = ({ subcanal }: PropsUbigeo) => {
  const canalObj = useRef<DropDownListComponent | null>();
  const canalField = { value: "id_canal", text: "canal" };
  const canalData = [
    {
      canal: "TIENDAS",
      id_canal: 9879,
      codigo: "001",
    },
    {
      canal: "AUTOSERVICIOS",
      id_canal: 9874,
      codigo: "002",
    },
    {
      canal: "CANAL ABEL 2 EDITADO",
      id_canal: 10071,
      codigo: "123",
    },
  ];

  const subCanalObj = useRef<DropDownListComponent | null>();
  const subCanalField = { value: "id_subcanal", text: "subcanal" };
  const subCanalData = useMemo(
    () => [
      {
        subcanal: "TIENDA CAJAMARCA",
        id_subcanal: 9855,
        codigo: "00101",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9928,
      },
      {
        subcanal: "TIENDA ABEL NUEVO",
        id_subcanal: 10060,
        codigo: "00101",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9928,
      },
      {
        subcanal: "TIENDA CHACARILLA",
        id_subcanal: 9910,
        codigo: "00102",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9995,
      },
      {
        subcanal: "TIENDA FABRICA",
        id_subcanal: 9911,
        codigo: "00103",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9928,
      },
      {
        subcanal: "TIENDA JOCKEY",
        id_subcanal: 9912,
        codigo: "00104",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9995,
      },
      {
        subcanal: "TIENDA MIRAFLORES",
        id_subcanal: 9996,
        codigo: "00105",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9995,
      },
      {
        subcanal: "WEB LIMA",
        id_subcanal: 9913,
        codigo: "00106",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9995,
      },
      {
        subcanal: "WEB ICA",
        id_subcanal: 9856,
        codigo: "00107",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9928,
      },
      {
        subcanal: "PEDIDOS YA! LIMA",
        id_subcanal: 9933,
        codigo: "00108",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9995,
      },
      {
        subcanal: "PEDIDOS YA! ICA",
        id_subcanal: 9932,
        codigo: "00109",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9928,
      },
      {
        subcanal: "TIENDA PLAZA NORTE",
        id_subcanal: 10012,
        codigo: "00111",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9995,
      },
      {
        subcanal: "TIENDA LA RAMBLA",
        id_subcanal: 10018,
        codigo: "00112",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9995,
      },
      {
        subcanal: "TIENDA MEGAPLAZA",
        id_subcanal: 10024,
        codigo: "00113",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9995,
      },
      {
        subcanal: "TIENDA QUINDE",
        id_subcanal: 10025,
        codigo: "00114",
        id_canal: 9879,
        canal: "TIENDAS",
        id_lista: 9928,
      },
    ],
    []
  );

  const onCanalChange = () => {
    // query the data source based on state DropDownList selected value
    subCanalObj.current!.query = new Query().where(
      "id_canal",
      "equal",
      canalObj.current?.value
    );
    // clear the existing selection
    // subCanalObj.current!.value = "";

    // enable the subcanal DropDownList
    subCanalObj.current!.enabled = true;
  };

  useEffect(() => {
    if (subcanal) {
      const query = new Query().where("id_subcanal", "equal", subcanal);
      new DataManager({ json: subCanalData })
        .executeQuery(query)
        .then((e: ReturnOption) => {
          const res = e.result as ISubCanal[];
          if (res.length > 0) {
            const canal = res[0].id_canal;
            canalObj.current!.value = canal;
            onCanalChange();
            subCanalObj.current!.value = subcanal;
          }
        });
    }
  }, [subCanalData, subcanal]);

  return (
    <>
      {/* Canal */}
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <DropDownListComponent
          id="id_canal"
          name="canal_backup"
          ref={(scope) => {
            canalObj.current = scope;
          }}
          fields={canalField}
          dataSource={canalData}
          placeholder="* Canal"
          change={onCanalChange}
          popupHeight="300px"
          floatLabelType="Always"
          form="noSubmitForm"
        />
      </div>
      {/* SubCanal */}
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <DropDownListComponent
          id="id_subcanal"
          name="id_canal" // se coloco porque el id que requiere es el de subcanal pero el nombre del parametro es id_canal
          ref={(scope) => {
            subCanalObj.current = scope;
          }}
          enabled={false}
          fields={subCanalField}
          dataSource={subCanalData}
          placeholder="* SubCanal"
          popupHeight="300px"
          floatLabelType="Always"
        />
      </div>
    </>
  );
};
