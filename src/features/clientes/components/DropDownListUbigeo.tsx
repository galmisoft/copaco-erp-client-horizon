import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { Query } from "@syncfusion/ej2-data";
import { useEffect, useRef } from "react";

type PropsUbigeo = {
  ubigeo?: string;
};

export const DropDownListUbigeo = ({ ubigeo }: PropsUbigeo) => {
  const departamentoObj = useRef<DropDownListComponent | null>();
  const departamentoField = { value: "codigo", text: "departamento" };
  const departamentoData = [
    {
      departamento: "AMAZONAS",
      id_depart: 9161,
      codigo: "01",
    },
    {
      departamento: "ANCASH",
      id_depart: 9162,
      codigo: "02",
    },
    {
      departamento: "APURIMAC",
      id_depart: 9163,
      codigo: "03",
    },
    {
      departamento: "AREQUIPA",
      id_depart: 9164,
      codigo: "04",
    },
    {
      departamento: "AYACUCHO",
      id_depart: 9165,
      codigo: "05",
    },
    {
      departamento: "LIMA",
      id_depart: 9175,
      codigo: "15",
    },
  ];

  const provinciaObj = useRef<DropDownListComponent | null>();
  const provinciaField = { value: "codigo", text: "provincia" };
  const provinciaData = [
    {
      provincia: "CHACHAPOYAS",
      id_provin: 8966,
      codigo: "0101",
    },
    {
      provincia: "BAGUA",
      id_provin: 8967,
      codigo: "0102",
    },
    {
      provincia: "BONGARA",
      id_provin: 8968,
      codigo: "0103",
    },
    {
      provincia: "CONDORCANQUI",
      id_provin: 8969,
      codigo: "0104",
    },
    {
      provincia: "LUYA",
      id_provin: 8970,
      codigo: "0105",
    },
    {
      provincia: "RODRIGUEZ DE MENDOZA",
      id_provin: 8971,
      codigo: "0106",
    },
    {
      provincia: "UTCUBAMBA",
      id_provin: 8972,
      codigo: "0107",
    },
    {
      provincia: "HUARAZ",
      id_provin: 8973,
      codigo: "0201",
    },
    {
      provincia: "AIJA",
      id_provin: 8974,
      codigo: "0202",
    },
    {
      provincia: "ANTONIO RAYMONDI",
      id_provin: 8975,
      codigo: "0203",
    },
    {
      provincia: "ASUNCION",
      id_provin: 8976,
      codigo: "0204",
    },
    {
      provincia: "BOLOGNESI",
      id_provin: 8977,
      codigo: "0205",
    },
    {
      provincia: "LIMA",
      id_provin: 9093,
      codigo: "1501",
    },
    {
      provincia: "BARRANCA",
      id_provin: 9094,
      codigo: "1502",
    },
    {
      provincia: "CAJATAMBO",
      id_provin: 9095,
      codigo: "1503",
    },
    {
      provincia: "CANTA",
      id_provin: 9096,
      codigo: "1504",
    },
    {
      provincia: "CAÑETE",
      id_provin: 9097,
      codigo: "1505",
    },
    {
      provincia: "HUARAL",
      id_provin: 9098,
      codigo: "1506",
    },
    {
      provincia: "HUAROCHIRI",
      id_provin: 9099,
      codigo: "1507",
    },
    {
      provincia: "HUAURA",
      id_provin: 9100,
      codigo: "1508",
    },
    {
      provincia: "OYON",
      id_provin: 9101,
      codigo: "1509",
    },
    {
      provincia: "YAUYOS",
      id_provin: 9102,
      codigo: "1510",
    },
  ];

  const ubigeoObj = useRef<DropDownListComponent | null>();
  const ubigeoField = { value: "codpdistr", text: "distrito" };
  const ubigeoData = [
    {
      id_ubigeo: 7127,
      ubigeo: "010101",
      coddepart: "01",
      codprovin: "0101",
      codpdistr: "010101",
      departamento: "AMAZONAS",
      provincia: "CHACHAPOYAS",
      distrito: "CHACHAPOYAS",
    },
    {
      id_ubigeo: 7128,
      ubigeo: "010102",
      coddepart: "01",
      codprovin: "0101",
      codpdistr: "010102",
      departamento: "AMAZONAS",
      provincia: "CHACHAPOYAS",
      distrito: "ASUNCION",
    },
    {
      id_ubigeo: 7129,
      ubigeo: "010103",
      coddepart: "01",
      codprovin: "0101",
      codpdistr: "010103",
      departamento: "AMAZONAS",
      provincia: "CHACHAPOYAS",
      distrito: "BALSAS",
    },
    {
      id_ubigeo: 7130,
      ubigeo: "010104",
      coddepart: "01",
      codprovin: "0101",
      codpdistr: "010104",
      departamento: "AMAZONAS",
      provincia: "CHACHAPOYAS",
      distrito: "CHETO",
    },
    {
      id_ubigeo: 7131,
      ubigeo: "010105",
      coddepart: "01",
      codprovin: "0101",
      codpdistr: "010105",
      departamento: "AMAZONAS",
      provincia: "CHACHAPOYAS",
      distrito: "CHILIQUIN",
    },
    {
      id_ubigeo: 8375,
      ubigeo: "150101",
      coddepart: "15",
      codprovin: "1501",
      codpdistr: "150101",
      departamento: "LIMA",
      provincia: "LIMA",
      distrito: "LIMA",
    },
    {
      id_ubigeo: 8376,
      ubigeo: "150102",
      coddepart: "15",
      codprovin: "1501",
      codpdistr: "150102",
      departamento: "LIMA",
      provincia: "LIMA",
      distrito: "ANCON",
    },
    {
      id_ubigeo: 8377,
      ubigeo: "150103",
      coddepart: "15",
      codprovin: "1501",
      codpdistr: "150103",
      departamento: "LIMA",
      provincia: "LIMA",
      distrito: "ATE",
    },
    {
      id_ubigeo: 8378,
      ubigeo: "150104",
      coddepart: "15",
      codprovin: "1501",
      codpdistr: "150104",
      departamento: "LIMA",
      provincia: "LIMA",
      distrito: "BARRANCO",
    },
    {
      id_ubigeo: 8379,
      ubigeo: "150105",
      coddepart: "15",
      codprovin: "1501",
      codpdistr: "150105",
      departamento: "LIMA",
      provincia: "LIMA",
      distrito: "BREÑA",
    },
    {
      id_ubigeo: 8380,
      ubigeo: "150106",
      coddepart: "15",
      codprovin: "1501",
      codpdistr: "150106",
      departamento: "LIMA",
      provincia: "LIMA",
      distrito: "CARABAYLLO",
    },
    {
      id_ubigeo: 8381,
      ubigeo: "150107",
      coddepart: "15",
      codprovin: "1501",
      codpdistr: "150107",
      departamento: "LIMA",
      provincia: "LIMA",
      distrito: "CHACLACAYO",
    },
    {
      id_ubigeo: 8414,
      ubigeo: "150140",
      coddepart: "15",
      codprovin: "1501",
      codpdistr: "150140",
      departamento: "LIMA",
      provincia: "LIMA",
      distrito: "SANTIAGO DE SURCO",
    },
  ];

  const onDepartamentoChange = () => {
    // query the data source based on departamento DropDownList selected value
    provinciaObj.current!.query = new Query().where(
      "codigo",
      "startswith",
      departamentoObj.current?.value
    );

    // clear the existing selection.
    // provinciaObj.current!.value = "";

    // enable the provincia DropDownList
    provinciaObj.current!.enabled = true;

    // clear the existing selection in distrito DropDownList
    // ubigeoObj.current!.value = "";

    // disable the distrito DropDownList
    ubigeoObj.current!.enabled = false;
  };

  const onProvinciaChange = () => {
    // query the data source based on provincia DropDownList selected value
    ubigeoObj.current!.query = new Query().where(
      "codprovin",
      "equal",
      provinciaObj.current?.value
    );

    // enable the provincia DropDownList
    ubigeoObj.current!.enabled = true;

    // clear the existing selection
    // ubigeoObj.current!.value = "";
  };

  useEffect(() => {
    if (ubigeo) {
      const depa = ubigeo.substring(0, 2);
      const prov = ubigeo.substring(0, 4);
      departamentoObj.current!.value = depa;
      onDepartamentoChange();
      provinciaObj.current!.value = prov;
      onProvinciaChange();
      ubigeoObj.current!.value = ubigeo;
    }
  }, [ubigeo]);

  return (
    <>
      {/* Departamento */}
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <DropDownListComponent
          id="id_departamento"
          ref={(scope) => {
            departamentoObj.current = scope;
          }}
          fields={departamentoField}
          dataSource={departamentoData}
          placeholder="* Departamento"
          change={onDepartamentoChange}
          popupHeight="300px"
          floatLabelType="Always"
          form="noSubmitForm"
        />
      </div>

      {/* Provincia */}
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <DropDownListComponent
          id="id_provincia"
          ref={(scope) => {
            provinciaObj.current = scope;
          }}
          enabled={false}
          fields={provinciaField}
          dataSource={provinciaData}
          placeholder="* Provincia"
          change={onProvinciaChange}
          popupHeight="300px"
          floatLabelType="Always"
          form="noSubmitForm"
        />
      </div>

      {/* Distrito */}
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <DropDownListComponent
          id="id_ubigeo"
          name="ubigeo"
          ref={(scope) => {
            ubigeoObj.current = scope;
          }}
          enabled={false}
          fields={ubigeoField}
          dataSource={ubigeoData}
          placeholder="* Distrito"
          popupHeight="300px"
          floatLabelType="Always"
        />
      </div>
    </>
  );
};
